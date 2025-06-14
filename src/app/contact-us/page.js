import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  FaPhoneAlt,
  FaTwitter,
  FaPinterest,
  FaFacebookF,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsLinkedin, BsDribbble, BsBehance } from "react-icons/bs";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function ContactUs() {
  return (
    <div className=" py-20">
      {/* Header */}
      <div className="text-center py-6">
        <h2 className="text-3xl font-bold">Contact Us</h2>
        <p className="text-gray-500 text-sm mt-2">
          Any question or remarks? Just write us a message!
        </p>
      </div>

      {/* Map */}
      <iframe
        src="https://www.google.com/maps?q=Krishe%20Sapphire%20MSR%20Block,%201st%20Floor,%20SY%20No.%2088,%20HITEC%20City%20main%20road,%20Madhapur%20Hyderabad,%20Telangana%20500081&output=embed"
        width="100%"
        height="250"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>

      {/* Contact Info & Form */}
      <div className="!max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6 my-12 rounded-3xl border p-4 md:p-4">
          {/* Left Section - Info */}
          <div className="bg-[#9a0c28] rounded-3xl p-6 md:p-10">
            <h3 className="font-semibold text-white text-lg mb-2">
              Contact Information
            </h3>
            <p className="text-white text-sm mb-6">
              Say something to start a live chat!
            </p>
            <div className="text-white space-y-4">
              <p className="flex items-center gap-2">
                <FaPhoneAlt /> 1-855-217-4637
              </p>
              <p className="flex items-center gap-2">
                <FiMail /> hello@shootorder.us
              </p>
              <p className="flex items-start gap-2">
                <HiOutlineLocationMarker className="mt-1" />
                21 State Street,
                <br />
                Waterbury, CT - 06702
              </p>
            </div>

            <div className="mt-6">
              <p className="text-white font-semibold mb-2">We are on Socials</p>
              <div className="flex items-center justify-start gap-6 text-white text-lg ">
                <Link href="https://www.facebook.com/shootorder">
                  <FaFacebookF className="cursor-pointer" />
                </Link>
                <Link href="https://x.com/shootorder">
                  <FaXTwitter className="cursor-pointer" />
                </Link>
                <Link href="https://www.instagram.com/shootorder/#">
                  <FaInstagram className="cursor-pointer" />
                </Link>
                <Link href="https://www.linkedin.com/company/shootorder/">
                  <FaLinkedin className="cursor-pointer" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Drop Us a Line</h3>
            <p className="text-sm text-gray-500 mb-6">
              We are always looking for a next great project
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input placeholder="First Name" variant="underline" />
              <Input placeholder="Last Name" variant="underline" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <Input placeholder="Email" variant="underline" />
              <Input placeholder="Phone Number" variant="underline" />
            </div>

            <div className="mt-6 text-sm text-gray-600 font-bold">
              Regarding
            </div>
            <div className="flex flex-wrap gap-4 mt-6 text-sm">
              {[
                "Looking for services",
                "Partnerships & Collaborations",
                "Message to CEO",
                "Other",
              ].map((item, idx) => (
                <label key={idx} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="regarding"
                    className="bg-[#9a0c28] "
                  />{" "}
                  {item}
                </label>
              ))}
            </div>

            <Textarea
              placeholder="Message"
              variant="underline"
              className="mt-6"
            />
            <div className="flex items-center justify-end">
              <button className="mt-8 md:block  rounded-full px-12 py-2 bg-[#9a0c28] text-white">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
