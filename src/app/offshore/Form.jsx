import React from 'react'
import ImageSection from "@/components/Home/PipeDrive/ImageSection";
import PipeDriveForm from "@/components/Home/PipeDrive/PipeDriveForm";


const Form = () => {
  return (
    <section className="py-20" style={{ background: "#9A0C28" }}>
          <div className="animate-section !max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="talent-form-section">
            <div className="parallax-bg absolute inset-0 -z-10 w-full">
              <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 bg-gradient-to-tr from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
            </div>

            {/* Main Content Container */}
            <>
              <h2 className="text-4xl font-bold text-center mb-8 text-white">Contact us</h2>
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12" >

                {/* Image Section - Left on desktop, Top on mobile */}
                <div className="w-full lg:w-1/2 h-full order-1 lg:order-1">
                  <ImageSection />
                </div>

                {/* Form Section - Right on desktop, Bottom on mobile */}
                <div className="w-full lg:w-1/2 order-2 lg:order-2">
                  <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">

                    {/* Pipedrive Form */}
                    <PipeDriveForm />
                  </div>
                </div>

              </div>
            </>
          </div>
        </section>
  )
}

export default Form
