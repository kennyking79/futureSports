import React from "react";
import "../styles.scss"
import CyberSlider from "../CyberSlider";
import ErrorBoundary from "../ErrorBoundary";
function Home() {
    return (
        <ErrorBoundary>
        <div>
            <h5>HOME</h5>
            <CyberSlider/>
        </div>
        </ErrorBoundary>
            
            
        
    )
}

export default Home