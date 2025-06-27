import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from "lucide-react";

const posts = [
  {
    title: "The Rise of AI in Software Development",
    excerpt: "Exploring how artificial intelligence is transforming the way we build software.",
    image: "https://placehold.co/600x400.png",
    href: "#",
    hint: "artificial intelligence"
  },
  {
    title: "A Guide to Microservices Architecture",
    excerpt: "Breaking down monoliths and embracing a more scalable and resilient architecture.",
    image: "https://placehold.co/600x400.png",
    href: "#",
    hint: "server architecture"
  },
  {
    title: "Why You Should Choose Next.js for Your Next Project",
    excerpt: "A deep dive into the features and benefits of the most popular React framework.",
    image: "https://placehold.co/600x400.png",
    href: "#",
    hint: "web development"
  }
];

export function BlogSection() {
  return (
    <section id="blog" className="w-full py-20 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm text-foreground">Insights</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">From Our Blog</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Stay updated with the latest industry trends, insights, and company news.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-3 pt-12">
          {posts.map((post) => (
            <Card key={post.title} className="overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="p-0">
                    <Image
                        src={post.image}
                        alt={post.title}
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover"
                        data-ai-hint={post.hint}
                    />
                </CardHeader>
                <CardContent className="p-6 flex flex-col flex-1">
                    <h3 className="font-headline text-xl font-semibold mb-2">{post.title}</h3>
                    <p className="text-muted-foreground mb-4 flex-1">{post.excerpt}</p>
                    <Button variant="link" asChild className="p-0 h-auto justify-start">
                        <Link href={post.href}>
                            Read More <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
