import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from 'next/image';

const projects = [
  {
    title: "Project Alpha",
    description: "A comprehensive enterprise resource planning (ERP) system for the manufacturing sector.",
    image: "https://placehold.co/600x400.png",
    tags: ["React", "Node.js", "PostgreSQL"],
    hint: "technology code"
  },
  {
    title: "E-commerce Platform",
    description: "A scalable e-commerce solution with a custom CMS and payment gateway integration.",
    image: "https://placehold.co/600x400.png",
    tags: ["Next.js", "GraphQL", "Stripe"],
    hint: "online store"
  },
  {
    title: "HealthTech Mobile App",
    description: "A cross-platform mobile app for remote patient monitoring and telehealth consultations.",
    image: "https://placehold.co/600x400.png",
    tags: ["React Native", "Firebase", "WebRTC"],
    hint: "health application"
  }
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="w-full py-20 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Our Work</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Featured Projects</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Check out some of the innovative solutions we've delivered for our clients.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-3 pt-12">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="p-0">
                    <Image
                        src={project.image}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover"
                        data-ai-hint={project.hint}
                    />
                </CardHeader>
                <CardContent className="p-6">
                    <CardTitle className="font-headline mb-2">{project.title}</CardTitle>
                    <CardDescription className="mb-4">{project.description}</CardDescription>
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => <Badge key={tag} variant="outline">{tag}</Badge>)}
                    </div>
                </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
