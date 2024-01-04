import { partners } from '@/constants';
import React from 'react';

interface Partner {
  id: number;
  name: string;
  logoUrl: string;
}


const PartnerCard: React.FC<Partner> = ({ id, name, logoUrl }) => (
  <div key={id} className="bg-white rounded flex flex-col items-center justify-center text-center">
    <img src={logoUrl} alt={name} className="max-h-28 object-contain mb-4" />
  </div>
);

export default function Partners() {
  return (
    <section className="bg-blue-900 py-12 mb-4">
      <div className="max-container">
        <h2 className="text-3xl text-center font-semibold mb-8 text-white">Our Partners</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {partners.map((partner) => (
            <PartnerCard key={partner.id} {...partner} />
          ))}
        </div>
      </div>
    </section>
  );
}
