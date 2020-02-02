import React, { useState } from "react";
import Offenders from "./components/Offenders";
import Yoda from "./static/yoda.png";
import Glasses from "./static/glasses.png"
import "./App.css"

class  App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
        };
    }

    componentDidMount() {
        this.setState({
            loaded: true,
        })
    }
    
    render() {
        return(
            <div >
                <header style={{textAlign: "center"}}>
                    <img src={Glasses} className={"glasses"}/>
                    <img src={Yoda} style={{position: "relative", left: "80px", top: "-20px", width: "1000px"}}/>
                    <div style={{fontSize: "100px", paddingBottom: "0px ", position: "relative", top: "-100px", fontFamily: "Arial"}}>Guardian of USC</div>
                </header>
                <Offenders/>
            </div>
        )
    }
}

export default App;