import React, { useState } from 'react';
import CourseModal from '../../Components/CourseModal';
import './Upcomingcourses.css'
import UpcomingcoursesList from './UpcomingcoursesList';

function UpcomingCourses() {
  // const[openModal, setOpenModal] = useState(false)
  return (
    <div className='upcoming-courses'>
      {/* <div className='GenX'>
        <h2>GenX- Online Course Workshop</h2>
        <p>Next GenX is a Course Workshop which will include enhancing skill of an individual youth. Solving problems like no proper communication medium with youtube courses to various paid services providing these courses, we have manually made the courses to a level where a high school student can easily learn it. It involves making interactive courses with Gamification as its spice.</p>
        <ul>
          <p>Some of the Courses we will be holding this year are:</p>
          <li>Python Beginner</li>
          <li>AI: Made Easy</li>
          <li>Design Thinking</li>
          <li>Three.js</li>
        </ul>
        <img src='https://media.discordapp.net/attachments/917695173570469888/936934024960696350/8.png?width=453&height=453' />
      </div> */}
      {
        UpcomingcoursesList.map((val, key) => {
          return (
            <div className='course-card' key={key} onClick={() => {
              window.location.pathname = `/upcoming-courses/${val.course_tag}`
            }}>
              <img src={val.image} />
              <div className='course-card-info'>
                <h2>{ val.title }</h2>
                <p>{ val.shortdesc }</p>
              </div>
            </div>
          )
        })
      }
      {/* <div className='course-card'>
        <img src='https://media.discordapp.net/attachments/917695173570469888/936934024960696350/8.png?width=453&height=453' />
        <div className='course-card-info'>
          <h2>GenX- Online Course Workshop</h2>
          <p>NEXT GENX IS A COURSE WORKSHOP WHICH WILL INCLUDE ENHANCING SKILL OF AN INDIVIDUAL YOUTH.</p>
        </div>
      </div> */}
    </div>
  )
}

export default UpcomingCourses;
