import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "E-commerce Platform for Retail Giant",
    description: "A fully-featured e-commerce platform with a custom CMS, and integrated payment gateways, boosting sales by 40%.",
    image: "https://placehold.co/600x400.png",
    hint: "online store website",
    link: "#"
  },
  {
    title: "Mobile Banking App",
    description: "A secure and intuitive mobile banking application for iOS and Android, offering seamless transaction management.",
    image: "https://placehold.co/600x400.png",
    hint: "mobile banking app",
    link: "#"
  },
  {
    title: "AI-Powered Logistics Dashboard",
    description: "A real-time logistics and fleet management dashboard with predictive analytics to optimize delivery routes.",
    image: "https://placehold.co/600x400.png",
    hint: "logistics dashboard data",
    link: "#"
  },
   {
    title: "Healthcare Management System",
    description: "A comprehensive system for hospitals to manage patient records, appointments, and billing efficiently.",
    image: "https://placehold.co/600x400.png",
    hint: "hospital management software",
    link: "#"
  },
  {
    title: "Custom CRM for Sales Teams",
    description: "A bespoke CRM solution that automates sales workflows, tracks leads, and provides in-depth analytics.",
    image: "https://placehold.co/600x400.png",
    hint: "crm dashboard interface",
    link: "#"
  },
  {
    title: "Interactive E-Learning Portal",
    description: "An engaging e-learning platform with video lectures, quizzes, and progress tracking for students.",
    image: "https://placehold.co/600x400.png",
    hint: "online learning website",
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
                  <Link href={project.link}>
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
