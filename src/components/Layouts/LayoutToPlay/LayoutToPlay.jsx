import React from 'react'
import "./LayoutToPlay.css"
import TopBar from '../../TopBar/TopBar';

const LayoutToPlay = () => {
  return (
    <div className="main-div-play">
        <TopBar />
        <div className="hero-section-play">
          <h1> Seccion jugar </h1>
        </div>
    </div>
  )
}

export default LayoutToPlay