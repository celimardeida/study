import React from 'react'
import './Classroom.css'

const Classroom = ({code, building, image}) => {
    return (
        <div className="classroom">
            <img src={image}></img>
            <p className="classroomCode">{code}</p>
            <p className="classroomBuilding">{building}</p>
        </div>
    )
}

export default Classroom

