import React from 'react';
import project from "./data/projects.json";

const Project = () => {
  return (
    <div className="container project my-3">
      <h1>Projects</h1>
      <br />
      <div className="row">
        {project.map((data,index) => (
          <div className=" col-md-4 mb-4" key={index}>
            <div className="card" style={{ width: "18rem" }}data-aos="flip-right" data-aos-duration="1000">
              <div className="img"><img src={`/assets/${data.imgSrc}`} className="card-img-top" alt={data.title}  /></div>
              <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <h6>Tech Stack: {data.techStack}</h6>
                <div className="card-buttons">

<a href={data.githubLink} className="  btn btn-primary me-2">GitHub</a>
                <a href={data.LiveLink} className="btn btn-warning">Live Demo</a>

                </div>
               
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
