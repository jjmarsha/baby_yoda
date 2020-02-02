import React, { useState } from "react";
import Offenders from "./components/Offenders";
import Yoda from "./static/yoda.png";
import Glasses from "./static/glasses.png"
import "./App.css"
import Snoop from "./static/thug.mp3";
import ReactAudioPlayer from 'react-audio-player';
import ReactPlayer from 'react-player';

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
                {/* <ReactAudioPlayer
                    src={Snoop}
                    autoPlay={true}
                    controls
                    /> */}
                <div style={{position: "absolute", opacity: 0}}>
                    <ReactPlayer url='https://www.youtube.com/watch?v=5QCaaAyz-yA' playing />
                </div>
                <header style={{textAlign: "center"}}>
                    <img src={Glasses} className={"glasses"}/>
                    {/* <audio style={{opacity: 0, width: "0px", height: "0px"}}  preload={true} src={Snoop}></audio> */}
                    <img src={Yoda} style={{position: "relative", left: "80px", top: "-20px", width: "1000px"}}/>
                    <div style={{fontSize: "100px", paddingBottom: "0px ", position: "relative", top: "-100px", fontFamily: "Arial"}}>Guardian of USC</div>
                </header>
                <Offenders/>
            </div>
        )
    }
}

export default App;