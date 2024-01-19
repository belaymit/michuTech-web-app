'use client'
import React, { useState } from 'react';
import { TEAM_MEMBERS } from '@/constants';
import Modal from './Modal';

interface TeamMember {
  id: number;
  name: string;
  fullName: string;
  role: string;
  hobbies: string;
  imageUrl: string;
  responsibility: string; 
  Experience: { [key: number]: string }[]; 
  Education: { [key: number]: string }[]; 
}
interface TeamMemberCardProps {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
  openModal: () => void; 
}

const TeamSection: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const openModal = (member: TeamMember) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  return (
    <section id="team" className="bg-gray-100 py-12">
    <div className="max-container">
      <h2 className="text-3xl text-center font-semibold mb-8" style={{color:"#0B82CF"}}>Our Teams</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {TEAM_MEMBERS.map((member) => (
          <TeamMemberCard key={member.id} {...member} openModal={() => openModal(member)} />
        ))}
      </div>
    </div>
    {selectedMember && (
  <Modal onClose={closeModal}>
    <div className="w-full">
      <img src={selectedMember.imageUrl} alt={selectedMember.name} className="rounded-full h-40 w-40 mx-auto mb-4 object-cover" />
      <h3 className="text-lg font-semibold mb-2 text-center">{selectedMember.fullName}</h3>
      <p className="text-gray-500 text-center">{selectedMember.responsibility}</p>

      <div className="mt-4">
        <h4 className="text-xl font-semibold" style={{color:"#0B82CF"}}>Experience</h4>
        <div className="bg-white p-4 rounded-md shadow-md ">
          <ul className="text-gray-500">
            {selectedMember.Experience.map((exp, index) => (
              <li key={index}>{`${index + 1}. ${exp}`}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-4">
        <h4 className="text-xl font-semibold" style={{color:"#0B82CF"}}>Education</h4>
        <div className="bg-white p-4 rounded-md shadow-md">
          <ul className="text-gray-500">
            {selectedMember.Education.map((edu, index) => (
              <li key={index}>{`${index + 1}. ${edu}`}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-4">
        <h4 className="text-xl font-semibold" style={{color:"#0B82CF"}}>Hobbies</h4>
        <div className="bg-white p-4 rounded-md shadow-md">
          <ul className="text-gray-500">
            {selectedMember.hobbies}
          </ul>
        </div>
        </div>
    </div>
  </Modal>
)}



  </section>
  );
};

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ id, name, role, imageUrl, openModal }) => {
  return (
    <div key={id} className="bg-white p-4 rounded-md shadow-md text-center cursor-pointer" onClick={openModal}>
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


export default TeamSection;
