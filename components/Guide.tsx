import Image from 'next/image'
import React from 'react'

export default function Guide(){
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <Image src="/camp.svg" alt="camp" width={50} height={50} />
        <p className="uppercase regular-20 -mt-1 mb-3 text-blue-700">
          We are here for you
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-52 xl:max-w-[420px]">To Guide You to <span style={{fontStyle:"italic", color:"#0B82CF"}}>Connect to your Future</span></h2>
          <p className="regular-16 text-gray-30 xl:max-w-[720px]" style={{textAlign:"justify"}}><span className="text-3xl" style={{color:"#0B82CF"}}>At MichuTech IT Solutions PLC</span> , we serve as your bridge to a future enhanced by digital solutions and cutting-edge application development. Our offerings include mobile and desktop applications, medical solutions, and expertise in AI and machine learning. Additionally, we provide consultancy services to guide you through the application development process, along with training programs focused on web development. With MichuTech's support, you can confidently connect to your future. Invite your friends and family to embark on thrilling adventures through valleys and to the summit of mountains, all facilitated by MichuTech's state-of-the-art solutions</p>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full">
        <Image 
          src="/boat.png"
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />

        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image 
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className='flex w-full flex-col'>
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">Project Completion</p>
                <p className="bold-16 text-green-50 ml-4">Beta Release</p>
              </div>
              <p className="bold-20 mt-2">Application Development</p>
            </div>

            <div className='flex w-full flex-col'>
              <p className="regular-16 text-gray-20">Project Design</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">Document Development</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

