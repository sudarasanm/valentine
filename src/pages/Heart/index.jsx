import './style.css';

import React from "react";
import '@lottiefiles/lottie-player';
import { withRouter } from "react-router-dom";

class Heart extends React.Component {

    constructor(props) {
        super(props);
        this.intervalId = null;
    }

    componentDidMount() {
        // Start emitting hearts every 1 second (adjust as needed)
        // this.intervalId = setInterval(this.createHeart, 1000);
        setTimeout(() => {
            this.props.history.push({
                pathname: '/heartanim'
            })
            window.location.reload()
        }, 5000);
    }

    componentWillUnmount() {
        // Clear the interval when the component is unmounted
        clearInterval(this.intervalId);
    }

    render() {
        return (
            <div className="anim-cont">
                <div className="bg-image-h">
                    <div className="bg-grey-1-h" />
                </div>
                <lottie-player
                    className="anim"
                    src="https://lottie.host/3a8f8963-d95c-495e-be98-4ad470b8329b/sdrEDMOZr5.json"
                    speed="0.5"
                    style={{ width: '100vw', height: '100vh' }}
                    loop
                    autoplay
                    direction="0.5"
                    mode="bounce"
                />
            </div>
        )
    }
}

export default withRouter(Heart);