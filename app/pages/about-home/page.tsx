import React from 'react'

export default function AboutHome() {
  const companyInfo = [
    { title: 'Company Values', description: 'Integrity, Excellence, Innovation, Collaboration, Customer-Centric.' },
    { 
      title: 'Company Introduction', 
      description: `MichuTech is a company specializing in web development, app
        development, and other computing works. MichuTech is a dynamic and
        innovative company that brings digital solutions to businesses and
        individuals. With a team of skilled professionals, we offer cutting-edge
        technology expertise and creative design to deliver customized websites,
        responsive mobile applications, and software solutions tailored to meet
        specific client needs. Our company stays up-to-date with the latest
        trends and advancements in technology, ensuring that our clients receive
        modern, functional, and user-friendly products. With a strong focus on
        reliability, security, and scalability, MichuTech strives to provide
        exceptional services that maximize efficiency, drive growth, and
        enhance the online presence of its clients. Our services are affordable to
        all sections of industries. We don’t just design or write codes but we
        work with you to make your presence felt in the web world through our
        thoughts of leadership and innovation. We closely work with you to
        understand your vision and requirements; we share with you what we
        see in the marketplace and come up with the best solution. Our team has
        expertise in the domain of developing corporate web-based applications,
        e-commerce, PHP frameworks, CMS, etc. We have served a diverse
        segment of industries like health, education, travel, etc. We have
        experience in almost every kind of web development. Over the years our
        team has acquired expertise with the experience and ability to provide
        solutions to business problems. We also help our clients to change
        their vision into a visual identity of the brand. \n\nA team of web designers and graphic designers excel in creating
        lightweight interface pages, creative flash demos, intuitive navigation,
        and user-friendly forms and screen layouts. Not only this we have
        Quality Control individuals that ensure that all development is bug-free
        and adheres to the specifications.`,
        imageLink: '/aboutMichuTec.png',
       },
    { 
      title: 'Quality Statement', 
      description: "Our team is committed to sustaining the highest quality standards through continuous process improvement. To provide utmost integrity and satisfaction to our clients and app users through our services,creating long-term relationships by providing an ideal work environment and customer support all-time for clients and employees.",
      imageLink:'/quality.png'
    },
    { title: 'Partnerships', description: 'Strategic alliances with industry leaders for mutual growth and success.' },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-5xl px-4 sm:px-6 lg:px-8 py-6 bg-white rounded-md w-full sm:w-3/4 md:w-1/2" style={{marginTop:"6rem"}}>
        <h1 className="text-3xl font-bold mb-6 text-center"style={{color:"#0B82CF"}}>About MichuTech IT Solutions</h1>
        <ul className="list-none p-0">
          {companyInfo.map((info, index) => (
            <li key={index} className="mb-4">
              <h2 className="text-xl font-semibold mb-2">{info.title}</h2>
              <p style={{textAlign:"justify"}}>{info.description}</p>
              {info.imageLink && (
                <img src={info.imageLink} alt={info.title} className="w-full mt-4" />
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
