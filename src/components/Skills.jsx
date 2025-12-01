import React from 'react';
import skills from './data/skills.json';

const Skills = () => {
  return (
    <div className="container skills">
      <h1>Skills</h1>
      <div className="items"  
      >
        {skills.map((data, index) => (
          <div className="item" key={index} data-aos="flip-left" data-aos-duration="1000">
            <img src={`/assets/${data.imgSrc}`} alt={data.title || 'Skill'} />
            <h3>{data.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
