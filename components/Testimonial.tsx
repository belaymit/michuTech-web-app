// components/Testimonials.tsx

import React from 'react';

interface Testimonial {
  id: number;
  name: string;
  img: string;
  role: string;
  comment: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: 'Mr. Yonatan Wube',
    img:'/Yonatan.jpeg',
    role: 'CEO, Arki Sport Betting',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 2,
    name: 'Mr. Sisay Girma',
    img:'/Sisay.jpeg',
    role: 'Wings Education and Media',
    comment: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">What People Clients Say About MichuTech?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start mb-4"> {/* Updated this line */}
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
