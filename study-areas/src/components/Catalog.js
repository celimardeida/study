import {useEffect, useState} from 'react'
import Classroom from './Classroom'
import './Catalog.css'
import {Card} from "react-bootstrap"
import './Box.css'
import { json, useNavigate } from 'react-router-dom'
import React from 'react'


class Catalog extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        studyAreas: []
      };
    }
  
    componentDidMount() {
      fetch("http://rum-study-areas-backend.herokuapp.com/api/studyareas/?format=json")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              studyAreas: result.studyAreas
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, studyAreas } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
            
          <div>
            {studyAreas.map(studyAreas => (
                <Card style={{ width: '18rem' }} className="box">
                    <Card.Body>
                        <Card.Title>{studyAreas.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{studyAreas.building}</Card.Subtitle>
                        <Card.Text>
                            {studyAreas.features}
                        </Card.Text>
                        <Card.Link href="#">Reviews</Card.Link>
                    </Card.Body>
                </Card>
            ))}
          </div>
        );
      }
    }
  }


  export default Catalog;


// const Catalog = () => {
//     const [data, setData] = useState([]);
//     useEffect(() => {
//         fetch('http://rum-study-areas-backend.herokuapp.com/api/studyareas/')
//         .then(response => response.json())
//         .then(json => setData(json))
//     }, [])

//     const renderCard = (card, index) =>{
//         return(
        //     <Card style={{ width: '18rem' }} key={index} className="box">
        //     <Card.Body>
        //         <Card.Title>{data.name}</Card.Title>
        //         <Card.Subtitle className="mb-2 text-muted">{data.building}</Card.Subtitle>
        //          <Card.Text>
        //             {data.features}
        //         </Card.Text>
        //         <Card.Link href="#">Reviews</Card.Link>
        //     </Card.Body>
        // </Card>
//         )
//     }

//     return (
//         <div>
//             <div className="titleCatalog">Catalog</div>
//             <div>{data.name}</div>
//             <div className="grid">{data.map(renderCard)}</div>
//         </div>
        
//     )
// }

// export default Catalog
