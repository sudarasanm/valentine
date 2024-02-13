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
import sisters from '../../video/fam/3.jpg'
import chennai from '../../video/chennai/1.jpg'
import aadhar from '../../video/aadhar.jpeg'
import eye from '../../video/eye.jpg'
import vekkam from '../../video/vekkam.jpg'
import zoo from '../../video/zoo.jpg'
import shorthair from '../../video/shorthair.jpg'
import songphoto from '../../video/songphoto.jpg'
import firstdrawing from '../../video/firstdrawing.jpg'
import seconddrawing from '../../video/seconddrawing.jpeg'
import Gost from '../../video/Gost.jpg'
import shirt from '../../video/shirt.jpg'
import beachphoto from '../../video/beachphoto.jpg'
import birthdaypic from '../../video/birthdaypic.jpg'
import traincried from '../../video/traincried.jpg'
import Busperson from '../../video/Busperson.jpg'
import newwatch from '../../video/newwatch.jpg'
import newPhone from '../../video/newPhone.jpg'
import dianaakka from '../../video/dianaakka.jpg'
import mc from '../../video/mc.jpg'
import glasscoim from '../../video/glasscoim.jpg'
import achuteja from '../../video/achuteja.jpg'
import banfam from '../../video/banfam.jpg'
import kodikanal from '../../video/kodikanal.jpg'
import heartmahi from '../../video/heartmahi.jpg'
import ammamahisleep from '../../video/ammamahisleep.jpg'
import brother from '../../video/brother.jpg'
import chennaifirst from '../../video/chennaifirst.jpg'
import asrama from '../../video/asrama.jpg'
import taj from '../../video/taj.jpg'
import ammamahifav from '../../video/ammamahifav.jpg'
import advanmahi from '../../video/advanmahi.jpg'
import framehasmyfeart from '../../video/framehasmyfeart.jpg'
import tripnandhihills from '../../video/tripnandhihills.jpg'
import chennaizoo from '../../video/chennaizoo.jpg'
import photograph from '../../video/photograph.jpg'
import bangalorefamphoto from '../../video/bangalorefamphoto.jpg'
import beersubu from '../../video/beersubu.jpg'
import comingtoban from '../../video/comingtoban.jpg'
import palani from '../../video/palani.jpg'
import blackthunder from '../../video/blackthunder.jpg'
import collegehasheart from '../../video/collegehasheart.jpg'
import akkafriends from '../../video/akkafriends.jpg'
import meandyou from '../../video/meandyou.jpg'
import mahiqueen from '../../video/mahiqueen.jpg'


