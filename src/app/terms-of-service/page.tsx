
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function TermsOfServicePage() {
  const lastUpdated = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      <main className="flex-1 pt-32 pb-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 to-transparent">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-8 text-white/80">
            <header className="space-y-4">
                <h1 className="font-headline text-4xl sm:text-5xl font-bold tracking-tight text-primary">Terms of Service</h1>
                <p className="text-lg">Last updated: {lastUpdated}</p>
            </header>
            
            <section className="space-y-4">
                <h2 className="font-headline text-3xl font-bold text-white pt-4 border-t border-primary/20">1. Terms</h2>
                <p>
                    By accessing the website at https://payshia.com, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="font-headline text-3xl font-bold text-white pt-4 border-t border-primary/20">2. Use License</h2>
                <ol className="list-decimal list-inside space-y-2 pl-4">
                    <li>
                        Permission is granted to temporarily download one copy of the materials (information or software) on Payshia Software Solutions' website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                        <ul className="list-disc list-inside space-y-2 pl-8 mt-2">
                            <li>modify or copy the materials;</li>
                            <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                            <li>attempt to decompile or reverse engineer any software contained on Payshia Software Solutions' website;</li>
                            <li>remove any copyright or other proprietary notations from the materials; or</li>
                            <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
                        </ul>
                    </li>
                    <li>
                        This license shall automatically terminate if you violate any of these restrictions and may be terminated by Payshia Software Solutions at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.
                    </li>
                </ol>
            </section>

            <section className="space-y-4">
                <h2 className="font-headline text-3xl font-bold text-white pt-4 border-t border-primary/20">3. Disclaimer</h2>
                <p>
                    The materials on Payshia Software Solutions' website are provided on an 'as is' basis. Payshia Software Solutions makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="font-headline text-3xl font-bold text-white pt-4 border-t border-primary/20">4. Limitations</h2>
                <p>
                    In no event shall Payshia Software Solutions or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Payshia Software Solutions' website, even if Payshia Software Solutions or a Payshia Software Solutions authorized representative has been notified orally or in writing of the possibility of such damage.
                </p>
            </section>
            
            <section className="space-y-4">
                <h2 className="font-headline text-3xl font-bold text-white pt-4 border-t border-primary/20">5. Governing Law</h2>
                <p>
                    These terms and conditions are governed by and construed in accordance with the laws of Sri Lanka and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
                </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
