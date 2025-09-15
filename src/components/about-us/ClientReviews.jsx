import React from 'react';
import Image from 'next/image';

const ClientReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Kiran Gadela",
      title: "CEO, Oasis Fertility",
      heading: "They reduced CPL and increased ROI.",
      review: "Cost per lead was reduced and the return on investment was increased because of ShootOrder. Their team was cost-effective and performed well, although they could finish the jobs more within deadlines.",
      rating: 5,
      image: "/images/clients/kiran-gadela.jpg" // Replace with actual image path
    },
    {
      id: 2,
      name: "Janek Jaago",
      title: "CCO, ALPA Kids",
      heading: "They have the best price-quality ratio.",
      review: "Despite the limited budget, ShootOrder has helped the client record 400,000 app downloads in India. They've also delivered several good video ads that the client can use for both their Indian and Estonian apps. Moreover, they facilitate a smooth workflow and hold bi-weekly standup meetings.",
      rating: 5,
      image: "/images/clients/janek-jaago.png" // Replace with actual image path
    },
    {
      id: 3,
      name: "Arnab Ghosh",
      title: "Head of Marketing & Co-Founder, Nakshikathaa",
      heading: "ShootOrder is very understanding, and they’re in sync with our brand. They know exactly what we require.",
      review: "ShootOrder has been able to provide great results to the client, including an increase in sales and engagement and a decrease in the dropout rate. The team is very communicative, understanding, and flexible, and they excel at meeting deadlines due to their structured approach.",
      rating: 5,
      image: "/images/clients/arnab-ghosh.jpg" // Replace with actual image path
    },
    {
      id: 4,
      name: "Suraj Mainat",
      title: "CEO, Travtips - Dubai",
      heading: "For anyone who wants to grow their business digitally, Shoot Order is a reliable company and cost-effective.",
      review: "The partner's lead generation and business have both grown. What's more, their lead conversion rate has increased as well. ShootOrder delivers effective results and successfully reaches the correct target audience. They produce thorough reports and also provide strategic planning efforts.",
      rating: 5,
      image: "/images/clients/suraj-mainat.jpg" // Replace with actual image path
    },
    {
      id: 5,
      name: "Vinupama",
      title: "Marketing Manager, BMW Kun Exclusive",
      heading: "ShootOrder has performed very well.",
      review: "ShootOrder exceeded expectations, providing innovative strategies and tips for marketing and lead generation. Their quick responsiveness complemented their communication style. They're knowledgable about the digital space.",
      rating: 5,
      image: "/images/clients/vinupama.webp" // Replace with actual image path
    },
    {
      id: 6,
      name: "Nishanth Jain",
      title: "Brand Manager, IPI India Pvt. Ltd.",
      heading: "They’re pretty serious about their job, and they optimize the cash we give them.",
      review: "Social media engagement and online-based revenue have increased significantly since ShootOrder came onboard. They provide detail-oriented project management through extensive documentation and use of Google Drive technologies. Customers can expect a cost-conscious partner.",
      rating: 5,
      image: "/images/clients/nishanth-jain.webp" // Replace with actual image path
    },
    // {
    //   id: 7,
    //   name: "Marketing Manager",
    //   title: "Marketing Manager of an auto dealer",
    //   review: "ShootOrder has performed very well. They're able to deliver content and make quick updates. Their team gives us innovative ideas on lead generation and customer engagement.",
    //   rating: 5,
    //   image: "/api/placeholder/200/200" // Replace with actual image path
    // },
    // {
    //   id: 8,
    //   name: "Managing Director",
    //   title: "Managing director of an auto dealership",
    //   review: "They're quite professional in their approach. There's some hand-holding in the beginning, but that goes away with time.",
    //   rating: 5,
    //   image: "/api/placeholder/200/200" // Replace with actual image path
    // },
    // {
    //   id: 9,
    //   name: "Chandra Sekhar Pattapurathi",
    //   title: "Managing Director & CEO, Orchasp Limited",
    //   review: "The visuals and videos they've created are impressive. ShootOrder has done a good job on the visuals and creative work.",
    //   rating: 5,
    //   image: "/api/placeholder/200/200" // Replace with actual image path
    // }
  ];

  const StarRating = ({ rating }) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="!max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="text-[#9a0c28]">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our valued clients have to say about their experience with ShootOrder.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="space-y-16">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Section */}
              <div className="flex-shrink-0">
                <div className="relative w-48 h-48 lg:w-56 lg:h-56">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#9a0c28] to-[#c41e3a] rounded-full p-1">
                    <div className="w-full h-full bg-white rounded-full p-2">
                      <Image
                        src={review.image}
                        alt={review.name}
                        width={200}
                        height={200}
                        className="w-full h-full object-cover rounded-full shadow-lg"
                      />
                    </div>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#9a0c28] rounded-full opacity-20"></div>
                  <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-[#9a0c28] rounded-full opacity-30"></div>
                </div>
              </div>

              {/* Content Section */}
              <div className="flex-1 text-center lg:text-left">
                <div className="bg-white rounded-2xl p-8 shadow-lg relative">
                  {/* Quote Icon */}
                  <div className="absolute -top-4 left-8">
                    <div className="w-8 h-8 bg-[#9a0c28] rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                      </svg>
                    </div>
                  </div>

                  <h2 className='text-black text-lg font-semibold'>{review.heading}</h2>

                  {/* Review Text */}
                  <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                    "{review.review}"
                  </blockquote>

                  {/* Rating */}
                  <div className="mb-4">
                    <StarRating rating={review.rating} />
                  </div>

                  {/* Client Info */}
                  <div className="border-t pt-4">
                    <h4 className="font-bold text-gray-900 text-lg">{review.name}</h4>
                    <p className="text-[#9a0c28] font-medium">{review.title}</p>
                  </div>

                  {/* Decorative bottom border */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-[#9a0c28] to-[#c41e3a] rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#9a0c28] to-[#c41e3a] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Join Our Success Stories?</h3>
            <p className="text-lg mb-6 opacity-90">Let's create your digital success story together</p>
            <a href='/contact-us' className="bg-white cursor-pointer text-[#9a0c28] px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl">
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientReviews;