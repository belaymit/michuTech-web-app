import Image from 'next/image'
export default function Hero(){
  return (
    <section className="bg-gray-900 text-white pt-16 flex flex-col justify-center items-center" style={{ height: '80vh' }}>
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Transforming Ideas into Digital Solutions
        </h1>
        <p className="text-lg md:text-xl mb-8">
          We are a technology company dedicated to creating innovative solutions that empower businesses.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
          Explore Our Services
        </button>
      </div>

      <div className="mt-10">
      <Image 
        src="/camp.svg"
        alt="camp"
        width={50}
        height={50}
        className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
      />
      </div>
    </section>
  );
}
