import React from "react";
import axios from "axios";
import { Card } from 'react-bootstrap';
// const url = "localhost:3001/image";
const url = "https://api.the-goat-at-hacksc2020.tech/image";

export default class Offenders extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            offenders: [],
        }
    }

    componentDidMount() {
        axios
            .get(url)
            .then(res => {
                this.setState({
                    offenders: res.data,
                })
                console.log(this.state.offenders);
            })
    }

    render() {
        return(
                <div style={{display: "flex", justifyContent: "space-around", flexWrap: "wrap"}}>
                    {this.state.offenders.map((value) => {
                        return (
<<<<<<< HEAD
                            <Card style={{ width: '18rem', display: "inline-block" }}>
                                <Card.Img variant="top" src={value.cloud_url} />
                                <Card.Body>
                                    <Card.Title>Suspect</Card.Title>
                                    <Card.Text>
=======
                            <tr style={{border: "1px solid black"}}>
                                <td style={{border: "1px solid black", width:"30%", textAlign: "center"}}>
                                    <img src={value.cloud_url}/>
                                </td>
                                <td style={{border: "1px solid black"}}>
>>>>>>> da31f17f68b7d3163ef3eb7989c2d376e0abd5ed
                                    {value.date}
                                    </Card.Text>
                                </Card.Body>
                                
                            </Card>
                        )
                    })}
                </div>
        )
    }
} 