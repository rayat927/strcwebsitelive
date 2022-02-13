import React from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import './Notification.css'

function Notification() {
    return (
        <div className='notification'>
            <NotificationsIcon />
            <div className='notification-number'>
                <p>2</p>
            </div>
        </div>
        )
}

export default Notification;
