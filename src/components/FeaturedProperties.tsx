import { FEATURED_PROPERTIES } from "@/constants";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const FeaturedProperties = () => {
  return (
    <section className="container mx-auto border-b py-6 pb-10 overflow-hidden">
      <h2 className="text-center text-3xl md:text-4xl lg:text-5xl tracking-tighter">
        Featured Properties
      </h2>
      <div className="flex flex-wrap">
        {FEATURED_PROPERTIES.map((property, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2">
            <Link href="#" className="m-2 block">
              <div className="p-8">
                <Image
                  className="mb-8 rounded-md object-cover w-full h-auto"
                  src={property.image}
                  width={300}
                  height={300}
                  alt="property images"
                />
                <div className="text-center">
                  <h6 className="mb-5 mt-2 font-medium">{property.name}</h6>
                  <span className="mb-2 mt-2 block">{property.price}</span>
                  <div className="flex items-center justify-center">
                    <Star fill="gold" strokeWidth={0} className="mr-2" />
                    <span className="text-sm">
                      {property.rating} ({property.reviews} reviews)
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProperties;
