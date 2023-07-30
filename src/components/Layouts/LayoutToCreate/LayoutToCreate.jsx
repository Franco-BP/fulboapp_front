import React from 'react'
import "./LayoutToCreate.css"
import TopBar from '../../TopBar/TopBar';

const LayoutToCreate = () => {
  return (
    <div className="main-div-create">
        <TopBar />
        <div className="hero-section-create">
          <h1> Seccion crear </h1>
        </div>
    </div>
  )
}

export default LayoutToCreate;