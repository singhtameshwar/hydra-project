"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { CheckCircle } from "lucide-react";

export const ANALYTICS = () => {
  const contentRef = useRef(null);
  const btnRef = useRef(null);
  const textref = useRef(null);
  const tokenref = useRef(null);
  const buttonref = useRef(null);
  const analyticref = useRef(null);
  const propref = useRef(null);

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
        contentRef.current,
        { x: "100%", opacity: 0 },
        { x: "0%", opacity: 1 },
        "<0.3"
      )
      .fromTo(
        textref.current,
        { y: "100%", opacity: 0 },
        { y: "0%", opacity: 1 },
        "<0.4"
      )
      .fromTo(
        tokenref.current,
        { y: "100%", opacity: 0 },
        { y: "0%", opacity: 1 },
        "<0.6"
      )
      .fromTo(
        analyticref.current,
        { y: "100%", opacity: 0 },
        { y: "0%", opacity: 1 },
        "<0.8"
      )
      .fromTo(
        buttonref.current,
        { y: "100%", opacity: 0 },
        { y: "0%", opacity: 1 },
        "<0.9"
      )
      .fromTo(
        propref.current,
        { y: "100%", opacity: 0 },
        { y: "0%", opacity: 1 },
        "<1.0"
      );
  }, []);
  return (
    <section className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          <div className="flex-1 space-y-8">
            <div
              ref={analyticref}
              className="badge  border h-10 w-1/3 border-gray-500 text-white"
            >
              AI analytics 3.0 →
            </div>
            <h1
              ref={btnRef}
              className="text-5xl font-bold leading-tight tracking-tight lg:text-6xl lg:leading-[1.2]"
            >
              Get the insights you need to improve your business
            </h1>
            <p ref={textref} className="text-xl text-zinc-400">
              Effortlessly build websites using our SaaS Framer template to
              leverage the potency of Framer.
            </p>
            <div ref={buttonref} className="flex flex-wrap gap-4">
              <button className="btn btn-primary rounded-3xl px-6 py-3">
                Get started
              </button>
              <button className="btn btn-outline border border-y-white rounded-3xl  px-6 py-3">
                Book a demo
              </button>
            </div>
            <div ref={tokenref} className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-teal-500" />
                <span className="text-zinc-400">No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-teal-500" />
                <span className="text-zinc-400 ">Cancel anytime</span>
              </div>
            </div>
            <div ref={propref} className="flex items-center gap-4">
              <div className="avatar-group -space-x-4">
                <div className="avatar">
                  <div className="w-12 border-2 border-black rounded-full">
                    <img src="/images/images.jpg" alt="U1" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12 border-2 border-black rounded-full">
                    <img src="/images/images.jpg" alt="U2" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12 border-2 border-black rounded-full">
                    <img src="/images/images.jpg" alt="U3" />
                  </div>
                </div>
              </div>
              <p className="text-zinc-400">
                Join thousands of users using our platform!
              </p>
            </div>
          </div>
          <div ref={contentRef} className="flex-1 pt-16">
            <div className="h-[300px] sm:h-[400px] md:h-[600px] w-full sm:w-[500px] md:w-[700px] relative md:absolute">
              <img
                src="/images/data.avif"
                alt=""
                className="w-full sm:w-[500px] md:w-[700px] h-[200px] sm:h-[300px] md:h-[500px] mt-5 object-cover display-block border-radius-inherit"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ANALYTICS;
