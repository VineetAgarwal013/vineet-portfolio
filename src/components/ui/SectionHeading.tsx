interface SectionHeadingProps {
  index: string;
  label: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeading({
  index,
  label,
  title,
  subtitle,
  center,
}: SectionHeadingProps) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="eyebrow">
        {index} · {label}
      </p>
      <h2 className="mt-3 font-display text-[2rem] leading-[1.15] font-bold tracking-tight md:text-[2.75rem]">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-base text-muted md:text-lg">{subtitle}</p>}
    </div>
  );
}