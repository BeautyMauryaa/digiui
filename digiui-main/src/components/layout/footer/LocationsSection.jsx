import React from "react";
import LocationCard from "./LocationCard";
import { LOCATIONS } from "./locationsData";
import worldMapImg from "../../../assets/footermap.png";

const LocationsSection = () => {
  return (
    <div className="pt-16 border-t border-[#1A2A45]/30 relative">
  
  {/* Background Image */}
  <img
    src={worldMapImg}
    className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
    alt="world map"
  />

  {/* Content */}
  <h3 className="text-white text-xl font-semibold mb-2">
    Locations
  </h3>

  <p className="text-gray-400 text-sm mb-10">
    Our Global Technology Centres
  </p>

  <div className="relative">
    <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {LOCATIONS.map((loc, index) => (
        <LocationCard key={index} {...loc} />
      ))}
    </div>
  </div>
</div>
  );
};

export default LocationsSection;