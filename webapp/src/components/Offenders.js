import React from "react";
import axios from "axios";

// const url = "localhost:3001/image";
const url = "http://e32ece53.ngrok.io/image";

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
            <div>
                <table style={{width: "100%"}}>
                    {this.state.offenders.map((value) => {
                        return (
                            <tr style={{border: "1px solid black"}}>
                                <td style={{border: "1px solid black", width:"30%", textAlign: "center"}}>
                                    {console.log(value.cloud_url)}<img src={value.cloud_url}/>
                                </td>
                                <td style={{border: "1px solid black"}}>
                                    {value.date}
                                </td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        )
    }
} 