import { Home, DollarSign, Brush, Hammer, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Real Estate",
    description: "Discover thoughtfully designed homes in prime locations. We guide you through every step to ensure a smooth, confident buying experience.",
  },
  {
    icon: DollarSign,
    title: "Home Loan",
    description: "Access flexible financing solutions tailored to your needs. Our experts help you secure the right loan with ease and transparency.",
  },
  {
    icon: Brush,
    title: "Interior Design",
    description: "Transform your space with modern, functional interiors. We design environments that reflect your style and enhance everyday living.",
  },
  {
    icon: Hammer,
    title: "Construction",
    description: "From planning to completion, we deliver quality construction with precision. Our focus is durability, safety, and long-term value.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-primary text-primary-foreground">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-medium mb-3">What We Offer</p>
          <h2 className="font-sofia text-4xl md:text-4xl lg:text-5xl font-semibold mb-4">
            Our Premium Services
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            Comprehensive real estate services crafted to elevate your lifestyle and deliver lasting value 
               at every step.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all duration-300 cursor-pointer"
            >
              <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="h-7 w-7 text-accent-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-primary-foreground/70 mb-4 leading-relaxed">
                {service.description}
              </p>
              <a
                href="#"
                className="inline-flex items-center text-accent font-medium group-hover:gap-2 transition-all duration-300"
              >
                Learn More
                <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
