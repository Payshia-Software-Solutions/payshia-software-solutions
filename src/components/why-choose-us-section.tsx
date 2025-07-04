import { Users, Heart, Rocket, Shield } from "lucide-react";

const features = [
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "Expert Team",
    description: "Skilled professionals with years of experience in cutting-edge technologies",
  },
  {
    icon: <Heart className="w-8 h-8 text-primary" />,
    title: "Client-Centric Approach",
    description: "Your success is our priority. We work closely with you every step of the way",
  },
  {
    icon: <Rocket className="w-8 h-8 text-primary" />,
    title: "Cutting-Edge Technology",
    description: "We leverage the latest technologies to deliver innovative solutions",
  },
  {
    icon: <Shield className="w-8 h-8 text-primary" />,
    title: "Quality & Reliability",
    description: "Rigorous testing and quality assurance ensure reliable, high-performance solutions",
  },
];

export function WhyChooseUsSection() {
  return (
    <section id="why-us" className="w-full py-20 md:py-24 lg:py-32 bg-transparent text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">Why Choose Payshia Software Solutions?</h2>
            <p className="max-w-[900px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our commitment to excellence sets us apart
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-none items-start gap-12 sm:grid-cols-2 lg:grid-cols-4 pt-16">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col items-center text-center gap-4">
              <div className="bg-primary/10 rounded-full p-4 flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold font-headline">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
