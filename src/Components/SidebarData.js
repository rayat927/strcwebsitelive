import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import EventIcon from '@mui/icons-material/Event';
import InfoIcon from '@mui/icons-material/Info';


const SidebarData = [
    {
        title: "Home",
        icon: <HomeIcon/>,
        link: '/'
    },
    // {
    //     title: "Dashboard",
    //     icon: <DashboardIcon/>,
    //     link: '/dashboard'                   
    // },
    // {
    //     title: "Settings",
    //     icon: <SettingsIcon/>,
    //     link: '/settings'
    // },
    {
        title: "Courses",
        icon: <LibraryBooksIcon/>,
        link: '/courses',
        dropdownList: ['Upcoming Courses', 'Ongoing Courses']
    },
    {
        title: "Project Showcase",
        icon: <EventIcon/>,
        link: '/project-showcase'
    },
    // {
    //     title: "Notifications",
    //     icon: <EventIcon/>,
    //     link: '/notifications'
    // },
    {
        title: "About",
        icon: <InfoIcon/>,
        link: '/about'
    },
]
 

export default SidebarData;
