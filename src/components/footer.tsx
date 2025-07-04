import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-black text-white/80 py-12 md:py-16">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1: About */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
                <span className="text-xl font-bold font-headline text-primary">Payshia <span className="text-white">Software Solutions</span></span>
            </Link>
            <p className="pr-4">
              Empowering businesses with innovative software solutions that drive growth and efficiency.
            </p>
            <div className="flex space-x-4">
                <Link href="#" aria-label="Facebook" className="hover:text-primary transition-colors">
                    <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" aria-label="Twitter" className="hover:text-primary transition-colors">
                    <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" aria-label="LinkedIn" className="hover:text-primary transition-colors">
                    <Linkedin className="h-5 w-5" />
                </Link>
                <Link href="#" aria-label="Instagram" className="hover:text-primary transition-colors">
                    <Instagram className="h-5 w-5" />
                </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-headline font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/why-us" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link href="/testimonials" className="hover:text-primary transition-colors">Testimonials</Link></li>
              <li><Link href="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-4">
            <h4 className="font-headline font-semibold text-white">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services/custom-software-development" className="hover:text-primary transition-colors">Custom Software Development</Link></li>
              <li><Link href="/services/mobile-app-development" className="hover:text-primary transition-colors">Mobile App Development</Link></li>
              <li><Link href="/services/cloud-solutions" className="hover:text-primary transition-colors">Cloud Solutions</Link></li>
              <li><Link href="/services/ui-ux-design" className="hover:text-primary transition-colors">UI/UX Design</Link></li>
              <li><Link href="/services/it-consulting" className="hover:text-primary transition-colors">IT Consulting</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="space-y-4">
            <h4 className="font-headline font-semibold text-white">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-1 text-primary shrink-0" />
                <span>No. 42, Main Street, Pelmadulla, Rathnapura, Sri Lanka</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a href="tel:+94771234567" className="hover:text-primary transition-colors">+94 77 123 4567</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href="mailto:info@payshia.com" className="hover:text-primary transition-colors">info@payshia.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm">
            <p className="mb-4 sm:mb-0 text-center sm:text-left">© {new Date().getFullYear()} Payshia Software Solutions. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
                <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
                <Link href="#" className="hover:text-primary transition-colors">Cookie Policy</Link>
            </div>
        </div>
      </div>
    </footer>
  );
}
