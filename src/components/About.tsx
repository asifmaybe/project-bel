import { Award, Users, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { icon: Award, value: "6+", label: "Years of Excellence" },
  { icon: Users, value: "500+", label: "Happy Clients" },
  { icon: Target, value: "100+", label: "Properties Sold" },
  { icon: TrendingUp, value: "৳10M+", label: "Total Sales Volume" },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <p className="text-accent font-medium mb-3">About Us</p>
            <h2 className="font-sofia text-4xl md:text-4xl lg:text-5xl font-semibold text-primary mb-6">
              Your Trusted Partner in
              <span className="text-accent"> Real Estate</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                 Better Engineering Ltd (bel) is a fast-growing, forward-thinking real estate company in Bangladesh, founded in 2019.
                 We create more than buildings.we craft homes that reflect your lifestyle, dreams, and aspirations.
                 With innovative design, uncompromising quality, and dedicated customer service, our experienced team delivers sustainable,
                 thoughtfully designed living spaces tailored to your needs. At bel, attention to detail and customer satisfaction define everything
                 we do because building lasting homes is how we build better lives.

            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We believe that finding your dream home is more than a transaction—it's 
              a journey. Our dedicated team of experts guides you every step of the 
              way, ensuring a seamless and rewarding experience.
            </p>
            <Button variant="accent" size="lg">
              Learn More About Us
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-secondary/50 rounded-2xl p-6 md:p-8 text-center card-hover"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-7 w-7 text-accent" />
                </div>
                <p className="font-display text-3xl md:text-4xl font-semibold text-primary mb-2">
                  {stat.value}
                </p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
