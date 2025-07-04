'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Link from 'next/link';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Why Us', href: '#why-us' },
  { name: 'Services', href: '#services' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 z-50 w-full bg-transparent text-white">
      <div className="container flex h-24 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="text-2xl font-bold font-headline inline-block text-primary">Payshia <span className="text-white">Software Solutions</span></span>
        </Link>
        <nav className="hidden md:flex flex-1 items-center justify-center space-x-8 text-sm font-medium">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="transition-colors hover:text-primary text-white/80">
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center justify-end space-x-2 ml-auto">
          <Button asChild>
            <Link href="#contact">Get in Touch</Link>
          </Button>
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-background text-foreground">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b">
                    <Link href="/" className="flex items-center space-x-2" onClick={() => setIsMobileMenuOpen(false)}>
                        <span className="font-bold text-lg font-headline inline-block text-primary">Payshia <span className="text-foreground">Software Solutions</span></span>
                    </Link>
                    <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                        <X className="h-5 w-5" />
                        <span className="sr-only">Close Menu</span>
                    </Button>
                </div>
                <nav className="flex-1 px-4 py-6 space-y-4">
                    {navItems.map((item) => (
                        <Link key={item.name} href={item.href} className="block text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                            {item.name}
                        </Link>
                    ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
