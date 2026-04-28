import React from "react";

const LocationCard = ({ flag, country, phone, address }) => {
  return (
    <div className="flex flex-col gap-1.5">
      <img src={flag} className="w-8 h-8 rounded-full object-cover mb-1" />
      <h4 className="text-white text-[15px] font-semibold">{country}</h4>
      {phone && (
        <p className="text-[13px] text-gray-300 font-medium">{phone}</p>
      )}
      <p className="text-[13px] text-gray-400 leading-relaxed">{address}</p>
    </div>
  );
};

export default LocationCard;