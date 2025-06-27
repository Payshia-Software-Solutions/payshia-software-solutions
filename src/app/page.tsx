import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { TransformingSection } from '@/components/transforming-section';
import { ServicesSection } from '@/components/services-section';
import { PortfolioSection } from '@/components/portfolio-section';
import { BlogSection } from '@/components/blog-section';
import { CtaSection } from '@/components/cta-section';
import { Footer } from '@/components/footer';
import { WhyChooseUsSection } from '@/components/why-choose-us-section';
import { TrustedBySection } from '@/components/trusted-by-section';

export default async function Home() {

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <TransformingSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <TrustedBySection />
        <PortfolioSection />
        <BlogSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
