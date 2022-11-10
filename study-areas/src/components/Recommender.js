import React, {useState, useEffect} from 'react'
import Classroom from './Classroom';
import {useNavigate} from 'react-router-dom'
import './Recommender.css'

const RecommendClassroom = () => {
    let navigate = useNavigate();

    const [location, setLocation] = useState('')
    const [timeRange, setTimeRange] = useState('')

    const locationHandler = (event) => {
        setLocation(event.target.value);
    }

    const timeHandler = (event) => {
        setTimeRange(event.target.value);
    }
    
    const requestHandler = (event) => {
        const newRequest = {
            location: location,
            timeRange: timeRange,
        }
        fetch('http://localhost:8080/api/catalog', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newRequest)
        }).then(navigate("../", ({replace: true})))
    }

    return (
        <div className="form">
            <div className="titleRecommend">Recommendations</div>
            <label>Location</label>
            <input onChange={locationHandler}></input>
            <label>Time Needed</label>
            <input onChange={timeHandler}></input>
            <button onClick={requestHandler}>Search</button>
        </div>
        
    ) 
}

export default RecommendClassroom
