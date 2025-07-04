'use client';

import { useState } from 'react';
import { Menu, X, ChevronDown, Home, Briefcase, LayoutGrid, Heart, Quote, Users, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Link from 'next/link';

const serviceSubItems = [
    { name: 'Custom Software Development', href: '/services/custom-software-development' },
    { name: 'Mobile App Development', href: '/services/mobile-app-development' },
    { name: 'Cloud Solutions', href: '/services/cloud-solutions' },
    { name: 'UI/UX Design', href: '/services/ui-ux-design' },
    { name: 'IT Consulting', href: '/services/it-consulting' },
];

const navItems = [
  { name: 'Home', href: '/', icon: <Home className="h-5 w-5" /> },
  { name: 'Services', href: '/services', subItems: serviceSubItems, icon: <Briefcase className="h-5 w-5" /> },
  { name: 'Portfolio', href: '/portfolio', icon: <LayoutGrid className="h-5 w-5" /> },
  { name: 'Why Us', href: '/why-us', icon: <Heart className="h-5 w-5" /> },
  { name: 'Testimonials', href: '/testimonials', icon: <Quote className="h-5 w-5" /> },
  { name: 'Careers', href: '/careers', icon: <Users className="h-5 w-5" /> },
  { name: 'Contact', href: '/contact', icon: <Mail className="h-5 w-5" /> },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 z-50 w-full bg-transparent text-white">
      <div className="container flex h-24 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="text-2xl font-bold font-headline inline-block text-primary">Payshia <span className="text-white hidden md:inline">Software Solutions</span></span>
        </Link>
        <nav className="hidden md:flex flex-1 items-center justify-center space-x-8 text-sm font-medium">
          {navItems.map((item) => (
            item.subItems ? (
              <DropdownMenu key={item.name}>
                <DropdownMenuTrigger className="flex items-center gap-1 transition-colors hover:text-primary text-white/80 focus:outline-none">
                  {item.name}
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-background border-primary/20 text-white">
                  {item.subItems.map((subItem) => (
                    <DropdownMenuItem key={subItem.name} asChild>
                      <Link href={subItem.href} className="hover:!bg-primary/20 !text-white hover:!text-primary">
                        {subItem.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link key={item.name} href={item.href} className="transition-colors hover:text-primary text-white/80">
                {item.name}
              </Link>
            )
          ))}
        </nav>
        <div className="flex items-center justify-end space-x-2 ml-auto">
          <Button asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-background text-foreground p-0">
              <div className="flex flex-col h-full">
                <div className="flex items-center p-6 border-b border-primary/20">
                    <Link href="/" className="flex items-center space-x-2" onClick={() => setIsMobileMenuOpen(false)}>
                        <span className="font-bold text-lg font-headline inline-block text-primary">Payshia</span>
                    </Link>
                </div>
                <nav className="flex-1 px-4 py-6 space-y-1">
                    {navItems.map((item) => (
                      item.subItems ? (
                        <Collapsible key={item.name} className="space-y-1">
                          <CollapsibleTrigger className="flex justify-between items-center w-full text-base font-medium rounded-md px-3 py-2 hover:bg-accent hover:text-accent-foreground transition-colors [&[data-state=open]>svg]:rotate-180">
                            <div className="flex items-center gap-3">
                                {item.icon}
                                <span>{item.name}</span>
                            </div>
                            <ChevronDown className="h-5 w-5 transition-transform" />
                          </CollapsibleTrigger>
                          <CollapsibleContent className="pl-11 mt-1 space-y-1">
                            {item.subItems.map((subItem) => (
                              <Link key={subItem.name} href={subItem.href} className="block rounded-md px-3 py-2 text-sm font-medium text-white/80 hover:bg-accent hover:text-accent-foreground transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                                {subItem.name}
                              </Link>
                            ))}
                          </CollapsibleContent>
                        </Collapsible>
                      ) : (
                        <Link key={item.name} href={item.href} className="flex items-center gap-3 rounded-md px-3 py-2 text-base font-medium hover:bg-accent hover:text-accent-foreground transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                            {item.icon}
                            <span>{item.name}</span>
                        </Link>
                      )
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
