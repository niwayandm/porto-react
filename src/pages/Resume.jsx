import React from 'react';
import { experience } from '../data/data';

const Resume = ({ isVisible }) => {
  return (
    <section id="resume" className="min-h-screen flex items-center py-20 bg-gray-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`
          transform transition-all duration-1000
          ${isVisible.resume ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
        `}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Resume
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Education */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-blue-400 mb-6">Education</h3>
              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:scale-105">
                <h4 className="text-xl font-semibold mb-2">Bachelor of Information Technology</h4>
                <p className="text-blue-400 mb-2">Gunadarma University</p>
                <p className="text-gray-400 mb-3">2017 - 2021</p>
                <p className="text-gray-300">
                  Graduated Cum Laude with a GPA of 3.75 / 4.00. Final project focused on sentiment analysis of online learning discourse on Twitter using K-Nearest Neighbor, deployed via a Flask web application.
                </p>
              </div>
            </div>


            {/* Experience */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-blue-400 mb-6">Experience</h3>
              {experience.map((job, index) => (
                <div key={index} className={`
                  bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 
                  transition-all duration-300 hover:scale-105
                  transform delay-${index * 200}
                  ${isVisible.resume ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}
                `}>
                  <h4 className="text-xl font-semibold mb-2">{job.title}</h4>
                  <p className="text-blue-400 mb-2">{job.company}</p>
                  <p className="text-gray-400 mb-3">{job.duration}</p>
                  <p className="text-gray-300">{job.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
