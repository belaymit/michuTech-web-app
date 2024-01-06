// components/Testimonials.tsx

import { testimonialsData } from '@/constants';
import React from 'react';

interface Testimonial {
  id: number;
  name: string;
  img: string;
  role: string;
  comment: string;
}


export default function Testimonials() {
  return (
    <section className="bg-gray-100 py-16 flex items-center">
    <div className="container mx-auto flex flex-col items-center justify-center"> {/* Updated this line */}
      <h2 className="text-3xl font-bold text-center mb-8">What People Clients Say About MichuTech?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {testimonialsData.map((testimonial) => (
          <div key={testimonial.id} className="bg-white p-6 rounded-lg">
            <div className="flex items-cn mb-4">
              <div className="flex-shrink-0">
                <img
                  className="h-20 w-20 rounded-full object-cover"
                  src={testimonial.img} 
                  alt={`Avatar of ${testimonial.name}`}
                />
              </div>
              <div className="ml-3">
                <p className="text-gray-800 font-semibold">{testimonial.name}</p>
                <p className="text-gray-600">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">{testimonial.comment}</p>
          </div>
        ))}
      </div>
    </div>
  </section>  
  );
}