import React from 'react';
import './style.css';
import { Carousel, Card } from 'antd';
import { LeftOutlined , RightOutlined } from '@ant-design/icons';
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
                            style={{ height: "100%" }}
                            src={card.src}
                        />
                    </div>
                }
            >
                <div className='bg-image-dashboard'></div>
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
                src: songphoto,
                content: "unaku thariyum nu thariyala d intha photo voda oru song story vachen nee athuku en kitta ketukitta erupaa yethuku intha song potanu but na venutha poten paiyaa movie la eruthu yethanale intha matram song"
            },
            {
                name: "card1",
                src: firstday,
                content: `This photo has my heart because the photo that have taken for the first time and both are in same color dress antha apa ma mind la en think pana solluren seriya "thodama niluda susa apadinu "`
            },
            {
                name: "card2",
                content: "Intha nalu unaku mind la illa nu vachikoo savadichuduven d una epadiyum erukum  yes, this is the first ever photo we have took after we commited anga pogum pothu mall open na illa so namba veliya ookanthu photos yeduthom and ipa namba achu va paaka ponomula apakuda yenku atha mind ku vanthuchu",
                src: first
            },
            {
                name: "card3",
                content: "Inga paru da neeyum nanu ora mari tha erukom actually yenku intha photo va romba romba pudichueruku unaku?",
                src: Baby
            },
            {
                name: "card4",
                content: "Namba athiga ponathu movie tha but ipa athalam illa epa paru movie coimbatore pona movie suma erutha movie, movie movie movie",
                src: movie
            },
            {
                name: "card5",
                src:  saree ,
                content: "En kunjii kutty nee saree la aalaga tha d eruka nee sonna mari na unaku neriya saree vagi tharen d seriyaa but epayum traditional podatha okay vaaa"
            },
            {
                name: "card6",
                src: dress,
                content: "Intha ponnugala ipadi tha pa neriya dress vachikittu keta dress sa illgurathu na un life la vanthu unaku neriya dress nee yeduthutaa but poda ma vachu erukaa nee  bloody nonsense, enatha sonnalum sollinalum nee dress yeduka tha poraa aprom yethuku solliketu vedu"
            },
            {
                name: "card7",
                content: "Intha un college memorize neriya photo vaika mudiyala but improtant photos vachu erukan paathu enjoy panu",
                src: college
            },
            {
                name: "card8",
                content: "Intha photo va paathu na sock aaiten d ithula un hair epadi eruku paaaaaa semayaa eruku itha mari maitain panu d yenku call pani sollu seriyaa epadi intha mari vacha nu plssssssssssssssssssssssssssssssssssss",
                src: hair
            },
            {
                name: "card9",
                content: "Nee evagala miss panuriyaa nu thariyala but yenku ulla ipa varikum ungala na tha pirichitanooo thonuthu mathabadi onuilla da but na evagala nee miss panatha mari na una paathukuven",
                src: sree
            },
            {
                name: "card10",
                src: fam,
                content: "see ORU Family, appa subramani amma nirmala and Thangachi janu"
            },
            {
                name: "card11",
                src: aswin,
                content: "evan tha en target en thariyum ma nee evana konjiu ra mari nee en konja matta anthu enaku oru feel atha mari possessive means nee yenkitta eruka mari vera yaru kitta erukiyoo athu peru tha possessive purijikooo"
            },
            {
                name: "card12",
                src: sisters,
                content: "Na apa apa sollura mari tha double aa kedicha nala erukum just jocking no one can replace you da kunjiii"
            },
            {
                name: "card13",
                src: chennai,
                content: "Intha nala nee nanu teja yarum maraka mattom d ellarum night life suthuvaga but namba night night suthi2 eruthom antha soliganlur walk aprom antha ECR walk anth vandi la ride railwasttion la poi thugunathu aprom na aauthathu ellam en kanu kula ya eruku d marubadiyum apadi erukunu thonuthu but walk bathilaa car illa na bike laa"
            },
            {
                name: "card14",
                src: aadhar,
                content: "Athu en da aadhar card Voter ID kuda en aalu aalaga erupada"
            },
            {
                name: "card15",
                src: eye,
                content: "un kanu erukaa kanu athu vera level intha mari yaru d unaku idea kudukura photo yeduka but nala eruku un eye mattum yedutha antha pink color shall avoid pani erukalam"
            },
            {
                name: "card16",
                src: vekkam,
                content: "Pothi pothi valatha pulla Mahi Athanala innum vekkam vittu pogala"
            },
            {
                name: "card17",
                src: shorthair,
                content: "Aiyooo itha photo va paathu sethuten d sooobaaa mudiyala d en karumo d ithu"
            },
            {
                name: "card18",
                src: zoo,
                content: "Namba love pana aaramichu athigama ora yedathuku tha poierukom Zoo Zoo Zoo crt tha na"
            },
            {
                name: "card19",
                src: firstdrawing,
                content: "unaku nagalam kudutha first Drawing athu ipa enga eruku sollu"
            },
            {
                name: "card20",
                src: seconddrawing,
                content: "Intha drawing na solli yenkaa na gift ta kuduthu kitten nee athayum room la mata vedalaa but nee mata vedatha sonna reason crt tha"
            },
            {
                name: "card21",
                src: Gost,
                content: "paahhhhhh!!! yaruda indha ponnu pei mathiri eruku"
            },
            {
                name: "card22",
                src: shirt,
                content: "Intha shirt yedukama erukum bothu tha na think pana namaku pudichathu na namba yedukanu vera yaru sonnathu pana kudathu nu antha shirt miss paniten"
            },
            {
                name: "card23",
                src: beachphoto,
                content: `Intha photo yedukurathuku kulla na pataaa padu erukaa samiii mudiyala nee ena sonna "Karumantharm pudicha love" past is past `
            },
            {
                name: "card24",
                src: birthdaypic,
                content: "yenaku ella year layum romba romba pudicha day intha day tha because our first year anniversary and you birthday"
            },
            {
                name: "card25",
                src: traincried,
                content: "intha day apa nee aautha paru oru aalu oru bucket eruthu erutha kuda full aai erukum but nalatha eruthuchuu"
            },
            {
                name: "card26",
                src: Busperson,
                content: "Inga pathiya nee bus la pudicha frienduu avaga pathi yenku thariyathu soo nee memorise sa recollect panikoo"
            },
            {
                name: "card27",
                src: dianaakka,
                content: "unoda favourite akka in chennai"
            },
            {
                name: "card28",
                src: newwatch,
                content: "Nee enaku vagikudutha Puthu Watch"
            },
            { 
                name: "card29",
                src: newPhone,
                content: "Nee enaku vagikudutha Puthu first Iphone but sorry da kuniii na atha tholachu eruka kudathu but na thariyama tholachiten d romba romba sorry da aana ithuku aprom na yethayum tholaika matten da kunjiii"
            },
            {
                name: "card30",
                src: mc,
                content: "Na first time pona McDonalds athum unkuda"
            },
            {
                name: "card31",
                src: glasscoim,
                content: "En d pose ithu sollu kanadiyum un muujum inimelu intha mari panatha seriyaaa"
            },
            {
                name: "card32",
                src: achuteja,
                content: "Nala erukum d unkuda erutha atha mari evaga kuda eruthalum nala erukum namaku oru Entertainment ta erukum but konjam kadupu aagum"
            },
            {
                name: "card33",
                src: banfam,
                content: "HaHaHaHaHaHa namba famali"
            },
            {
                name: "card34",
                src: kodikanal,
                content: "Aana na kodikanal trip mattum maraka matten d because na una hospital ku kooti2 ponathu aprom car katipudichu2 ponathu room la eruthathu ella nala eruthuchu its was nice trip"
            },
            {
                name: "card35",
                src: heartmahi,
                content: "Nee yenku itha first send pana apa seri summa send panura think pana but nee solli tha enaku thariyum athu heart shape al eruka pond nu jorry"
            },
            {
                name: "card36",
                src: ammamahisleep,
                content: "En rendu devathaikalum nandraga oorakigurathu"
            },
            {
                name: "card37",
                src: brother,
                content: "unaku unga anna erutha enaga vena varuvalaa nee but na kuputa matum subu thitum na verala sollurathu"
            },
            {
                name: "card38",
                src: chennaifirst,
                content: "Itha na first chennai ku vanthu photo yeduthana thariyala but antha first day of chennai mattum mind la eruku, dichula veluthathu hotel la first aid panathu nee vantathu aprom avaga room ku poi dress change pana allow panathu ellam nala eruthathu d"
            },
            {
                name: "card39",
                src: asrama,
                content: "Nee sona mari yaa namba nala sambarichu namba nala mudichathu oru help kandipaa panuvom d sure ithu promise un mela"
            },
            {
                name: "card40",
                src: taj,
                content: "unakaaga na sand tajmahal kati erukan d but en manasula na unakaga gold temple kati vachu erukan d"
            },
            {
                name: "card41",
                src: ammamahifav,
                content: "Neega photo yeduthathulayaa intha photo tha yenku romba pudikum thariyum maa"
            },
            {
                name: "card42",
                src: advanmahi,
                content: "unaku intha advanture lam pudikum la na oru plan vachu erukan sikarama antha plan saiyalpaduthuren"
            },
            {
                name: "card43",
                src: framehasmyfeart,
                content: "This frame has my heart thariyum ma amma yenku ooti veduraga na unaku ooti veduren epayum itha mari happy ya erukanu d erupom d kandipaa"
            },
            {
                name: "card44",
                src: tripnandhihills,
                content: "Namba trip laya nandhi hills trip day full yenku romba pudicha trip thariyum ma because antha trip la tha car la ponom aprom neeyum antha trip la sema aalaga erutha aprom antha car kula nadantha oru illa conversations ellam nala eruthuchu"
            },
            {
                name: "card45",
                src: chennaizoo,
                content: "chennai zoo ku poi tha namba tiger paathom aprom anga eruka deer nee tho2 paatha antha deer kuda blood vanthucha aprom sapurathuku kaasu aathigama eruku nu konjama tha saputom water mattum neriya kudichom"
            },
            {
                name: "card46",
                src: photograph,
                content: "nee romba lucky thariyum because oru photography unaku husband kedeikurathu oru varam athu unaku kedichu eruku atha"
            },
            {
                name: "card47",
                src: bangalorefamphoto,
                content: "Nalam ipadi nadakum mind la kudu think pani paakala thariyum ma but its happens"
            },
            {
                name: "card48",
                src: beersubu,
                content: "neeyum unga appa suburamani yum"
            },
            {
                name: "card49",
                src: comingtoban,
                content: "Nee yenakaga neriya time bangalore vanthu eruka d athu otu thanifeel but nee pogum pothu yenkum pogatha sollanu pola erukum but en panurathu sonna inga eruka pora na en manasa thethipen seri epadi life full la eva kuda tha eruka porom nu solli manasu thethipen but sikarom ona erukanu namba ipadi nee anga na inga eruka kudathu"
            },
            {
                name: "card50",
                src: palani,
                content: "Its not a palani trip intha trip the neeyum amma appa lam meet paniga for the first time but nee keta thu enala pana mudiyala because late aaidichu bike la una station ku koothi2 pola la atha solluren but sema jolly ya eruthuchu"
            },
            {
                name: "card51",
                src: blackthunder,
                content: "Blackthunder lam na unkuda tha ponu oru kurikol ooda eruthan thariyum maa crt ta nadathurichu atha mari nee ketathu aprom think panathu(bus la pakathula okanthathu) ellam aniku na pana  oru house full"
            },
            {
                name: "card52",
                src: collegehasheart,
                content: "Google kudutha colage photo"
            },
            {
                name: "card53",
                src: akkafriends,
                content: "I have gave you a best persons you haven't got ivaga ellarum unaku tha support enaku illa"
            },
            {
                name: "card54",
                src: meandyou,
                content: "ME and YOU inifinity love, ipa erukaa mari ya namba eapyum jolly happy erukanu seri ya summa summa en tension panakudathu okay va athamari namba love pani ipa 513 day aaidichu d ipa varikum una enaku pudikama ponathu illa una veruthathu illa ena aanalum last unkitta tha varen so u r my last hope da kunjii and enatha sanda potalum un vetu poren sonnalum promise v2lam poga mudiyathu da u r the only person i need in my life yaru vanthu en kitta en pathi ketalum na sollubothu full una mention pani tha sollunu i always love u hub u kiss u miss u ellam u nee tha da kunjii nee think pani2 erupaa evan nambalam miss pana matten nu nee kuda veliya poga matta but na inga bagalore la eruthu domlur kulaya suthi eruthakum anga anga lovers povaga apa thonu thaiyum ma oru feel athu yethum edaga mudiyathu da un na avalo miss panuren un kuda oru veta neeyum nanu jolly enjoy pani2 samachu sanda po2 thugum pothu hug pani2 thuganu d yenku athua venu"
            },
            {
                name: "card55",
                src: mahiqueen,
                content: "Happy valentine day my Queen"
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
                    arrows={true}
                    prevArrow={<LeftOutlined />}
                    nextArrow={<RightOutlined />}
                    // dotPosition={'right'}
                    dots={false}
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