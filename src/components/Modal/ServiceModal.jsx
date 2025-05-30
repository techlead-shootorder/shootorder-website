"use client";
import React, { forwardRef, useImperativeHandle, useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { gsap } from "gsap";
import ContactForm from "../Home/TalentForm/TalentForm";
import { X } from "lucide-react";

const ServiceModal = forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  useImperativeHandle(ref, () => ({
    open: () => {
      setIsOpen(true);
    },
    close: () => {
      animateOut(() => setIsOpen(false));
    },
  }));

  // Lock/unlock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      animateIn();
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const animateIn = () => {
    if (modalRef.current) {
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, y: -40 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
      );
    }
  };

  const animateOut = (onComplete) => {
    if (modalRef.current) {
      gsap.to(modalRef.current, {
        opacity: 0,
        y: -40,
        duration: 0.3,
        ease: "power2.in",
        onComplete,
      });
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      ref.current?.close();
    }
  };

  if (!isOpen) return null;

  return createPortal(
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50"
    >
      <div
        ref={modalRef}
        className="bg-white w-full !max-w-lg rounded-xl shadow-xl relative p-6"
      >
        {/* Close Icon */}
        <button
          onClick={() => ref.current?.close()}
          className="absolute top-4 right-4 text-gray-500 hover:text-black transition"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Content */}
        <div className="">
          <ContactForm />
        </div>
      </div>
    </div>,
    document.body
  );
});

ServiceModal.displayName = "ServiceModal";
export default ServiceModal;
