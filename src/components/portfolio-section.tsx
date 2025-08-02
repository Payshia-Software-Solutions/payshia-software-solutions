
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Ceylon Pharma College",
    description: "A comprehensive solution including an LMS, Website, and ERP system to streamline operations for a leading pharmaceutical college.",
    image: "https://placehold.co/600x400.png",
    hint: "education management system",
    link: "#"
  },
  {
    title: "GoTickets.lk",
    description: "An intuitive and scalable online ticketing platform for events, making ticket purchasing seamless for users.",
    image: "https://placehold.co/600x400.png",
    hint: "online ticketing platform",
    link: "#"
  },
  {
    title: "Tea Jar E-commerce",
    description: "A beautiful e-commerce platform for www.teajarceylon.com, showcasing and selling premium Ceylon tea products online.",
    image: "https://placehold.co/600x400.png",
    hint: "ecommerce website tea",
    link: "https://www.teajarceylon.com"
  },
   {
    title: "KDU Group Corporate Website",
    description: "A professional and modern corporate website for the KDU Group, enhancing their online presence.",
    image: "https://placehold.co/600x400.png",
    hint: "corporate website design",
    link: "#"
  },
  {
    title: "KDU Export Website",
    description: "A dedicated website for KDU's export division, designed to attract international clients and showcase products.",
    image: "https://placehold.co/600x400.png",
    hint: "export business website",
    link: "#"
  },
  {
    title: "Grammar Seed English Learning Platform",
    description: "An engaging website for an English learning platform, making education accessible and interactive.",
    image: "https://placehold.co/600x400.png",
    hint: "e-learning platform",
    link: "#"
  },
  {
    title: "Payshia ERP",
    description: "A powerful and scalable in-house ERP solution to streamline business processes and improve efficiency.",
    image: "https://placehold.co/600x400.png",
    hint: "erp system dashboard",
    link: "#"
  },
    {
    title: "බත්ඒක.lk",
    description: "A unique local platform, demonstrating our versatility and commitment to local market solutions.",
    image: "https://placehold.co/600x400.png",
    hint: "local business website",
    link: "#"
  }
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="w-full py-20 md:py-24 lg:py-32 bg-transparent text-white">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">Our Portfolio</h2>
          <p className="max-w-[900px] text-white/80 md:text-xl">
            A glimpse into our successful client projects and innovative in-house products.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-xl flex flex-col overflow-hidden group hover:border-primary/50 transition-all duration-300">
              <CardHeader className="p-0">
                <div className="relative h-56 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    data-ai-hint={project.hint}
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6 flex-1 flex flex-col">
                <CardTitle className="font-headline text-xl mb-2">{project.title}</CardTitle>
                <p className="text-muted-foreground flex-1">{project.description}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button variant="link" asChild className="p-0 text-primary group/link">
                  <Link href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
