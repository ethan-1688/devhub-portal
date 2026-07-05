import { news } from "@/data/site";
import { SectionHeader } from "./SectionHeader";

export function WhatsNew() {
  return (
    <section className="bg-ink py-20 text-white" id="blog">
      <div className="container-page">
        <SectionHeader
          eyebrow="What's new"
          title="Latest developer updates"
          description="Product notes, guides, and platform news for teams building integrations."
          tone="dark"
        />
        <div className="grid gap-5 md:grid-cols-3">
          {news.map((item) => (
            <article
              className="rounded-card border border-white/10 bg-white/[0.06] p-6 transition duration-200 hover:-translate-y-1 hover:bg-white/[0.09]"
              key={item.title}
            >
              <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-ink">
                {item.tag}
              </span>
              <h3 className="mt-6 text-xl font-black leading-7">{item.title}</h3>
              <p className="mt-4 text-sm leading-6 text-slate-300">{item.summary}</p>
              <a
                className="mt-6 inline-flex text-sm font-bold text-cyan-200 hover:text-white"
                href={item.href}
              >
                Learn more
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
