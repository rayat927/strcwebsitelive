import React from 'react';

function Associates() {
    const associationList = [
        {
            name: 'Tech X',
            logo: 'https://strcofficial.files.wordpress.com/2020/09/59c30492-7033-40e7-808c-0977beebe458.jpeg?w=264',
            about: 'TechX is a place of Research excellence, where you can feel the future near you. learning the skills and knowledge about AI and Robotics that will help them achieve an experience and opportunity in the field. Making work simpler and more effective with least resources is our goal.',
            link: 'https://strctechnologydevelopmentgroup.wordpress.com/'
        },
        {
            name: 'Develop X',
            logo: 'https://strcofficial.files.wordpress.com/2020/08/off-1.jpg?w=264',
            about: 'DevelopX is a place of coding, developing and enhancing computer technology. The world of DevelopX begins with the coding. Every codes of software of STRC is made here. DevelopX focuses on Software, app and web development , Cinematography. DevelopX enhances Computerized learning.',
            link: 'https://strcdigitaldevelopmentgroup.wordpress.com/'
        },
        {
            name: 'Science X',
            logo: 'https://strcofficial.files.wordpress.com/2020/09/496064ed-bf1d-44e2-b2c8-45c761e6d108.png?w=171',
            about: 'ScienceX is a place of Excellence in research and technology. Everything has a science behind it which ScienceX is. ScienceX acts as a backbone of the STRC making the visions come true. ScienceX focuses on Physics, Nano Science and Astronomy. It also focuses on current environment issues.',
            link: 'https://sciencexresearchgroup.wordpress.com/'
        },

    ]
    return (
        <div className='associates'>
            {
                associationList.map((val, key) => {
                    return (
                        <div className='associate-items' key={key}>
                            <div className='associate-title'>
                                <h2>{ val.name }</h2>
                            </div>
                            <div className='associate-logo'>
                                <img src={val.logo} />
                            </div>
                            <div className='associate-about'>
                                <p>{ val.about }</p>
                            </div>
                            <div className='associate-link'>
                                <a href={val.link}>Visit Now</a>
                            </div>
                         </div>
                    )
                })
            }
            
        </div>
    );
}

export default Associates;
