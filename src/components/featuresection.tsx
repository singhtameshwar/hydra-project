"use client";

import { ArrowRight } from "lucide-react";
import { gsap } from "gsap";

export const FEATURESECTION = () => {
  return (
    <div className=" bg-black text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-24">
          <div className="badge mb-8  h-10  border border-gray-500  text-white">
            Hydar features
          </div>
          <h1 className="text-5xl md:text-5xl font-bold mb-4 tracking-tight">
            The tools you need to succeed.
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Nothing less than excellent
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-3 space-x-3 flex justify-end">
            <div>
              <h3 className="text-3xl md:text-5xl font-bold tracking-tight">
                Track online earnings
              </h3>
              <p className="text-lg text-zinc-400 mt-3 mb-3 leading-relaxed max-w-xl">
                Take complete control of your work, and generate new income
                <br />
                sources. Creators can earn money from their <br /> content and
                truly connect with their audience.
              </p>
              <button className="btn rounded-3xl bg-zinc-800 text-white border-zinc-700 hover:bg-zinc-700">
                Book a demo <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="card shadow-2xl">
              <figure>
                <img
                  src="/images/imageone.avif"
                  alt="graph"
                  className="md:w-3/5 "
                />
              </figure>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 pt-5 gap-12 items-center">
          <div className="relative">
            <div className="card shadow-2xl">
              <figure>
                <img
                  src="/images/imagetwo.avif"
                  alt="graph"
                  className="md:w-3/5"
                />
              </figure>
            </div>
          </div>
          <div className="space-y-3  space-x-3 flex justify-start">
            <div>
              <h3 className="text-3xl md:text-5xl font-bold tracking-tight">
                Track online earnings
              </h3>
              <p className="text-lg text-zinc-400 mt-3 mb-3 leading-relaxed max-w-xl">
                Take complete control of your work, and generate new income
                <br />
                sources. Creators can earn money from their <br /> content and
                truly connect with their audience.
              </p>
              <button className="btn rounded-3xl bg-zinc-800 text-white border-zinc-700 hover:bg-zinc-700">
                Book a demo <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FEATURESECTION;
