import './style.css';

import React from "react";
import { withRouter } from "react-router-dom";

class HeartAnimation extends React.Component {

    constructor(props) {
        super(props);
        this.intervalId = null;
    }

    componentDidMount() {
        // Start emitting hearts every 1 second (adjust as needed)
        // this.intervalId = setInterval(this.createHeart, 1000);
        // setTimeout(() => {
        //     this.props.history.push({
        //         pathname: '/dashboard'
        //     })
        //     window.location.reload()
        // }, 5000);
    }

    componentWillUnmount() {
        // Clear the interval when the component is unmounted
        clearInterval(this.intervalId);
    }

   

    buttonClick = () => {
        this.props.history.push({
            pathname: '/dashboard'
        })
        window.location.reload()
    }

    render() {
        return (
            <>
                <div className="container-body">
                    <div class="container">
                        <div class="valentines">
                            <div class="envelope"></div>
                            <div class="front"></div>
                            <div class="card">
                                <div class="text">Happy Valentine </div>
                                <div class="texts">Mahi 🤎 </div>
                                <div class="heart">
                                </div>

                                <div class="hearts">
                                    <div class="one"></div>
                                    <div class="two"></div>
                                    <div class="three"></div>
                                    <div class="four"></div>
                                    <div class="five"></div>
                                </div>
                            </div>
                        </div>

                        <div class="shadow"></div>

                        <button className='pulse' onClick={() => { this.buttonClick() }}>
                            You Asked me right🤎
                        </button>
                    </div>
                </div>
            </>

        )
    }
}

export default withRouter(HeartAnimation);