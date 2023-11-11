import { useState } from 'react'
import MyCourses from "./components/myCourse.jsx";
import './app.css'
import AvailableCourses from "./components/availableCourses.jsx";
import NavBar from "./components/navBar.jsx";


function App() {

  return (
      <div>
      <NavBar/>
          <div className="page">
          <div className="nav-bar">
          </div>
          <div className="mis-cursos">
              <div className="title">
                  <h3 style={{marginLeft: '20px'}}> Cursos disponibles </h3>
              </div>
              <MyCourses/>
          </div>
          <div style={{height:'500px'}} className="cursos-disponibles">
              <div className="title">
                <h3 style={{marginLeft: '20px'}}> Cursos proximos </h3>
              <AvailableCourses/>
              </div>
          </div>
      </div>
      </div>
  )
}

export default App
