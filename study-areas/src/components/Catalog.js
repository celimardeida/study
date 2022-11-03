import {useEffect, useState} from 'react'
import Classroom from './Classroom'
import './Catalog.css'
import map from './uprm_map.png';
import mapkey1 from './mapkey1.png';
import mapkey2 from './mapkey2.png';
import mapkey3 from './mapkey3.png';
import mapkey4 from './mapkey4.png';


const Catalog = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8080/api/classrooms')
        .then(response => response.json())
        .then(json => setData(json))
    }, [])
    return (
        <div>
            <h1 className="title">Catalog</h1>
            <img src={map} className="campus-map" />
            <img src={mapkey1} className="map-key" />
            <img src={mapkey2} className="map-key" />
            <img src={mapkey3} className="map-key" />
            <img src={mapkey4} className="map-key" />
            <div className="classrooms">
                {data.map((classroom) => (
                    <Classroom code={classroom.code} building={classroom.building} image={classroom.img}/>
                ))}
            </div>
        </div>
    )
}

export default Catalog
