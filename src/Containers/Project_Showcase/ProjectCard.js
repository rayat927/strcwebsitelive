import React from 'react';

function ProjectCard({project, id}) {
    return (
        <div className='projectCard'>
            <img src={project.image} />
            <div className='projectDetails'>
                <h1>{project.title}</h1>
                <p>{ project.details }</p>
            </div>
            <a href={`/project-showcase/${id}`}>Read More</a>
      </div>
  )
}

export default ProjectCard;
