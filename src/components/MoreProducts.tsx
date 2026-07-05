import { moreProducts } from "@/data/site";
import { SectionHeader } from "./SectionHeader";

export function MoreProducts() {
  return (
    <section className="container-page py-20" id="docs">
      <SectionHeader
        eyebrow="More products"
        title="More ways to extend your app"
        description="A compact catalog of APIs and tools for common platform needs."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {moreProducts.map((product) => (
          <a
            className="group rounded-card border border-line bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-ink hover:shadow-soft"
            href="#docs"
            key={product.name}
          >
            <div className="mb-6 h-1.5 w-16 rounded-full bg-gradient-to-r from-cyanGlow to-pinkGlow transition group-hover:w-24" />
            <h3 className="text-xl font-black text-ink">{product.name}</h3>
            <p className="mt-3 text-sm leading-6 text-muted">{product.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
