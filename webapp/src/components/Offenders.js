import React from "react";
import axios from "axios";
import { Card } from 'react-bootstrap';

// const url = "/api/image";
const url = "http://34.70.122.5:8100/api/image"

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
                            <Card style={{ width: '20rem', display: "inline-block" }}>
                                <Card.Img variant="top" src={value.cloud_url} />
                                <Card.Body>
                                    <Card.Title>Suspect</Card.Title>
                                    <Card.Text>
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