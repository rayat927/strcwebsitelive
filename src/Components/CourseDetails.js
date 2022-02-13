import React from 'react';
import { useParams } from 'react-router';
import UpcomingcoursesList from '../Containers/Upcomingcourses/UpcomingcoursesList';

function CourseDetails() {
    const { id } = useParams()
    
    return (
        <div className='course-details'>
        {
            UpcomingcoursesList.map((val, key) => {
                if (val.course_tag == id) {
                    return (
                        <div className='container' key={key}>
                            <img className='course-details-image' src={val.image} />
                            <div className='course-details-info'>
                                <h1>{val.title}</h1>
                                <p>{ val.details }</p>
                            </div>
                        </div>
                  )
              }
          })
    }
    </div>
  )
}

export default CourseDetails;
