import {useEffect, useState} from 'react'
import Classroom from './Classroom'
import './Catalog.css'
import {Card} from "react-bootstrap"
import './Box.css'
import { json, useNavigate } from 'react-router-dom'
import React from 'react'


const Catalog = () => {
    // Study Areas 
  const database = [
    {
      name: "Room 1",
      room_id: "S-113",
      building: "Stefani",
      features: "air condioner"
    },
    {
      name: "Room 2",
      room_id: "S-105",
      building: "Stefani",
      features: "computers"
    },
    {
        name: "Room 3",
        room_id: "S-204",
        building: "Stefani",
        features: "air condioner, computers"
      },
      {
        name: "Room 4",
        room_id: "S-221",
        building: "Stefani",
        features: "air condioner, computers"
      },
      {
        name: "Room 5",
        room_id: "S-115",
        building: "Stefani",
        features: "air condioner, computers"
      },
      {
        name: "Room 6",
        room_id: "S-121",
        building: "Stefani",
        features: "air condioner, computers"
      },
    {
        name: "Room 7",
        room_id: "II-219",
        building: "Industrial",
        features: "air condioner, desks"
    }
  ];

    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('http://rum-study-areas-backend.herokuapp.com/api/studyareas/')
    //     .then(response => response.json())
    //     .then(json => setData(json))
    // }, [])

    const renderCard = (card, index) =>{
        return(
            <Card style={{ width: '18rem' }} key={index} className="box">
            <Card.Body>
                <Card.Title>{card.name} {card.room_id}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{card.building}</Card.Subtitle>
                 <Card.Text>
                    {card.features}
                </Card.Text>
                <Card.Link href="#">Reviews</Card.Link>
            </Card.Body>
        </Card>
        )
    }

    return (
        <div>
            <div className="titleCatalog">Catalog</div>
            <div className="grid">{database.map(renderCard)}</div>
        </div>
        
    )
}

export default Catalog



// class Catalog extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         error: null,
//         isLoaded: false,
//         studyAreas: []
//       };
//     }
  
//     componentDidMount() {
//       fetch("http://rum-study-areas-backend.herokuapp.com/api/studyareas/?format=json")
//         .then(res => res.json())
//         .then(
//           (result) => {
//             this.setState({
//               isLoaded: true,
//               studyAreas: result.studyAreas
//             });
//           },
//           // Note: it's important to handle errors here
//           // instead of a catch() block so that we don't swallow
//           // exceptions from actual bugs in components.
//           (error) => {
//             this.setState({
//               isLoaded: true,
//               error
//             });
//           }
//         )
//     }
  
//     render() {
//       const { error, isLoaded, studyAreas } = this.state;
//       if (error) {
//         return <div>Error: {error.message}</div>;
//       } else if (!isLoaded) {
//         return <div>Loading...</div>;
//       } else {
//         return (
            
//           <div>
//             {studyAreas.map(studyAreas => (
//                 <Card style={{ width: '18rem' }} className="box">
//                     <Card.Body>
//                         <Card.Title>{studyAreas.name}</Card.Title>
//                         <Card.Subtitle className="mb-2 text-muted">{studyAreas.building}</Card.Subtitle>
//                         <Card.Text>
//                             {studyAreas.features}
//                         </Card.Text>
//                         <Card.Link href="#">Reviews</Card.Link>
//                     </Card.Body>
//                 </Card>
//             ))}
//           </div>
//         );
//       }
//     }
//   }


//   export default Catalog;
