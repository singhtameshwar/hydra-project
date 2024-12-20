export const STRATEGY = () => {
  return (
    <section className="bg-black">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-12 space-y-4">
          <span className="inline-block px-4 border border-gray-500  py-1.5 rounded-full text-sm font-medium bg-zinc-800 text-white">
            Strategies that work
          </span>
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white">
            Track the progress towards objectives with
            <br /> key results
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div className="card border border-[#fff4ff1a] bg-black shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Workspace</h2>
              <p>
                Our robust privacy measures secure your data for a worry-free
                web development journey.
              </p>
            </div>
            <figure>
              <img
                src="/images/pie.avif"
                alt="graph"
                className="md:w-96 md:mr-48 mb-3"
              />
            </figure>
          </div>
          <div className="card border border-[#fff4ff1a] bg-black shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>
                Enhance collaboration with powerful tools, with your team and
                your effectively.
              </p>
            </div>
            <figure>
              <img
                src="/images/bar.avif"
                alt="Shoes"
                className="md:w-96 md:mr-48 mb-3"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};
export default STRATEGY;
