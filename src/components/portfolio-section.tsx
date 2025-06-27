import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "CEO, TechCorp",
    quote: "Payshia delivered exceptional results. Their expertise and dedication transformed our business processes completely.",
    avatar: "https://placehold.co/100x100.png",
    hint: "woman face"
  },
  {
    name: "Michael Chen",
    title: "CTO, InnovateLabs",
    quote: "Outstanding quality and timely delivery. The team at Payshia exceeded all our expectations.",
    avatar: "https://placehold.co/100x100.png",
    hint: "man face"
  },
  {
    name: "Emma Rodriguez",
    title: "Director, GlobalTech",
    quote: "Professional, reliable, and innovative. Payshia is our go-to partner for all software development needs.",
    avatar: "https://placehold.co/100x100.png",
    hint: "woman face"
  },
];


export function PortfolioSection() {
  return (
    <section id="testimonials" className="w-full py-20 md:py-24 lg:py-32 bg-transparent text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">What Our Clients Say</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Trusted by businesses worldwide
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-7xl items-stretch gap-8 sm:grid-cols-1 md:gap-12 lg:grid-cols-3 pt-12">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="bg-transparent border border-primary/30 p-6 flex flex-col space-y-4 rounded-xl">
              <div className="flex items-center gap-4">
                <Avatar className="w-12 h-12 border-2 border-primary/50">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.hint} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold font-headline">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
              <CardContent className="p-0 flex-1">
                <blockquote className="text-lg text-white/80 leading-relaxed h-full">
                  “{testimonial.quote}”
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
