// WhyChooseSection.jsx
import React from 'react';
import { Clock, Image, Star, Phone, Shield, Users } from 'lucide-react';

const FeatureBox = ({ icon, title, description }) => {
  return (
    <div className="flex items-start gap-3 p-4 border rounded-lg">
      <div className="bg-blue-50 p-2 rounded-full">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-sm mb-1">{title}</h3>
        <p className="text-sm text-gray-600 mt-3">{description}</p>
      </div>
    </div>
  );
};

const WhyChooseSection = () => {
  const features = [
    {
      icon: <Clock className="h-5 w-5 text-orange-700" />,
      title: "Turnaround in Days",
      description: "We edit any composition within 2-3 business days because we know how crucial it is when you're close to your launch."
    },
    {
      icon: <Image className="h-5 w-5 text-orange-700" />,
      title: "15K Images To Grow With",
      description: "We are already ready to start Right now! We have covered more than 15k+ of photoshoots and shoot."
    },
    {
      icon: <Star className="h-5 w-5 text-orange-700" />,
      title: "Evaluated by Creators",
      description: "We offer the best work every time by qualified designer and get your creative direction as well as support when you collaborate with us."
    },
    {
      icon: <Phone className="h-5 w-5 text-orange-700" />,
      title: "Client Package Process",
      description: "Designers + marketing director + producer + you 24/7 combined! One who creates your assets and is available to solve your queries."
    },
    {
      icon: <Shield className="h-5 w-5 text-orange-700" />,
      title: "Trust in Our Middle Name",
      description: "Our ability and integrity is incomparable. We believe in relationships built on trust not just in our brand ing but also doing what it takes to understand the needs of our clients."
    },
    {
      icon: <Users className="h-5 w-5 text-orange-700" />,
      title: "Complete Satisfaction",
      description: "We work time & money on talent for keeping extraordinary photo compositions which will make complete point of our work."
    }
  ];

  return (
    <div className="w-full bg-[#F8F6EE] py-16 px-4 md:px-8">
      <div className="!max-w-4xl mx-auto">
        <h2 className="text-center font-bold text-2xl mb-8">Why Choose Shootorder</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureBox
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseSection;