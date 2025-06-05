"use client";

import ContactForm from "@/components/Home/TalentForm/TalentForm";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  CheckCircle, 
  Star,
  MessageCircle,
  Users,
  Award,
  Zap,
  ArrowRight
} from "lucide-react";

export default function EnquiryPage() {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Quick Response",
      description: "Get replies within 24 hours"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Team",
      description: "Dedicated professionals at your service"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Proven Results",
      description: "300+ successful projects delivered"
    }
  ];

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91-630-392-1512",
      link: "tel:+91-630-392-1512"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "info@shootorder.com",
      link: "mailto:info@shootorder.com"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Address",
      value: "Ivent It Solutions Pvt. Ltd. Krishe Sapphire, Hitech City Hyderabad, 500081",
      link: "#"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      label: "Business Hours",
      value: "Mon - Fri: 10AM - 7PM",
      link: "#"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Tech Startup Inc.",
      rating: 5,
      text: "Exceptional service and results. They transformed our digital presence completely!"
    },
    {
      name: "Michael Chen",
      company: "Global Retail Co.",
      rating: 5,
      text: "Professional team with incredible expertise. Highly recommend their services."
    },
    {
      name: "Emily Rodriguez",
      company: "Healthcare Solutions",
      rating: 5,
      text: "Outstanding communication and delivery. They exceeded all our expectations."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Banner with Background Image and Form */}
      <div className="relative min-h-screen flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#9a0c28]/90 to-[#6a0818]/70"></div>
        </div>

        <div className="relative z-10 w-full !max-w-7xl mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white space-y-8">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  Let&apos;s Start Your
                  <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                    Success Story
                  </span>
                </h1>
                <p className="text-xl text-red-100 mb-8 leading-relaxed max-w-lg">
                  Ready to transform your business? Get in touch with our experts and discover how we can help you achieve your goals.
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg flex items-center justify-center text-[#9a0c28]">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{feature.title}</h3>
                      <p className="text-red-100 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:ml-8">
              <ContactForm colorClass="text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="!max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Multiple Ways to Reach Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the most convenient way to get in touch. We&apos;re here to help you succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#9a0c28] to-[#b91c47] rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">{info.label}</h3>
                    <p className="text-gray-600 group-hover:text-[#9a0c28] transition-colors duration-300">
                      {info.value}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 bg-gradient-to-r from-[#9a0c28] to-[#b91c47]">
        <div className="!max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-red-100 max-w-2xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what some of our satisfied clients have to say.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-white mb-6 text-lg leading-relaxed">
                  &quot;{testimonial.text}&quot;
                </p>
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-red-200 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="!max-w-4xl mx-auto text-center px-4">
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join hundreds of satisfied clients who have transformed their businesses with our expertise. 
              Let&quot;s discuss your project and create something amazing together.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-[#9a0c28] to-[#b91c47] text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center space-x-2">
              <MessageCircle className="w-5 h-5" />
              <span>Start a Conversation</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:-translate-y-1">
              View Our Portfolio
            </button>
          </div>
          
          <div className="mt-12 flex items-center justify-center space-x-8 text-gray-400">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>No Hidden Fees</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}