import { PRICINGSECTION } from "@/components/common/pricing";
import { ArrowRight } from 'lucide-react';
export const PRICING = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-col  items-center text-center pb-20 space-y-4">
          <span className="inline-block px-4 border border-gray-500 py-1.5 rounded-full text-sm font-medium text-white">
            Pricing plan
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Simple, easy pricing
          </h2>
          <p>
            Features that will help your company scale faster than any other
            product on the market
          </p>
        </div>
        <div className="flex justify-center items-center">
          <PRICINGSECTION />
        </div>
      <div>
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z' fill='white'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="relative flex flex-col items-center justify-center px-4 py-16 text-center">
        <h2 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
          Ready to get started?
        </h2>
        <p className="mb-12 max-w-2xl text-lg text-gray-200 sm:text-xl">
          With lots of unique blocks, you can easily build a page without coding. Build your next landing page with our template.
        </p>
        <button className="btn btn-lg rounded-3xl bg-black text-white hover:bg-gray-900 flex items-center gap-2">
          Get template
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
        </div>
      </div>
    </section>
  );
};
export default PRICING;
