import React from 'react'

import backgroundImage from '../../images/mapScreenSaver.png'

const About = () => {
  return (
    <div
      className="aboutUs"
      style={{
        height: '100%',
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        zIndex: '10',
      }}
    >
      Контент страницы *
    </div>
  )
}

export default About