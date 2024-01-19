// components/Services.tsx
import React from 'react';

interface Service {
  id: number;
  title: string;
  description: string;
}

const services: Service[] = [
  { id: 1, title: 'Application Development', description: 'Crafting robust and scalable applications tailored to your business needs.' },
  { id: 2, title: 'Website Development', description: 'Building interactive and user-friendly websites to enhance your online presence.' },
  { id: 3, title: 'Web Design', description: 'Creating visually appealing and intuitive designs for a seamless user experience.' },
  { id: 4, title: 'Consultancy', description: 'Providing expert advice and solutions to optimize your technology strategy.' },
  { id: 5, title: 'Tutorials on Web Development', description: 'Offering comprehensive tutorials to enhance your skills in web development.' },
];

export default function Services(){
return (
  <section className="bg-gray-100 py-12" id="services">
    <div className="max-container">
      <h2 className="text-3xl text-center font-semibold mb-8" style={{color:"#0B82CF"}}>Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.id} className="bg-white p-4 rounded-md shadow-md transition-transform duration-300 transform hover:scale-105 hover:border-2 border-blue-500">
            <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
}