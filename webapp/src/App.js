import React, { useState } from "react";
import Offenders from "./components/Offenders";
import Yoda from "./static/yoda.png";
import Glasses from "./static/glasses.png"
import "./App.css"

const App = () => {
    const [loaded, setLoaded] = useState(false);

    

    return(
        <div >
            <button onClick={() => setLoaded(!loaded)}/>
            <header style={{textAlign: "center"}}>
                <img src={Glasses} className={"glasses " + (loaded ? "loaded" : "")}/>
                <img src={Yoda} style={{position: "relative", left: "80px", top: "-20px", width: "1000px"}}/>
                <div style={{fontSize: "100px", paddingBottom: "0px ", position: "relative", top: "-100px", fontFamily: "Arial"}}>Guardian of USC</div>
            </header>
            <Offenders/>
        </div>
    )
}

export default App;