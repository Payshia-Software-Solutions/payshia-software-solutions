import { generateCompanyIntro } from '@/ai/flows/generate-company-intro';
import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { ServicesSection } from '@/components/services-section';
import { PortfolioSection } from '@/components/portfolio-section';
import { BlogSection } from '@/components/blog-section';
import { CtaSection } from '@/components/cta-section';
import { Footer } from '@/components/footer';

export default async function Home() {
  let initialIntro = "We craft high-quality, scalable, and innovative software solutions to propel your business forward. Partner with us to build the future.";
  
  try {
    // Generate the initial introduction content on the server.
    const introData = await generateCompanyIntro({
      currentTrends: 'AI-driven development, low-code platforms, and increased focus on cybersecurity.',
    });
    if (introData?.introduction) {
      initialIntro = introData.introduction;
    }
  } catch (e) {
    console.error('Failed to generate company intro. Make sure your GOOGLE_API_KEY is set in .env', e);
    // Silently fail and use the default intro. The app will still be functional.
  }


  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection initialIntro={initialIntro} />
        <ServicesSection />
        <PortfolioSection />
        <BlogSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
