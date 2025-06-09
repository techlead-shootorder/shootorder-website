import React from 'react';

const BannerSection = ({ children }) => {
  return (
    <section
      className="pt-24 pb-24 md:pt-48 md:pb-24 px-4 md:px-16 bg-inherit md:bg-cover bg-center bg-no-repeat rounded-3xl"
      style={{
        backgroundImage: "url('/images/background/home-bg2.png')", // <-- your banner image path
      }}
    >
      <div className="w-full max-w-screen-2xl mx-auto text-end  rounded-3xl p-6 md:p-12">
        {children}
      </div>
    </section>
  );
};

export default BannerSection;
