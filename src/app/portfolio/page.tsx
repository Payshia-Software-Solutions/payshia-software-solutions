import { Header } from '@/components/header';
import { PortfolioSection } from '@/components/portfolio-section';
import { Footer } from '@/components/footer';

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      <main className="flex-1 pt-24 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 to-transparent">
        <PortfolioSection />
      </main>
      <Footer />
    </div>
  );
}
