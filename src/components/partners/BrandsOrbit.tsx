"use client";

import Image from "next/image";
import { brandLogoMap, brandUrlMap } from "@/data/brands";

type Brand = { name: string };

// The orbital plane is tilted toward the viewer by this angle. Must stay in
// sync with the CSS `--tilt` on .orbit-stage — it's injected into each chip's
// billboard transform so logos face the camera dead-on.
const TILT = 58;

// Concentric orbit rings. `frac` is the ring radius as a fraction of the stage
// size (--s); `dur` is one full revolution; `reverse` flips spin direction so
// adjacent rings counter-rotate for a richer parallax effect.
const RING_CONFIG = [
  { frac: 0.22, dur: 50, reverse: false, offset: 0 },
  { frac: 0.34, dur: 78, reverse: true, offset: 16 },
  { frac: 0.46, dur: 110, reverse: false, offset: 8 },
];

// Split the brands across the three rings (inner → outer). Inner rings hold
// fewer chips so spacing stays even as the radius grows.
function distribute(brands: Brand[]) {
  const counts = [7, 12, brands.length - 19];
  return [
    brands.slice(0, counts[0]),
    brands.slice(counts[0], counts[0] + counts[1]),
    brands.slice(counts[0] + counts[1]),
  ];
}

function Chip({ brand }: { brand: Brand }) {
  const logo = brandLogoMap[brand.name];
  const href = brandUrlMap[brand.name];

  const inner = logo ? (
    <Image
      src={logo}
      alt={brand.name}
      width={120}
      height={48}
      loading="eager"
      className="relative z-10 w-auto h-auto max-w-[68%] max-h-[46%] object-contain"
    />
  ) : (
    <span className="relative z-10 px-1 text-[9px] font-bold leading-tight text-text-muted text-center">
      {brand.name}
    </span>
  );

  // Layout, centering (-translate-1/2 onto the orbit anchor point), grayscale
  // and hover scale live in Tailwind here. The spherical "orb" surface (radial
  // shading, inset curvature shadows, specular highlight) lives in the global
  // `.orbit-planet` rule — Tailwind's `ring`/`shadow` are box-shadow based and
  // would clobber the multi-layer sphere shadow, so they're avoided.
  const className =
    "orbit-planet group/chip relative flex items-center justify-center rounded-full w-13 h-13 sm:w-17.5 sm:h-17.5 -translate-x-1/2 -translate-y-1/2 grayscale-[0.2] transition-[transform,filter,box-shadow] duration-300 hover:grayscale-0 hover:scale-[1.18] hover:z-20 focus-visible:grayscale-0 focus-visible:scale-[1.18] focus-visible:z-20 focus-visible:outline-none";

  const label = (
    <span className="pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-dark/90 px-2 py-0.5 text-[10px] font-semibold text-white opacity-0 transition-opacity duration-200 group-hover/chip:opacity-100 group-focus-visible/chip:opacity-100">
      {brand.name}
    </span>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={brand.name}
        className={className}
      >
        {inner}
        {label}
      </a>
    );
  }
  return (
    <div aria-label={brand.name} className={className}>
      {inner}
      {label}
    </div>
  );
}

