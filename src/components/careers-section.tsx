import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, TrendingUp, Heart, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

const benefits = [
  {
    icon: <Clock className="w-8 h-8 text-primary" />,
    title: "Flexible Work Environment",
    description: "Achieve a healthy work-life balance with our flexible remote and in-office options.",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-primary" />,
    title: "Professional Growth",
    description: "We invest in your future with continuous learning opportunities, mentorship, and career advancement.",
  },
  {
    icon: <Heart className="w-8 h-8 text-primary" />,
    title: "Health & Wellness",
    description: "Comprehensive health benefits and wellness programs to keep you and your family healthy.",
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "Collaborative Culture",
    description: "Join a supportive and inclusive team where every voice is heard and great ideas can come from anywhere.",
  },
];

const openPositions = [
    {
      title: "Senior Frontend Developer",
      location: "Gurugram, India (Remote options available)",
      department: "Engineering"
    },
    {
        title: "UI/UX Designer",
        location: "Gurugram, India (Remote options available)",
        department: "Design"
    },
    {
        title: "Cloud Solutions Architect",
        location: "Gurugram, India (Remote options available)",
        department: "Cloud Services"
    }
]

export function CareersSection() {
  return (
    <section id="careers" className="w-full py-20 md:py-24 lg:py-32 bg-transparent text-white">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
          <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl">
            Join Our Innovative Team
          </h2>
          <p className="text-lg text-white/80 md:text-xl">
            At Payshia Software Solutions, we're building more than just software; we're building careers. Our culture is founded on respect, continuous learning, and a passion for solving complex challenges. We're looking for talented individuals who are eager to make an impact and grow with us.
          </p>
        </div>

        <div className="mx-auto grid max-w-none items-start gap-12 sm:grid-cols-2 lg:grid-cols-4 pt-16 border-t border-primary/20">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="flex flex-col items-center text-center gap-4">
              <div className="bg-primary/10 rounded-full p-4 flex items-center justify-center">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold font-headline">{benefit.title}</h3>
              <p className="text-white/70">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-24">
            <h3 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-primary text-center mb-12">Current Openings</h3>
            <div className="grid gap-8 max-w-4xl mx-auto">
                {openPositions.map((position) => (
                    <Card key={position.title} className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-xl hover:border-primary/50 transition-colors duration-300">
                        <CardContent className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                            <div className="flex-1">
                                <h4 className="text-xl font-bold font-headline">{position.title}</h4>
                                <p className="text-muted-foreground mt-1">{position.location} &bull; {position.department}</p>
                            </div>
                            <Button asChild className="group">
                                <Link href="/contact">Apply Now <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
             <div className="text-center mt-12">
                <p className="text-white/80">Don't see a role that fits? We're always looking for talented people. <Link href="/contact" className="text-primary font-semibold hover:underline">Get in touch!</Link></p>
            </div>
        </div>

      </div>
    </section>
  );
}
