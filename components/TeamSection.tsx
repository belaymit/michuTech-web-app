import { TEAM_MEMBERS } from '@/constants';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
}

export default function TeamSection (){
  return (
    <section id="team" className="bg-gray-100 py-12">
      <div className="max-container">
        <h2 className="text-3xl text-center font-semibold mb-8">Our Team</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member) => (
            <TeamMemberCard key={member.id} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TeamMemberCard = ({ id, name, role, imageUrl }: TeamMember) => {
  return (
    <div key={id} className="bg-white p-4 rounded-md shadow-md text-center">
      <img
        src={imageUrl}
        alt={name}
        className="rounded-full h-40 w-40 mx-auto mb-4 object-cover"
      />
      <h3 className="text-lg font-semibold mb-2">{name}</h3>
      <p className="text-gray-500">{role}</p>
    </div>
  );
};


