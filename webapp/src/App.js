import React from "react";
import Offenders from "./components/Offenders";
import Yoda from "./static/yoda.png";
import Glasses from "./static/glasses.png"

const App = () => {
    return(
        <div >
            <header style={{textAlign: "center"}}>
                <img src={Glasses}/>
                <img src={Yoda} style={{position: "relative", left: "50px", top: "-20px", width: "1000px"}}/>
                <div style={{fontSize: "100px", paddingBottom: "0px ", position: "relative", top: "-100px", fontFamily: "Arial"}}>Guardian of USC</div>
            </header>
            <Offenders/>
        </div>
    )
}

export default App;