export default function BrandsOrbit({ brands }: { brands: Brand[] }) {
  const rings = distribute(brands);

  return (
    // Forced LTR so the orbit geometry behaves identically in both reading
    // directions (3D rotations are not affected by text direction).
    <div className="orbit-stage relative mx-auto" dir="ltr">
      {/* Soft radial glow behind the whole constellation (flat, 2D) */}
      <div className="orbit-backdrop" aria-hidden="true" />

      {/* The tilted 3D world — everything inside lives in the orbital plane */}
      <div className="orbit-system">
        {/* Elliptical orbit guides — flat circles foreshortened by the tilt */}
        {RING_CONFIG.map((ring, i) => (
          <div
            key={`guide-${i}`}
            aria-hidden="true"
            className="orbit-guide"
            style={{ width: `calc(var(--s) * ${ring.frac * 2})`, height: `calc(var(--s) * ${ring.frac * 2})` }}
          />
        ))}

        {/* Rotating rings of brand chips */}
        {rings.map((rowBrands, ringIdx) => {
          const ring = RING_CONFIG[ringIdx];
          const step = 360 / rowBrands.length;
          return (
            <div
              key={`ring-${ringIdx}`}
              className="orbit-track orbit-anim"
              style={{
                animationName: "orbit-spin",
                animationDuration: `${ring.dur}s`,
                animationDirection: ring.reverse ? "reverse" : "normal",
              }}
            >
              {rowBrands.map((brand, idx) => {
                const angle = ring.offset + step * idx;
                return (
                  <div
                    key={brand.name}
                    className="orbit-anchor"
                    style={{
                      transform: `rotateZ(${angle}deg) translateY(calc(var(--s) * -${ring.frac}))`,
                    }}
                  >
                    {/* Counter-spin cancels the ring's rotation... */}
                    <div
                      className="orbit-counter orbit-anim"
                      style={{
                        animationName: "orbit-spin",
                        animationDuration: `${ring.dur}s`,
                        animationDirection: ring.reverse ? "normal" : "reverse",
                      }}
                    >
                      {/* ...and the billboard undoes the placement + plane tilt
                          so the logo always faces the camera head-on. */}
                      <div
                        className="orbit-billboard"
                        style={{ transform: `rotateZ(${-angle}deg) rotateX(${-TILT}deg)` }}
                      >
                        <Chip brand={brand} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}

        {/* Center hub — the Xenon "sun", billboarded to face the camera */}
        <div className="orbit-center">
          <span className="orbit-center-glow" aria-hidden="true" />
          <span className="orbit-center-ring" aria-hidden="true" />
          <div className="orbit-center-disc">
            <Image
              src="/xenon-logo-256.png"
              alt="Xenon Trade & Contracting"
              width={198}
              height={256}
              priority
              className="w-3/4 h-3/4 object-contain"
            />
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes orbit-spin {
          from {
            transform: rotateZ(0deg);
          }
          to {
            transform: rotateZ(360deg);
          }
        }
        @keyframes orbit-pulse {
          0%,
          100% {
            opacity: 0.55;
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            opacity: 0.25;
            transform: translate(-50%, -50%) scale(1.18);
          }
        }

        /* Spherical brand "planets" — lit from the upper-left, curved top
           highlight + bottom core shadow, and a glossy specular glint. */
        .orbit-planet {
          background: radial-gradient(
            circle at 34% 28%,
            #ffffff 0%,
            #f2f2f6 50%,
            #d0d0d9 100%
          );
          box-shadow:
            0 10px 26px rgba(0, 0, 0, 0.5),
            inset 0 -7px 13px rgba(0, 0, 0, 0.22),
            inset 0 6px 12px rgba(255, 255, 255, 0.95),
            inset 0 0 0 1px rgba(255, 255, 255, 0.55);
        }
        .orbit-planet::before {
          content: "";
          position: absolute;
          top: 8%;
          left: 15%;
          width: 44%;
          height: 34%;
          border-radius: 50%;
          background: radial-gradient(
            circle at 42% 38%,
            rgba(255, 255, 255, 0.95) 0%,
            rgba(255, 255, 255, 0) 70%
          );
          z-index: 1;
          pointer-events: none;
        }
        .orbit-planet:hover,
        .orbit-planet:focus-visible {
          box-shadow:
            0 16px 34px rgba(0, 0, 0, 0.55),
            inset 0 -7px 13px rgba(0, 0, 0, 0.18),
            inset 0 6px 12px rgba(255, 255, 255, 0.95),
            0 0 0 2px rgba(218, 165, 32, 0.65);
        }
      `}</style>

      <style jsx>{`
        .orbit-stage {
          --s: clamp(300px, 88vw, 620px);
          --tilt: ${TILT}deg;
          width: var(--s);
          height: var(--s);
          perspective: 820px;
          perspective-origin: 50% 42%;
        }
        .orbit-backdrop {
          position: absolute;
          inset: -12%;
          border-radius: 50%;
          background: radial-gradient(
            circle at center,
            rgba(178, 34, 34, 0.24) 0%,
            rgba(218, 165, 32, 0.12) 42%,
            transparent 70%
          );
        }
        .orbit-system {
          position: absolute;
          inset: 0;
          transform-style: preserve-3d;
          transform: rotateX(var(--tilt));
        }
        .orbit-guide {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          border: 1px dashed rgba(255, 255, 255, 0.16);
        }
        .orbit-track {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 0;
          height: 0;
          transform-style: preserve-3d;
        }
        .orbit-anchor {
          position: absolute;
          left: 0;
          top: 0;
          transform-style: preserve-3d;
        }
        .orbit-counter {
          transform-style: preserve-3d;
        }
        .orbit-billboard {
          transform-style: preserve-3d;
        }
        .orbit-center {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%) rotateX(calc(var(--tilt) * -1));
          display: grid;
          place-items: center;
        }
        .orbit-center-glow {
          position: absolute;
          left: 50%;
          top: 50%;
          width: clamp(180px, 40vw, 300px);
          height: clamp(180px, 40vw, 300px);
          border-radius: 50%;
          background: radial-gradient(
            circle at center,
            rgba(255, 215, 0, 0.35) 0%,
            rgba(178, 34, 34, 0.22) 45%,
            transparent 70%
          );
          transform: translate(-50%, -50%);
          filter: blur(4px);
          animation: orbit-pulse 6s ease-in-out infinite;
        }
        .orbit-center-ring {
          position: absolute;
          left: 50%;
          top: 50%;
          width: clamp(124px, 28vw, 196px);
          height: clamp(124px, 28vw, 196px);
          border-radius: 50%;
          background: radial-gradient(
            circle at center,
            rgba(218, 165, 32, 0.5),
            rgba(178, 34, 34, 0.32) 55%,
            transparent 72%
          );
          transform: translate(-50%, -50%);
        }
        .orbit-center-disc {
          position: relative;
          display: grid;
          place-items: center;
          width: clamp(104px, 24vw, 168px);
          height: clamp(104px, 24vw, 168px);
          border-radius: 50%;
          background: radial-gradient(circle at 38% 32%, #ffffff 0%, #f1f1f4 78%, #dcdce2 100%);
          box-shadow:
            0 18px 60px rgba(0, 0, 0, 0.55),
            inset 0 -8px 18px rgba(0, 0, 0, 0.12),
            inset 0 6px 14px rgba(255, 255, 255, 0.9),
            0 0 0 1px rgba(255, 255, 255, 0.25);
          border: 2px solid rgba(218, 165, 32, 0.65);
        }

        /* Pause everything while the user inspects a brand */
        .orbit-stage:hover .orbit-anim,
        .orbit-stage:focus-within .orbit-anim {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .orbit-anim,
          .orbit-center-glow {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
