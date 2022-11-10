import {useEffect, useState} from 'react'
import Classroom from './Classroom'
import './Catalog.css'
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardLink } from 'mdb-react-ui-kit';
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
            <div className="titleCatalog">Catalog</div>
            {/* <img src={map} className="campus-map" />
            <img src={mapkey1} className="map-key" />
            <img src={mapkey2} className="map-key" />
            <img src={mapkey3} className="map-key" />
            <img src={mapkey4} className="map-key" /> */}
            <div className="classrooms">
                {data.map((classroom) => (
                    <Classroom code={classroom.code} building={classroom.building} image={classroom.img}/>
                ))}
            </div>
            <div className="availableClassrooms" >Available Classrooms</div>
            <div className="allClassrooms" >Stefani-203</div>
            <div className="allClassrooms" >Stefani-105 B (Centro de Cómputos)</div>
            <div className="allClassrooms" >Stefani-105 D (Centro de Cómputos)</div>
            <div className="allClassrooms" >II-222 (Peceras)</div>
            <div className="allClassrooms" >II-108 (Centro de Cómputos)</div>

            <MDBCard>
                <MDBCard>
                    <MDBCardBody>
                        <MDBCardTitle>Panel title</MDBCardTitle>
                        <MDBCardTitle subtitle className='mb-2 text-muted'>
                            Panel subtitle
                        </MDBCardTitle>
                        <MDBCardText>
                            Some quick example text to build on the panel title and make up the bulk of the panel's content.
                        </MDBCardText>
                        <MDBCardLink href='#'>Panel link</MDBCardLink>
                        <MDBCardLink href='#'>Another link</MDBCardLink>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCard>
        </div>

        
    )
}

export default Catalog
