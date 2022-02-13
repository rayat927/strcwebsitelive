import React from 'react';
import Home from '../Containers/Home/Home'
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import About from '../Containers/About/About';
import UpcomingCourses from '../Containers/Upcomingcourses/Upcomingcourses';
import CourseDetails from './CourseDetails';
import Login from '../Containers/Login/Login';
import SignUp from '../Containers/SignUp/SignUp';
import Project_Showcase from '../Containers/Project_Showcase/Project_Showcase';
import AddProject from '../Containers/AddProject/AddProject';
import Ongoingcourses from '../Containers/Ongoingcourses/Ongoingcourses';
import ProjectDetails from '../Containers/Project_Showcase/ProjectDetails'

function Router() {
    return (
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/upcoming-courses" element={<UpcomingCourses />} />
                <Route path="/upcoming-courses/:id" element={<CourseDetails />} />
                <Route path='/ongoing-courses' element={<Ongoingcourses />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<SignUp />} />
                <Route path='/project-showcase' element={<Project_Showcase />} />
                <Route path='/project-showcase/:id' element={<ProjectDetails />} />
                <Route path='/projects/add' element={<AddProject />} />
            {/* <Route path="invoices" element={<Invoices />} /> */}
            </Routes>
      </BrowserRouter>
  )
}

export default Router;
