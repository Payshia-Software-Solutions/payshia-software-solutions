import { Header } from '@/components/header';
import { PortfolioSection } from '@/components/portfolio-section';
import { Footer } from '@/components/footer';

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      <main className="flex-1 pt-24">
        <PortfolioSection />
      </main>
      <Footer />
    </div>
  );
}
