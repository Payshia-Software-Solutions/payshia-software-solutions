import { Button } from "@/components/ui/button";
import { Code, Smartphone, Cloud, Settings, ArrowRight, PenTool } from "lucide-react";
import Link from 'next/link';

const services = [
  {
    icon: <Code className="w-8 h-8 text-primary" />,
    title: "Custom Software Development",
    description: "Tailored software solutions designed to meet your unique business requirements and objectives.",
    href: "/services/custom-software-development",
  },
  {
    icon: <Smartphone className="w-8 h-8 text-primary" />,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    href: "/services/mobile-app-development",
  },
  {
    icon: <Cloud className="w-8 h-8 text-primary" />,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services to optimize your business operations.",
    href: "/services/cloud-solutions",
  },
    {
    icon: <PenTool className="w-8 h-8 text-primary" />,
    title: "UI/UX Design",
    description: "Creating intuitive and beautiful user interfaces for maximum user engagement and satisfaction.",
    href: "/services/ui-ux-design",
  },
  {
    icon: <Settings className="w-8 h-8 text-primary" />,
    title: "IT Consulting",
    description: "Strategic technology guidance to help you make informed decisions for digital transformation.",
    href: "/services/it-consulting",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="w-full py-20 md:py-24 lg:py-32 bg-transparent text-white">
      <div className="container relative px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">Our Core Services</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Comprehensive solutions tailored to your business needs
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-7xl items-stretch gap-8 sm:grid-cols-2 lg:grid-cols-3 pt-16">
          {services.map((service) => (
            <div key={service.title} className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-xl flex flex-col p-6 space-y-6 hover:border-primary/50 transition-colors duration-300 transform hover:-translate-y-2">
              <div className="bg-background text-primary w-16 h-16 rounded-lg flex items-center justify-center shadow-lg">
                {service.icon}
              </div>
              <div className="flex-1 space-y-4">
                <h3 className="text-2xl font-bold font-headline">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
              <Button variant="link" asChild className="text-primary p-0 h-auto justify-start font-bold group">
                <Link href={service.href}>
                  Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
