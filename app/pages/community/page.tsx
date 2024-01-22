import React from 'react';
import Head from 'next/head';

export default function MentorshipPage () {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Head>
        <title>Mentorship | MichuTech IT Solutions</title>
      </Head>
      <div className="max-w-4xl px-4 sm:px-6 lg:px-8 py-4 bg-white rounded-md w-full sm:w-3/4 md:w-1/2">
        <h1 className="text-3xl font-bold mb-6 text-center" style={{color:"#0B82CF"}}>Mentorship at MichuTech</h1>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2" style={{color:"#0B82CF"}}>Empowering Future Careers</h2>
          <p style={{textAlign:"justify"}}>
            At MichuTech, we are passionate about nurturing the next generation of developers and students. Our mentorship program focuses on guiding individuals in choosing the right tech stack for their future careers. In a rapidly evolving tech landscape, our experienced mentors provide invaluable insights, ensuring mentees make informed decisions about their professional journey.
          </p>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2" style={{color:"#0B82CF"}}>Navigating the Software Development Process</h2>
          <p style={{textAlign:"justify"}}>
            Software development can be a complex journey, and our mentorship extends beyond technology choices. We believe in equipping mentees with a deep understanding of the entire software development process. From project planning and coding best practices to collaboration strategies, our mentors share their expertise to demystify the development lifecycle. This comprehensive approach ensures mentees develop not only technical skills but also a holistic understanding of their role in the software development ecosystem.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-1" style={{color:"#0B82CF"}}>Community Health Advocacy</h2>
          <p style={{textAlign:"justify"}}>
            MichuTech's commitment to community well-being goes beyond software development. Dr. Samuel Tesfaye, a valued member of our team, contributes to community health advocacy. Through mentorship and guidance, Dr. Tesfaye helps individuals maintain a healthy work-life balance. We believe that a supportive and balanced lifestyle is essential for long-term success and fulfillment. At MichuTech, mentorship is not just about code – it's about empowering individuals to lead fulfilling lives both professionally and personally.
          </p>
        </div>
      </div>
    </div>
  );
};


