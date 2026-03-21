import Image from "next/image";

interface LogoWatermarkProps {
  /** "light" uses the white logo (for dark backgrounds), "dark" uses the standard logo (for light backgrounds) */
  variant?: "light" | "dark";
  /** CSS opacity value, default 0.04 (4%) */
  opacity?: number;
  /** Tailwind size class for width/height, default "w-[500px] h-[500px]" */
  size?: string;
  /** Position classes, default "absolute right-0 bottom-0" */
  position?: string;
  /** Extra className */
  className?: string;
}

export default function LogoWatermark({
  variant = "light",
  opacity = 0.04,
  size = "w-[500px] h-[500px]",
  position = "absolute right-0 bottom-0",
  className = "",
}: LogoWatermarkProps) {
  const src =
    variant === "light"
      ? "/xenon-logo-white-512.png"
      : "/xenon-logo-512.png";

  return (
    <div
      className={`${position} ${size} pointer-events-none select-none ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <Image
        src={src}
        alt=""
        fill
        className="object-contain"
        sizes="500px"
        priority={false}
      />
    </div>
  );
}
