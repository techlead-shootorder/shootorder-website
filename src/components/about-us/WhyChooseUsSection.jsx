// WhyChooseSection.jsx
import React from "react";
import {
  Clock,
  Image,
  Star,
  Phone,
  Shield,
  Headphones,
  FileSignature,
  HeartHandshake,
  BadgeCheck,
  Users,
  Wrench,
  Zap,
} from "lucide-react";

const FeatureBox = ({ icon, title, description }) => {
  return (
    <div className="flex items-start gap-3 p-4 border rounded-lg">
      <div className="bg-blue-50 px-4  rounded-full">{icon}</div>
      <div>
        <h2 className="font-semibold text-sm mb-1">{title}</h2>
        <p className="text-sm text-gray-600 mt-3">{description}</p>
      </div>
    </div>
  );
};

const WhyChooseSection = () => {
  const features = [
    {
      icon: <BadgeCheck  className="h-14 w-14 text-orange-700" />,
      title: "Experienced Managers",
      description:
        "Every manager in ShootOrder's team is a google certified manager, our experience will not let you down!",
    },
    {
      icon: <Users className="h-14 w-14 text-orange-700" />,
      title: "Dedicated Team",
      description:
        "Our dedicated team has only one target, to get you business at the least possible cost and keep you always smiling.",
    },
    {
      icon: <Star className="h-14 w-14 text-orange-700" />,
      title: "We are creative!",
      description:
        "You don't have to outsource creative work to a third party vendor, we are a full service advertising agency and we are confident enough to provide you utmost creativity.",
    },
    {
      icon: <Wrench  ne className="h-14 w-14 text-orange-700" />,
      title: "We will fix your website!",
      description:
        "Urgh!!! Keeping your website bug free and with latest optimizations is a nightmare. With our Digital Marketing services, you dont have to go anywhere else. Until your website is optimized, our digital marketing services won't yield the expected results.",
    },
    {
      icon: <Zap  className="h-14 w-14 text-orange-700" />,
      title: "Quick Results",
      description:
        "You don't have to wait month and months to get in positive ROI's, we do it quick!",
    },
    {
      icon: <Headphones className="h-14 w-14 text-orange-700" />,
      title: "Always available for you!",
      description:
        "Our client servicing team is always available at your service with industries best turnaround time.",
    },
    {
      icon: <FileSignature className="h-14 w-14 text-orange-700" />,
      title: "No long term contracts!",
      description:
        "We are always ready to sign NDA in case our clients want to set the bar of confidentiality higher. Also, no worries of long term contracts.",
    },
    {
      icon: <HeartHandshake className="h-14 w-14 text-orange-700" />,
      title: "Complete Satisfaction",
      description:
        "We value time & money of client for long term relationships. Client satisfaction is one of the most important aspect of our work.",
    },
  ];

  return (
    <div className="w-full bg-[#fffbe7] py-16 px-4 md:px-8">
      <div className="!max-w-5xl mx-auto">
        <h2 className="text-center font-bold text-2xl mb-8">
          Why Choose Shootorder
        </h2>
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
