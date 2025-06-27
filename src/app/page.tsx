import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { TransformingSection } from '@/components/transforming-section';
import { ServicesSection } from '@/components/services-section';
import { PortfolioSection } from '@/components/portfolio-section';
import { CtaSection } from '@/components/cta-section';
import { Footer } from '@/components/footer';
import { WhyChooseUsSection } from '@/components/why-choose-us-section';
import { TrustedBySection } from '@/components/trusted-by-section';

export default async function Home() {

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <div className="relative">
          <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 to-transparent" />
          <div className="relative z-10">
            <TransformingSection />
            <ServicesSection />
            <WhyChooseUsSection />
            <TrustedBySection />
            <CtaSection />
            <PortfolioSection />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
