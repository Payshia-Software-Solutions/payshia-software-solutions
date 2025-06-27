import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { ServicesSection } from '@/components/services-section';
import { PortfolioSection } from '@/components/portfolio-section';
import { BlogSection } from '@/components/blog-section';
import { CtaSection } from '@/components/cta-section';
import { Footer } from '@/components/footer';

export default async function Home() {
  const description = "Your Partner in Digital Transformation. Payshia Software Solution Pvt Ltd. delivers cutting-edge software development and IT services tailored to propel your business forward.";

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection description={description} />
        <ServicesSection />
        <PortfolioSection />
        <BlogSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
