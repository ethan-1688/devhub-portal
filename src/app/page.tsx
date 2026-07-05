import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MoreProducts } from "@/components/MoreProducts";
import { ProductTabs } from "@/components/ProductTabs";
import { Subscribe } from "@/components/Subscribe";
import { UseCases } from "@/components/UseCases";
import { WhatsNew } from "@/components/WhatsNew";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <UseCases />
        <ProductTabs />
        <MoreProducts />
        <WhatsNew />
        <Subscribe />
      </main>
      <Footer />
    </>
  );
}
