"use client";
import { useEffect, useRef } from "react";
import { Bell, Users2, MessageCircle } from "lucide-react";
import { gsap } from "gsap";

export const BENEFITSECTION = () => {
  const cardRefs = useRef<HTMLElement[]>([]);
  const btnRef = useRef(null);
  const textRef = useRef(null);

  const benefits = [
    {
      icon: Bell,
      title: "Real-time update",
      description:
        "With Framer template, you can easily get more user data from your website and app.",
    },
    {
      icon: Users2,
      title: "Large community",
      description:
        "With Framer template, you can easily get more user data from your website and app.",
    },
    {
      icon: MessageCircle,
      title: "Customer support",
      description:
        "With Framer template, you can easily get more user data from your website and app.",
    },
  ];

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  useEffect(() => {
    const timeline = gsap.timeline({
      defaults: { duration: 1, ease: "power3.out" },
    });

    timeline
    .fromTo(
        btnRef.current,
        { y: "100%", opacity: 0 },
        { y: "0%", opacity: 1 },
        "<0.1"
      )
      .fromTo(
        textRef.current,
        { y: "100%", opacity: 0 },
        { y: "0%", opacity: 1 },
        "<0.3"
      )
      .fromTo(
        cardRefs.current[0],
        { y: "100%", opacity: 0 },
        { y: "0%", opacity: 1 },
        "<0.4"
      )
      .fromTo(
        cardRefs.current[1],
        { y: "100%", opacity: 0 },
        { y: "0%", opacity: 1 },
        "<0.5"
      )
      .fromTo(
        cardRefs.current[2],
        { y: "100%", opacity: 0 },
        { y: "0%", opacity: 1 },
        "<0.6"
      );
  }, []);

  return (
    <section className="w-full bg-black px-4 py-16 md:py-24">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-12 space-y-4">
          <span
            ref={btnRef}
            className="inline-block px-4 border border-gray-500 py-1.5 rounded-full text-sm font-medium bg-zinc-800 text-white"
          >
            Benefits
          </span>
          <h2
            ref={textRef}
            className="text-4xl md:text-5xl font-bold tracking-tight text-white"
          >
            Experience the key benefits
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              ref={addToRefs}
              className="card  shadow-xl backdrop-blur-sm"
            >
              <div className="card-body p-6 rounded-2xl border border-stone-400 space-y-4">
                <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="card-title text-xl font-semibold text-white">
                  {benefit.title}
                </h3>
                <p className="text-zinc-400">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BENEFITSECTION;
