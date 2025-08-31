import React from "react";
import { PropertyProps } from "@/interfaces/PropertyProps";

const PropertyCard: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
      <img src={property.image} alt={property.name} className="w-full h-52 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{property.name}</h3>
        <p className="text-sm text-gray-600">${property.price} / night</p>
        <p className="text-yellow-500 text-sm">⭐ {property.rating}</p>
      </div>
    </div>
  );
};

export default PropertyCard;

