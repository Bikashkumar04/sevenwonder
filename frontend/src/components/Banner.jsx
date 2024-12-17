import React from "react";

const Banner = () => {
  return (
    <div className="w-full h-70 sm:h-66 overflow-hidden rounded-md shadow-lg">
      <img 
        src="/public/banner.jpg" 
        alt="Banner" 
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Banner;
