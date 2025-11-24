import React from 'react';
import teamData from '../../data/team.json';

const Team = () => {
  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-custom">
        <h2 className="heading-2 text-center mb-4">Meet Our Team</h2>
        <p className="body-large text-neutral-600 text-center max-w-2xl mx-auto mb-12">
          A passionate group of architects and designers committed to excellence.
        </p>

        {/* Center single card using mx-auto */}
        <div className="max-w-md mx-auto">
          {teamData.team.map((member) => (
            <div key={member.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="heading-3 text-xl mb-1">{member.name}</h3>
                <p className="text-neutral-500 text-sm mb-3">{member.role}</p>
                <p className="text-neutral-600 text-sm mb-4">{member.bio}</p>

                <div className="pt-4 border-t border-neutral-200">
                  <p className="text-xs text-neutral-500 mb-2">Education</p>
                  <p className="text-sm text-neutral-700 mb-3">{member.education}</p>

                  <p className="text-xs text-neutral-500 mb-2">Specialization</p>
                  <p className="text-sm text-neutral-700">{member.specialization}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
