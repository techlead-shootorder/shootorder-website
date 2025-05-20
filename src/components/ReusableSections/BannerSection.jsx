import React from 'react';

const BannerSection = ({ children }) => {
  return (
    <section className=" py-24 px-4 md:px-16 ">
      <div className="!max-w-7xl bg-[#fff5f4] mx-auto text-center rounded-4xl">
        {children}
      </div>
    </section>
  );
};

export default BannerSection;
