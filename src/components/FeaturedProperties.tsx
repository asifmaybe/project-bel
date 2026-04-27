import { MapPin, Bed, Bath, Square, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import property1 from "@/assets/zahir garden.webp";
import property2 from "@/assets/sneha garden.webp";
import property3 from "@/assets/bp.webp";
import property4 from "@/assets/onuvob bel.webp";
import property5 from "@/assets/onuvob bel.webp";
import property6 from "@/assets/property-6.jpg";

const properties = [
  {
    id: 1,
    image: property1,
    title: "bel zahir garden",
    location: "Uttara, Dhaka",
    price: "৳ 1234567",
    beds: 4,
    baths: 3,
    sqft: "3,200",
    featured: true,
  },
  {
    id: 2,
    image: property2,
    title: "bel sneha garden",
    location: "Uttara, Dhaka",
    price: "৳ 1234567",
    beds: 5,
    baths: 4,
    sqft: "5,800",
    featured: false,
  },
  {
    id: 3,
    image: property3,
    title: "bel protiva",
    location: "Uttara, Dhaka",
    price: "৳ 1234567",
    beds: 2,
    baths: 2,
    sqft: "2,400",
    featured: false,
  },
  {
    id: 4,
    image: property4,
    title: "bel onuvob",
    location: "Uttara, Dhaka",
    price: "৳ 1234567",
    beds: 6,
    baths: 5,
    sqft: "6,500",
    featured: true,
  },
  {
    id: 5,
    image: property5,
    title: "bel south point",
    location: "Bashundhara R A,Dhaka",
    price: "৳ 1234567",
    beds: 5,
    baths: 4,
    sqft: "4,800",
    featured: false,
  },
  {
    id: 6,
    image: property6,
    title: "bel KMB north view",
    location: "Uttara, Dhaka",
    price: "৳ 1234567",
    beds: 4,
    baths: 3,
    sqft: "3,600",
    featured: false,
  },
];

const FeaturedProperties = () => {
  return (
    <section id="properties" className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-medium mb-3">Our Collection</p>
          <h2 className="font-sofia text-4xl md:text-4xl lg:text-5xl font-semibold text-primary mb-4">
            Featured Properties
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore properties developed by us and thoughtfully presented for modern living.
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-max">
          {properties.map((property, index) => (
            <div
              key={property.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft card-hover h-fit"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-110"
                />
                {property.featured && (
                  <span className="absolute top-4 left-4 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    Featured
                  </span>
                )}
                <button className="absolute top-4 right-4 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center text-muted-foreground hover:text-destructive hover:bg-background transition-all duration-300">
                  <Heart className="h-5 w-5" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                  <MapPin className="h-4 w-4 text-accent" />
                  {property.location}
                </div>
                <h3 className="font-sofia text-2xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {property.title}
                </h3>
                
                {/* Features */}
                <div className="flex items-center gap-4 text-muted-foreground text-sm mb-4 pb-4 border-b border-border">
                  <span className="flex items-center gap-1">
                    <Bed className="h-4 w-4" />
                    {property.beds} Beds
                  </span>
                  <span className="flex items-center gap-1">
                    <Bath className="h-4 w-4" />
                    {property.baths} Baths
                  </span>
                  <span className="flex items-center gap-1">
                    <Square className="h-4 w-4" />
                    {property.sqft} sqft
                  </span>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <p className="font-display text-2xl font-semibold text-accent">
                    {property.price}
                  </p>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="default" size="lg">
            View All Properties
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
