import React from 'react';

interface Partner {
  id: number;
  name: string;
  logoUrl: string;
  description: string;
}

const partners: Partner[] = [
  { id: 1, name: 'Partner 1', logoUrl: '/phone.png', description: 'Description 1' },
  { id: 2, name: 'Partner 2', logoUrl: '/phone.png', description: 'Description 2' },
  { id: 3, name: 'Partner 3', logoUrl: '/phone.png', description: 'Description 3' },
  { id: 4, name: 'Partner 4', logoUrl: '/phone.png', description: 'Description 4' },
];

const PartnerCard: React.FC<Partner> = ({ id, name, logoUrl, description }) => (
  <div key={id} className="bg-white p-2 rounded-md shadow-md flex flex-col items-center justify-center text-center">
    <img src={logoUrl} alt={name} className="max-h-20 object-contain mb-4" />
    <p className="text-sm text-gray-500">{description}</p>
  </div>
);

export default function Partners() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-container">
        <h2 className="text-3xl text-center font-semibold mb-8">Our Partners</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {partners.map((partner) => (
            <PartnerCard key={partner.id} {...partner} />
          ))}
        </div>
      </div>
    </section>
  );
}
