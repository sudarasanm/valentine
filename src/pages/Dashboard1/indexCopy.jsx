import React from 'react';
import './style.css';
import { Carousel, Card } from 'antd';
import first from '../../video/firstday/1.jpg'
import firstday from '../../video/firstday/firstday.jpg'
import Baby from '../../video/firstday/baby.jpg'
import movie from '../../video/movie/1.jpg'
import saree from '../../video/saree/1.jpg'
import dress from '../../video/dress/1.jpg'
import college from '../../video/college/1.jpg'
import hair from '../../video/hair/1.jpg'
import sree from '../../video/sri/1.jpg'
import fam from '../../video/fam/1.jpg'
import aswin from '../../video/fam/2.jpg'
import chennai from '../../video/chennai/1.jpg'
import aadhar from '../../video/aadhar.jpeg'
import eye from '../../video/eye.jpg'
import vekkam from '../../video/vekkam.jpg'
import zoo from '../../video/zoo.jpg'
import shorthair from '../../video/shorthair.jpg'
import songphoto from '../../video/songphoto.jpg'




const contentStyle = {
    height: '100vh',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: 'transparent',
};
class Dashboard1 extends React.Component {



    constructor(props) {
        super(props);
        this.state = {
            dotPosition: "top"
        }
    }

    getCardWithContent = (card) => {
        return (
            <Card
                className="current-card-1"
                cover={
                    <div style={{ overflow: "hidden", height: "100%" }}>
                        <img
                            alt="example"
                            style={{ height: "100%", width: '100%' }}
                            src={card.src}
                        />
                    </div>
                }
            >
                <div id="hearts-alpaca" class="hearts">
                    <div class="heart-11"></div>
                    <div class="heart-11"></div>
                    <div class="heart-11"></div>
                    <div class="heart-11"></div>
                    <div class="heart-11"></div>
                    <div class="heart-11"></div>
                    <div class="heart-11"></div>
                    <div class="heart-11"></div>
                </div>
                {card.content}
            </Card>
        )
    }

