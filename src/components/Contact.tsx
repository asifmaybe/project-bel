import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["House 20 , Road 10", "Sector 3 Uttara, Dhaka 1230"],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["01730 000 222", "01948 444 555"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["hello@bdbel.com"],
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Sat - Thu: 9AM - 6PM", "Friday: Closed"],
    },
  ];

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-medium mb-3">Get In Touch</p>
          <h2 className="font-sofia text-4xl md:text-4xl lg:text-5xl font-semibold text-primary mb-4">
            Contact Us
          </h2>
          <p className="text-muted-foreground text-lg">
            Ready to find your dream home? We'd love to hear from you. 
            Reach out and let's start your journey together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 shadow-soft">
            <h3 className="font-sofia text-3xl font-semibold text-foreground mb-6">
              Send us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full h-12 px-4 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all duration-200"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full h-12 px-4 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all duration-200"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full h-12 px-4 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all duration-200"
                  placeholder="(+880) 1725 567 890"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all duration-200 resize-none"
                  placeholder="Tell us about your queries..."
                  required
                />
              </div>
              <Button variant="accent" size="xl" className="w-full" type="submit">
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid grid-cols-2 gap-4">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="bg-secondary/50 rounded-xl p-5 card-hover"
                >
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-3">
                    <item.icon className="h-5 w-5 text-accent" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                  {item.details.map((detail, i) => (
                    <p key={i} className="text-muted-foreground text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden bg-secondary">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6813.742327214524!2d90.39066114632854!3d23.86360272943266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c58d6e5f95e7%3A0x20621b94ae6fe162!2sbetter%20engineering%20ltd.%20(bel)!5e1!3m2!1sen!2sid!4v1769427123603!5m2!1sen!2sid"
                className="w-full h-full border-0 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
