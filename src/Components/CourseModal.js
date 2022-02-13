import React from 'react';

function CourseModal({title, image, details}) {
    return (
        <div className='modal-container'>
            <div className='modal'>
                <img src={image} />
                <h1>{title}</h1>
                <p>{ details }</p>
            </div>
      </div>
  )
}

export default CourseModal;
