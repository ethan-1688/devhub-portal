"use client";

import { useState } from "react";
import { featuredProducts } from "@/data/site";
import { SectionHeader } from "./SectionHeader";

export function ProductTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProduct = featuredProducts[activeIndex];

  return (
    <section className="bg-slate-50 py-20" id="products">
      <div className="container-page">
        <SectionHeader
          eyebrow="Featured products"
          title="Choose the right building block"
          description="Click a product tab to preview what it helps your integration do."
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-3">
            {featuredProducts.map((product, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  className={`rounded-card border p-5 text-left transition duration-200 ${
                    isActive
                      ? "border-ink bg-ink text-white shadow-soft"
                      : "border-line bg-white text-ink hover:-translate-y-0.5 hover:border-slate-300"
                  }`}
                  key={product.name}
                  onClick={() => setActiveIndex(index)}
                  type="button"
                >
                  <p
                    className={`text-xs font-bold uppercase tracking-[0.16em] ${
                      isActive ? "text-cyan-200" : "text-cyan-700"
                    }`}
                  >
                    {product.tag}
                  </p>
                  <h3 className="mt-2 text-xl font-black">{product.name}</h3>
                </button>
              );
            })}
          </div>

          <article className="rounded-card border border-line bg-white p-7 shadow-soft sm:p-9">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-pink-600">
              {activeProduct.tag}
            </p>
            <h3 className="mt-3 text-3xl font-black tracking-tight text-ink">
              {activeProduct.name}
            </h3>
            <p className="mt-5 max-w-2xl text-base leading-8 text-muted">
              {activeProduct.description}
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {activeProduct.features.map((feature) => (
                <div className="rounded-3xl bg-slate-50 p-5" key={feature}>
                  <span className="mb-4 block h-2 w-10 rounded-full bg-gradient-to-r from-cyanGlow to-pinkGlow" />
                  <p className="text-sm font-bold leading-6 text-ink">{feature}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
