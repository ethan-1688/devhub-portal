import { useCases } from "@/data/site";
import { SectionHeader } from "./SectionHeader";

export function UseCases() {
  return (
    <section className="container-page py-20">
      <SectionHeader
        eyebrow="Use cases"
        title="Build the flows your users expect"
        description="Start with common developer scenarios and shape them around your product."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {useCases.map((item, index) => (
          <article
            className="group rounded-card border border-line bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-soft"
            key={item.title}
          >
            <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-100 to-pink-100 text-sm font-black text-ink">
              0{index + 1}
            </div>
            <h3 className="text-lg font-black text-ink">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
