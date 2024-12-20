import Image from "next/image";
import Marquee from "react-fast-marquee";

export const MARQUE = () => {
  const ClientData = [
    { id: 1, image: "/images/logoipsum.svg" },
    { id: 2, image: "/images/logoipsum.svg" },
    { id: 3, image: "/images/logoipsum.svg" },
    { id: 4, image: "/images/logoipsum.svg" },
    { id: 5, image: "/images/logoipsum.svg" },
  ];

  return (
    <section className="bg-black">
      <div className="container items-center justify-center">
        <div className="text-4xl flex justify-center">
          <h3>Join other tech leaders</h3>
        </div>
        <Marquee
          pauseOnHover
          gradient={false}
          speed={40}
          className="py-10"
        >
          {ClientData.map((client) => (
            <div
              className="h-[100px] md:h-[120px] lg:h-[150px] flex items-center justify-center mx-4 md:mx-8 lg:mx-20"
              key={client.id}
            >
              <Image
                src={client.image}
                alt=""
                className="object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
                width={150}
                height={70}
                priority
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default MARQUE;
