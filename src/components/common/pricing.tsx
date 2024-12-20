"use client";
import { Check } from "lucide-react";
import { useState } from "react";

interface PlanProps {
  title: string;
  description: string;
  price: number;
  billingCycle: string;
  features: string[];
}

const PricingCard = ({
  title,
  description,
  price,
  billingCycle,
  features,
}: PlanProps) => (
  <div className="card grid grid-cols-2 border border-gray-500 px-10 py-10 gap-8">
    <div className="justify-start space-y-0">
      <p className="text-lg">For individuals</p>
      <h2 className="text-3xl font-medium">{title}</h2>
      <p className="text-xl text-gray-300">{description}</p>
    </div>
    <div className="grid justify-start">
      <div className="flex items-baseline gap-1">
        <span className="text-5xl font-medium">${price}</span>
        <span className="text-xl text-gray-300">/{billingCycle}</span>
      </div>
      <div className="space-y-6">
        <h3 className="text-xl">What's included</h3>
        <ul className="space-y-4">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-3">
              <div className="rounded-full bg-white/10 p-1">
                <Check className="w-4 h-4" />
              </div>
              <span className="text-lg">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <button className="md:w-[550px] mt-4 rounded-full border border-white px-6 py-3 text-lg font-medium hover:bg-white hover:text-black transition-colors">
        Get started
      </button>
    </div>
  </div>
);

export const PRICINGSECTION = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "yearly"
  );

  const plans = [
    {
      title: "Basic",
      description: "Perfect for individuals and small projects.",
      basePrice: 99,
      features: [
        "All analytics features",
        "Up to 250,000 tracked visits",
        "Normal support",
        "Up to 3 team members",
      ],
    },
    {
      title: "Pro",
      description: "Great for growing teams and projects.",
      basePrice: 199,
      features: [
        "All analytics features",
        "Up to 500,000 tracked visits",
        "Priority support",
        "Up to 10 team members",
      ],
    },
    {
      title: "Enterprise",
      description: "Designed for large teams and enterprises.",
      basePrice: 399,
      features: [
        "All analytics features",
        "Unlimited tracked visits",
        "Dedicated support",
        "Unlimited team members",
      ],
    },
  ];

  const multiplier = billingCycle === "yearly" ? 10 : 1; // Yearly price = 10x monthly price
  const displayBillingCycle = billingCycle === "yearly" ? "year" : "month";

  return (
    <section className="bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 mb-6 border border-gray-500  rounded-full bg-zinc-800/50 text-sm">
            Pricing plan
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-12 max-w-4xl mx-auto leading-tight">
            Clear cost structures for all teams and individuals
          </h1>
          <div className="inline-flex items-center gap-3 rounded-full bg-zinc-800/50 p-1">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-2 rounded-full text-sm transition-colors ${
                billingCycle === "monthly" ? "bg-zinc-700" : ""
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-6 py-2 rounded-full text-sm transition-colors ${
                billingCycle === "yearly" ? "bg-violet-600" : ""
              }`}
            >
              Yearly
            </button>
          </div>
        </div>
        <div className="space-y-8">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              description={plan.description}
              price={plan.basePrice * multiplier}
              billingCycle={displayBillingCycle}
              features={plan.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
