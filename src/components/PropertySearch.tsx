import { useState } from "react";
import { Search, MapPin, Home, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

const PropertySearch = () => {
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [priceRange, setPriceRange] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ location, propertyType, priceRange });
  };

  return (
    <section className="relative -mt-20 z-10 container-custom">
      <div className="bg-card rounded-2xl shadow-elevated p-6 md:p-8">
        <form onSubmit={handleSearch}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
            {/* Location */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent" />
                Location
              </label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full h-12 px-4 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all duration-200 cursor-pointer"
              >
                <option value="">Select Location</option>
                <option value="uttara">Uttara</option>
                <option value="dhanmondi">Dhanmondi</option>
                <option value="mirpur">Mirpur</option>
                <option value="gulshan">Gulshan</option>
                <option value="bashundhara">Bashundhara</option>
              </select>
            </div>

            {/* Property Type */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Home className="h-4 w-4 text-accent" />
                Property Type
              </label>
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="w-full h-12 px-4 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all duration-200 cursor-pointer"
              >
                <option value="">All Types</option>
                <option value="house">House</option>
                <option value="apartment">Apartment</option>
                <option value="villa">Villa</option>
                <option value="penthouse">Penthouse</option>
                <option value="townhouse">Townhouse</option>
              </select>
            </div>

            {/* Price Range */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <DollarSign className="h-4 w-4 text-accent" />
                Price Range
              </label>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full h-12 px-4 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all duration-200 cursor-pointer"
              >
                <option value="">Any Price</option>
                <option value="৳ 0-৳ 500000">৳ 0 - ৳ 5Lakh</option>
                <option value="৳ 500000-৳ 1000000">৳ 5Lakh - ৳ 10Lakh</option>
                <option value="৳ 1000000-৳ 2000000">৳ 10Lakh - ৳ 20Lakh</option>
                <option value="৳ 2000000-৳ 500000">৳ 20Lakh+</option>
              </select>
            </div>

            {/* Search Button */}
            <div className="flex items-end">
              <Button variant="accent" size="xl" className="w-full" type="submit">
                <Search className="mr-2 h-5 w-5" />
                Search
              </Button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default PropertySearch;
