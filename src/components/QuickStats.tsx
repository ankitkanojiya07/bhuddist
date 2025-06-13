import React from "react";

const IndiaTourPackages = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-10">
        <div className="text-left">
          <h2 className="text-2xl font-bold mb-6">
            <span className="text-red-600 relative">
              India Tour
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black"></div>
            </span>
            <span className="text-gray-600">
              {" "}
              Packages - Start Planning Your India Tailor Made Holidays
            </span>
          </h2>
          <p className="text-gray-700 text-base leading-relaxed max-w-5xl mt-6">
            We have designed private luxury tours of India & travel packages of
            experiences around the most authentic locations. These tailor-made
            holidays are a perfect match for your travel style. Explore India
            tour packages by regions, themes, special interest, duration,
            destinations and for first timers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IndiaTourPackages;
