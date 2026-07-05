import { hero } from "@/data/site";
import { ButtonLink } from "./ButtonLink";

export function Hero() {
  return (
    <section className="container-page grid min-h-[720px] items-center gap-12 pb-20 pt-32 lg:grid-cols-[1.05fr_0.95fr]">
      <div>
        <div className="mb-6 inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-800">
          Developer portal MVP
        </div>
        <h1 className="max-w-4xl text-5xl font-black leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-7xl">
          <span className="gradient-text">{hero.title}</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
          {hero.subtitle}
        </p>
        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <ButtonLink href={hero.primaryAction.href}>
            {hero.primaryAction.label}
          </ButtonLink>
          <ButtonLink href={hero.secondaryAction.href} variant="secondary">
            {hero.secondaryAction.label}
          </ButtonLink>
        </div>
      </div>

      <div className="relative">
        <div className="absolute -left-6 top-8 h-32 w-32 rounded-full bg-cyanGlow/30 blur-3xl" />
        <div className="absolute -right-4 bottom-6 h-32 w-32 rounded-full bg-pinkGlow/25 blur-3xl" />
        <div className="relative overflow-hidden rounded-card border border-black/10 bg-ink p-5 shadow-glow">
          <div className="mb-5 flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-pinkGlow" />
            <span className="h-3 w-3 rounded-full bg-cyanGlow" />
            <span className="h-3 w-3 rounded-full bg-white/50" />
          </div>
          <div className="space-y-4 rounded-[18px] bg-white/[0.04] p-5 font-mono text-sm text-slate-200">
            <p>
              <span className="text-pink-300">const</span>{" "}
              <span className="text-cyan-200">integration</span> = createApp({"{"}
            </p>
            <p className="pl-6">
              name: <span className="text-emerald-200">&quot;Community Studio&quot;</span>,
            </p>
            <p className="pl-6">
              products: [<span className="text-emerald-200">&quot;login&quot;</span>,{" "}
              <span className="text-emerald-200">&quot;sharing&quot;</span>,{" "}
              <span className="text-emerald-200">&quot;publishing&quot;</span>],
            </p>
            <p className="pl-6">
              status: <span className="text-cyan-200">&quot;ready&quot;</span>
            </p>
            <p>{"});"}</p>
          </div>
          <div className="mt-5 grid grid-cols-3 gap-3">
            {["Auth", "Media", "Data"].map((item) => (
              <div
                className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-white"
                key={item}
              >
                <p className="text-xs uppercase tracking-[0.16em] text-slate-400">
                  Module
                </p>
                <p className="mt-2 font-bold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
