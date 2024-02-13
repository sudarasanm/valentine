import React from "react";
import './style.css';
import { Card } from 'antd';

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentCardName: ""
        }
    }

    cardClick = (cardName) => {
        this.setState({ currentCardName: cardName })
    }


    getCardWithContent = (card) => {
        return (
            <Card
                className="current-card"
                cover={
                    <div style={{ overflow: "hidden", height: "100%" }}>
                        <img
                            alt="example"
                            style={{ height: "100%" }}
                            src={card.src}
                        />
                    </div>
                }
            >
                {card.content}
            </Card>
        )
    }

    getCards = () => {
        let cardData = [
            {
                name: "card1",
                src: "../../../video/firstday/1.jpg",
                content: "The COVID-19 pandemic led to numerous ad campaigns that underscore the value of brevity. Nike handled it this way: “If you ever dreamed of playing for millions around the world, now is your chance. Play inside, play for the world.”                "
            },
            {
                name: "card2",
                content: "In 2019, Spotify gained notice with its Spotify Everywhere meme-themed campaign. For example, on one billboard, the left side read: “Me: It’s Okay; the breakup was mutual.” On the right side, it read: “Also Me: Sad Indie” (complete with the app’s music search imagery). The simple, creatively delivered message went deep into a full range of emotions familiar to countless people",
                src: "data:image/jpeg;base64,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"
            },
            {
                name: "card3",
                content: "--",
                src: "data:image/jpeg;base64,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"
            },
            {
                name: "card4",
                content: "--",
                src: "data:image/jpeg;base64,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"
            },
            {
                name: "card5",
                src: "https://media.istockphoto.com/id/1299174509/photo/orange-butterfly-oriental-striped-tiger-on-yellow-cosmos-flower-with-blurred-yellow-background.jpg?s=2048x2048&w=is&k=20&c=upwDNn9Nl0J-xOxLHjHE7tGTz983ut-hDyoCf6Rvt8U=",
                content: "Orange butterfly Oriental striped tiger or Danaus genutia, hanging on a double yellow Cosmos flower with blurred yellow brown background"
            }
        ]
        let finalData = [];
        for (let card of cardData) {
            if (card.name === this.state.currentCardName) {
                finalData.push(this.getCardWithContent(card))
            } else {
                finalData.push(
                    <Card
                        hoverable
                        className="card-layout-style"
                        onClick={(e) => { this.cardClick(card.name) }}
                        cover={
                            <div style={{ overflow: "hidden", height: "100%" }}>
                                <img
                                    alt="example"
                                    style={{ height: "100%" }}
                                    src={card.src}
                                />
                            </div>
                        }

                    >
                    </Card>
                )
            }
        }
        return finalData;
    }
    render() {

        return (
            <div className="align-layout">
                {this.getCards()}
            </div>
        )
    }
}

export default Dashboard;