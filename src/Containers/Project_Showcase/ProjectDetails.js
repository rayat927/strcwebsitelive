import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { db } from '../../firebase/firebase'
import './Project_Showcase.css'

function ProjectDetails() {
    const { id } = useParams()
    const [project, setProject] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
            db.collection('projects').doc(id).get().then(ss => {
            setProject({id: ss.id, data: ss.data()})
            setLoading(false)
        
        })
    }, [])
    
    console.log(project);

  return (
      <div className='project-details'>
          {loading && <p className='loading'>Loading...</p>}
          {project &&
              <div className='project-details-info'>
                   <img src={project.data.image} />
                  <h1>{project.data.title}</h1>
                  <p>{ project.data.details}</p>
              </div>
           
          }
      </div>
  )
}

export default ProjectDetails