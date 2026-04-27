import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Major Md. Mir Murad Ali (Retd)",
    role: "Landowner",
    location: "Dhaka, Bangladesh",
    content: "I asked if they could maintain 100% quality and keep their commitment; they delivered on both.",
    rating: 5,
    avatar: "MMA",
  },
  {
    name: "H M Majbah Uddin",
    role: "Proprietor, Shamin Construction",
    location: "Dhaka, Bangladesh",
    content: "While many companies promise a 'Better Home, Better Life,' Better Engineering Ltd. actually makes it a reality.",
    rating: 5,
    avatar: "MU",
  },
  {
    name: "Dr. Hasanuzzaman",
    role: "First Customer",
    location: "Dhaka, Bangladesh",
    content: "In an industry where delays are common, they stood out by keeping their timeline and promises.",
    rating: 5,
    avatar: "DH",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-medium mb-3">Testimonials</p>
          <h2 className="font-sofia text-4xl md:text-4xl lg:text-5xl font-semibold text-primary mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Stories from homeowners who chose us and experienced quality, care,
            and confidence.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-soft card-hover relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                  <Quote className="h-5 w-5 text-accent-foreground" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4 pt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} • {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
