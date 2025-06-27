import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Code, Server, Smartphone, Cloud, PenTool, Database } from "lucide-react";

const services = [
  {
    icon: <Code className="w-10 h-10 text-primary" />,
    title: "Custom Software Development",
    description: "Tailored software solutions to meet your unique business needs, built with cutting-edge technologies.",
  },
  {
    icon: <Smartphone className="w-10 h-10 text-primary" />,
    title: "Mobile App Development",
    description: "Engaging and high-performance iOS and Android applications that delight your users.",
  },
  {
    icon: <Cloud className="w-10 h-10 text-primary" />,
    title: "Cloud Solutions",
    description: "Scalable and secure cloud infrastructure design and management on AWS, Azure, and Google Cloud.",
  },
  {
    icon: <Server className="w-10 h-10 text-primary" />,
    title: "API Development",
    description: "Robust and secure API development to connect your services and data seamlessly.",
  },
  {
    icon: <PenTool className="w-10 h-10 text-primary" />,
    title: "UI/UX Design",
    description: "Intuitive and beautiful user interfaces designed to provide the best user experience.",
  },
  {
    icon: <Database className="w-10 h-10 text-primary" />,
    title: "Database Architecture",
    description: "Efficient and reliable database solutions for optimal data management and performance.",
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="w-full py-20 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm text-foreground">Our Services</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">What We Offer</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We provide a comprehensive range of software development services to help you achieve your business goals.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-3 pt-12">
          {services.map((service) => (
            <Card key={service.title} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="flex flex-col items-start gap-4">
                {service.icon}
                <div className="space-y-1">
                  <CardTitle className="font-headline">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
