type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  tone?: "light" | "dark";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  tone = "light",
}: SectionHeaderProps) {
  const isDark = tone === "dark";

  return (
    <div className="mx-auto mb-10 max-w-2xl text-center">
      <p
        className={`mb-3 text-sm font-bold uppercase tracking-[0.18em] ${
          isDark ? "text-cyan-200" : "text-cyan-700"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`text-3xl font-black tracking-tight sm:text-4xl ${
          isDark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-base leading-7 ${
            isDark ? "text-slate-300" : "text-muted"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
