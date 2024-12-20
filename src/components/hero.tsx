import { ArrowRight } from 'lucide-react';

export const  HERO=()=> {
  return (
    <section className=" py-20 bg-black flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-normal text-white max-w-4xl tracking-tight mb-6">
        Expand your online brand
      </h1>
      <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-12">
        Make your very own gorgeous site with this Framer template.
      </p>
      <button className="btn rounded-3xl btn-white border-white hover:bg-white hover:text-black transition-colors group">
        Get template
        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </section>
  );
}
export default HERO;