    getCards = () => {
        let cardData = [
            {
                name: "card0",
                // src: "https://drive.google.com/file/d/11x2_HCR6el6QPKdY9GDNpwcz-7nBoxFY/view?usp=drive_link",
                src: songphoto,
                content: "The COVID-19 pandemic ld to numerous ad campaigns that underscore the value of brevity. Nike handled it this way: “If you ever dreamed of playing for millions around the world, now is your chance. Play inside, play for the world.”                "
            },
            {
                name: "card1",
                // src: "https://drive.google.com/file/d/11x2_HCR6el6QPKdY9GDNpwcz-7nBoxFY/view?usp=drive_link",
                src: firstday,
                content: "The COVID-19 pandemic ld to numerous ad campaigns that underscore the value of brevity. Nike handled it this way: “If you ever dreamed of playing for millions around the world, now is your chance. Play inside, play for the world.”                "
            },
            {
                name: "card2",
                content: "In 2019, Spotify gained notice with its Spotify Everywhere meme-themed campaign. For example, on one billboard, the left side read: “Me: It’s Okay; the breakup was mutual.” On the right side, it read: “Also Me: Sad Indie” (complete with the app’s music search imagery). The simple, creatively delivered message went deep into a full range of emotions familiar to countless people",
                src: first
            },
            {
                name: "card3",
                content: "In 2019, Spotify gained notice with its Spotify Everywhere meme-themed campaign. For example, on one billboard, the left side read: “Me: It’s Okay; the breakup was mutual.” On the right side, it read: “Also Me: Sad Indie” (complete with the app’s music search imagery). The simple, creatively delivered message went deep into a full range of emotions familiar to countless people",
                src: Baby
            },
            {
                name: "card4",
                content: "In 2019, Spotify gained notice with its Spotify Everywhere meme-themed campaign. For example, on one billboard, the left side read: “Me: It’s Okay; the breakup was mutual.” On the right side, it read: “Also Me: Sad Indie” (complete with the app’s music search imagery). The simple, creatively delivered message went deep into a full range of emotions familiar to countless people",
                src: movie
            },
            {
                name: "card5",
                src:  saree ,
                content: "Orange butterfly Oriental striped tiger or Danaus genutia, hanging on a double yellow Cosmos flower with blurred yellow brown background"
            },
            {
                name: "card6",
                src: dress,
                content: "The COVID-19 pandemic led to numerous ad campaigns that underscore the value of brevity. Nike handled it this way: “If you ever dreamed of playing for millions around the world, now is your chance. Play inside, play for the world.”                "
            },
            {
                name: "card7",
                content: "In 2019, Spotify gained notice with its Spotify Everywhere meme-themed campaign. For example, on one billboard, the left side read: “Me: It’s Okay; the breakup was mutual.” On the right side, it read: “Also Me: Sad Indie” (complete with the app’s music search imagery). The simple, creatively delivered message went deep into a full range of emotions familiar to countless people",
                src: college
            },
            {
                name: "card8",
                content: "In 2019, Spotify gained notice with its Spotify Everywhere meme-themed campaign. For example, on one billboard, the left side read: “Me: It’s Okay; the breakup was mutual.” On the right side, it read: “Also Me: Sad Indie” (complete with the app’s music search imagery). The simple, creatively delivered message went deep into a full range of emotions familiar to countless people",
                src: hair
            },
            {
                name: "card9",
                content: "In 2019, Spotify gained notice with its Spotify Everywhere meme-themed campaign. For example, on one billboard, the left side read: “Me: It’s Okay; the breakup was mutual.” On the right side, it read: “Also Me: Sad Indie” (complete with the app’s music search imagery). The simple, creatively delivered message went deep into a full range of emotions familiar to countless people",
                src: sree
            },
            {
                name: "card10",
                src: fam,
                content: "Orange butterfly Oriental striped tiger or Danaus genutia, hanging on a double yellow Cosmos flower with blurred yellow brown background"
            },
            {
                name: "card11",
                src: aswin,
                content: "Orange butterfly Oriental striped tiger or Danaus genutia, hanging on a double yellow Cosmos flower with blurred yellow brown background"
            },
            {
                name: "card13",
                src: chennai,
                content: "Orange butterfly Oriental striped tiger or Danaus genutia, hanging on a double yellow Cosmos flower with blurred yellow brown background"
            },
            {
                name: "card14",
                src: aadhar,
                content: "Orange butterfly Oriental striped tiger or Danaus genutia, hanging on a double yellow Cosmos flower with blurred yellow brown background"
            },
            {
                name: "card15",
                src: eye,
                content: "Orange butterfly Oriental striped tiger or Danaus genutia, hanging on a double yellow Cosmos flower with blurred yellow brown background"
            },
            {
                name: "card16",
                src: vekkam,
                content: "Orange butterfly Oriental striped tiger or Danaus genutia, hanging on a double yellow Cosmos flower with blurred yellow brown background"
            },
            {
                name: "card17",
                src: shorthair,
                content: "Orange butterfly Oriental striped tiger or Danaus genutia, hanging on a double yellow Cosmos flower with blurred yellow brown background"
            },
            {
                name: "card18",
                src: zoo,
                content: "Orange butterfly Oriental striped tiger or Danaus genutia, hanging on a double yellow Cosmos flower with blurred yellow brown background"
            },
            {
                name: "card19",
                src: "",
                content: "Orange butterfly Oriental striped tiger or Danaus genutia, hanging on a double yellow Cosmos flower with blurred yellow brown background"
            },
            {
                name: "card20",
                src: "",
                content: "Orange butterfly Oriental striped tiger or Danaus genutia, hanging on a double yellow Cosmos flower with blurred yellow brown background"
            },
            {
                name: "card21",
                src: "",
                content: "Orange butterfly Oriental striped tiger or Danaus genutia, hanging on a double yellow Cosmos flower with blurred yellow brown background"
            },
            {
                name: "card22",
                src: "",
                content: "Orange butterfly Oriental striped tiger or Danaus genutia, hanging on a double yellow Cosmos flower with blurred yellow brown background"
            },
            {
                name: "card23",
                src: "",
                content: "Orange butterfly Oriental striped tiger or Danaus genutia, hanging on a double yellow Cosmos flower with blurred yellow brown background"
            },
            {
                name: "card24",
                src: "",
                content: "Orange butterfly Oriental striped tiger or Danaus genutia, hanging on a double yellow Cosmos flower with blurred yellow brown background"
            },
            {
                name: "card25",
                src: "",
                content: "Orange butterfly Oriental striped tiger or Danaus genutia, hanging on a double yellow Cosmos flower with blurred yellow brown background"
            },
            {
                name: "card26",
                src: "",
                content: "Orange butterfly Oriental striped tiger or Danaus genutia, hanging on a double yellow Cosmos flower with blurred yellow brown background"
            },
            {
                name: "card27",
                src: "",
                content: "Orange butterfly Oriental striped tiger or Danaus genutia, hanging on a double yellow Cosmos flower with blurred yellow brown background"
            },
            {
                name: "card28",
                src: "",
                content: "Orange butterfly Oriental striped tiger or Danaus genutia, hanging on a double yellow Cosmos flower with blurred yellow brown background"
            },
            {
                name: "card29",
                src: "",
                content: "Orange butterfly Oriental striped tiger or Danaus genutia, hanging on a double yellow Cosmos flower with blurred yellow brown background"
            },
            {
                name: "card30",
                src: "",
                content: "Orange butterfly Oriental striped tiger or Danaus genutia, hanging on a double yellow Cosmos flower with blurred yellow brown background"
            },
            {
                name: "card31",
                src: "",
                content: "Orange butterfly Oriental striped tiger or Danaus genutia, hanging on a double yellow Cosmos flower with blurred yellow brown background"
            },
            {
                name: "card32",
                src: "",
                content: "Orange butterfly Oriental striped tiger or Danaus genutia, hanging on a double yellow Cosmos flower with blurred yellow brown background"
            },
            {
                name: "card33",
                src: "",
                content: "Orange butterfly Oriental striped tiger or Danaus genutia, hanging on a double yellow Cosmos flower with blurred yellow brown background"
            },
            {
                name: "card34",
                src: "",
                content: "Orange butterfly Oriental striped tiger or Danaus genutia, hanging on a double yellow Cosmos flower with blurred yellow brown background"
            },
            {
                name: "card35",
                src: "",
                content: "Orange butterfly Oriental striped tiger or Danaus genutia, hanging on a double yellow Cosmos flower with blurred yellow brown background"
            },
            {
                name: "card36",
                src: "",
                content: "Orange butterfly Oriental striped tiger or Danaus genutia, hanging on a double yellow Cosmos flower with blurred yellow brown background"
            },
            {
                name: "card37",
                src: "",
                content: "Orange butterfly Oriental striped tiger or Danaus genutia, hanging on a double yellow Cosmos flower with blurred yellow brown background"
            },
            {
                name: "card38",
                src: "",
                content: "Orange butterfly Oriental striped tiger or Danaus genutia, hanging on a double yellow Cosmos flower with blurred yellow brown background"
            },
            {
                name: "card39",
                src: "",
                content: "Orange butterfly Oriental striped tiger or Danaus genutia, hanging on a double yellow Cosmos flower with blurred yellow brown background"
            },
            {
                name: "card40",
                src: "",
                content: "Orange butterfly Oriental striped tiger or Danaus genutia, hanging on a double yellow Cosmos flower with blurred yellow brown background"
            },
            {
                name: "card41",
                src: "",
                content: "Orange butterfly Oriental striped tiger or Danaus genutia, hanging on a double yellow Cosmos flower with blurred yellow brown background"
            },
            {
                name: "card42",
                src: "",
                content: "Orange butterfly Oriental striped tiger or Danaus genutia, hanging on a double yellow Cosmos flower with blurred yellow brown background"
            },
            {
                name: "card43",
                src: "",
                content: "Orange butterfly Oriental striped tiger or Danaus genutia, hanging on a double yellow Cosmos flower with blurred yellow brown background"
            },
            {
                name: "card44",
                src: "",
                content: "Orange butterfly Oriental striped tiger or Danaus genutia, hanging on a double yellow Cosmos flower with blurred yellow brown background"
            },
            {
                name: "card45",
                src: "",
                content: "Orange butterfly Oriental striped tiger or Danaus genutia, hanging on a double yellow Cosmos flower with blurred yellow brown background"
            },
            {
                name: "card46",
                src: "",
                content: "Orange butterfly Oriental striped tiger or Danaus genutia, hanging on a double yellow Cosmos flower with blurred yellow brown background"
            },
            {
                name: "card47",
                src: "",
                content: "Orange butterfly Oriental striped tiger or Danaus genutia, hanging on a double yellow Cosmos flower with blurred yellow brown background"
            },
            {
                name: "card48",
                src: "",
                content: "Orange butterfly Oriental striped tiger or Danaus genutia, hanging on a double yellow Cosmos flower with blurred yellow brown background"
            },
            {
                name: "card49",
                src: "",
                content: "Orange butterfly Oriental striped tiger or Danaus genutia, hanging on a double yellow Cosmos flower with blurred yellow brown background"
            },
            {
                name: "card50",
                src: "",
                content: "Orange butterfly Oriental striped tiger or Danaus genutia, hanging on a double yellow Cosmos flower with blurred yellow brown background"
            },
            {
                name: "card51",
                src: "",
                content: "Orange butterfly Oriental striped tiger or Danaus genutia, hanging on a double yellow Cosmos flower with blurred yellow brown background"
            },
            {
                name: "card52",
                src: "",
                content: "Orange butterfly Oriental striped tiger or Danaus genutia, hanging on a double yellow Cosmos flower with blurred yellow brown background"
            },
            {
                name: "card53",
                src: "",
                content: "Orange butterfly Oriental striped tiger or Danaus genutia, hanging on a double yellow Cosmos flower with blurred yellow brown background"
            },
            {
                name: "card54",
                src: "",
                content: "Orange butterfly Oriental striped tiger or Danaus genutia, hanging on a double yellow Cosmos flower with blurred yellow brown background"
            },
            {
                name: "card55",
                src: "",
                content: "Orange butterfly Oriental striped tiger or Danaus genutia, hanging on a double yellow Cosmos flower with blurred yellow brown background"
            },
            {
                name: "card56",
                src: "",
                content: "Orange butterfly Oriental striped tiger or Danaus genutia, hanging on a double yellow Cosmos flower with blurred yellow brown background"
            },
            {
                name: "card57",
                src: "",
                content: "Orange butterfly Oriental striped tiger or Danaus genutia, hanging on a double yellow Cosmos flower with blurred yellow brown background"
            },
            {
                name: "card58",
                src: "",
                content: "Orange butterfly Oriental striped tiger or Danaus genutia, hanging on a double yellow Cosmos flower with blurred yellow brown background"
            },
            {
                name: "card59",
                src: "",
                content: "Orange butterfly Oriental striped tiger or Danaus genutia, hanging on a double yellow Cosmos flower with blurred yellow brown background"
            },
            {
                name: "card60",
                src: "",
                content: "Orange butterfly Oriental striped tiger or Danaus genutia, hanging on a double yellow Cosmos flower with blurred yellow brown background"
            },
            {
                name: "card61",
                src: "",
                content: "Orange butterfly Oriental striped tiger or Danaus genutia, hanging on a double yellow Cosmos flower with blurred yellow brown background"
            },
            {
                name: "card62",
                src: "",
                content: "Orange butterfly Oriental striped tiger or Danaus genutia, hanging on a double yellow Cosmos flower with blurred yellow brown background"
            },
            {
                name: "card63",
                src: "",
                content: "Orange butterfly Oriental striped tiger or Danaus genutia, hanging on a double yellow Cosmos flower with blurred yellow brown background"
            }
           

        ]
        let finalData = [];
        for (let card of cardData) {
            finalData.push(
                <div>
                    <div className='contentStyle'>
                        {this.getCardWithContent(card)}
                    </div>
                </div>
            )
        }
        return finalData;
    }

    render() {
        return (
            <>

                <Carousel
                    dotPosition={'right'}
                    // autoplay={true}
                    fade={true}
                    easing={'ease-in-out'}
                    effect>
                    {this.getCards()}
                </Carousel>
            </>
        );
    }


}

export default Dashboard1;