import Image from 'next/image'

export default function Hero(){
  return (
    <section className="text-white p-24 flex flex-col lg:flex-row justify-center items-center" style={{ height: '80vh', background:"#0B82CF" }}>
    <div className="container mx-auto text-center lg:text-left lg:w-1/2">
      <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
        Transforming Ideas into Digital Solutions
      </h1>
      <p className="text-lg md:text-xl mb-8">
        We are a technology company dedicated to creating innovative solutions that empower businesses.
      </p>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
        <a  href="#services">Explore Our Services </a>
      </button>
    </div>

    <div className="mt-10 lg:w-1/2 lg:mt-0">
      <Image
        src="/michu-hero.png"
        alt="camp"
        width={600}
        height={800}
        className="mx-auto w-full h-full lg:mx-0"
      />
    </div>
  </section>
  );
}
