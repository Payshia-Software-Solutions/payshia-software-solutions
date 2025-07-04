import { Header } from '@/components/header';
import { TransformingSection } from '@/components/transforming-section';
import { WhyChooseUsSection } from '@/components/why-choose-us-section';
import { TrustedBySection } from '@/components/trusted-by-section';
import { Footer } from '@/components/footer';

export default function WhyUsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      <main className="flex-1 pt-24">
        <TransformingSection />
        <WhyChooseUsSection />
        <TrustedBySection />
      </main>
      <Footer />
    </div>
  );
}
