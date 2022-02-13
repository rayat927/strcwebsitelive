import React, { useEffect, useState } from 'react';
import { db } from '../../firebase/firebase';
import ProjectCard from './ProjectCard';
import './Project_Showcase.css'
import AddIcon from '@mui/icons-material/Add';

function Project_Showcase() {
    const [projectList, setProjectList] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        let projects = []
        const unsubscribe = db.collection('projects').get().then(ss => {
            ss.forEach(doc => projects.push({ id: doc.id, data: doc.data() }))
            setProjectList(projects)
            setLoading(false)
        })

        return unsubscribe
    }, [])

    console.log(projectList);

    return (
        <div className='Project_Showcase'>
            {loading &&  <p className='loading'>Loading....</p>}
            {
                projectList.map((val, key) => {
                    return (
                        <ProjectCard project={val.data} id={val.id} />
                    )
                }) 
               
            }
            <div onClick={() => window.location.pathname='/projects/add'} className='addProject'>
                <AddIcon />
                <h3>Add Project</h3>
            </div>
      </div>
  )
}

export default Project_Showcase;
