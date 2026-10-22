import DJ1 from "./assets/dj1.jpg"
import ProfPic from "./assets/profpic.png"
import Spotify from "./Spotify";
import { Link } from "react-router-dom";
import photo1 from "./assets/insta1.png"
import photo2 from "./assets/insta2.png"
import photo3 from "./assets/insta3.png"
import InstagramLogo from "./assets/InstagramLogo.png"
import Heart from "./assets/heart.png"
import Comment from "./assets/comment.png"
import Send from "./assets/send.png"
import Save from "./assets/save.png"

function Body(){
    return(
        <div className="body">
            <div>
                <div className="firstPhotos">
                    <img className="djPhotos" src={DJ1} alt="dj1" />
                    <div className="imgText">
                        <h1 className="offers">Check out my offers!</h1>
                        <p>
                            I can play at your birthday party, your wedding, your event, you name it! 
                            Just give me a call and we'll figure something out. 
                            You can even check example prices for different occasions.
                        </p>
                        <Link to="/prices"><button className="priceBtn">Check example prices</button></Link>
                    </div>
                </div>
            </div>

            <div className="text-grid">
                <div className="abme">
                    <h1>About me</h1>
                    <p>
                        Hey, I'm Matt, though I play under the name DJ Kowalsky. 
                        I'm an up-and-coming DJ based around here, mainly pushing techno. 
                        I've been building out my sound over the last couple of years and playing local venues whenever I get the chance. 
                        Right now, I'm really focused on tightening up my live track selection and connecting with other people pushing the local scene forward. 
                        It's always dope running into folks who genuinely appreciate good sound and late-night culture. 

                    </p>
                </div>
                <div className="profpic">
                    <img src={ProfPic} alt="profile picture" />
                </div>
            </div>

            <div className="Spotify">
                <h1>Check out my latest song!</h1>    
                <Spotify/>
            </div>


            <div className="Instagram">
                <h1>Check out my Instagram as well!</h1>
                <div className="phone">
                    <div className="phone1">
                        <div className="notch"/>
                        <div className="scroll">
                            <div className="photos">

                                <div className="photo">
                                    <div className="oneLine">
                                        <img className="instagramlogo" src={InstagramLogo} alt="InstagramLogo" />
                                        <p>Instagram</p>
                                    </div>
                                    <img className="instagramPhoto" src={photo1} alt="Photo1" />
                                    <div className="twoLine">
                                        <div className="threeIcons">
                                            <img src={Heart} alt="Like" />
                                            <img src={Comment} alt="Comment" />
                                            <img src={Send} alt="Send" />
                                            <img src={Save} alt="Save" className="save"/>
                                        </div>
                                        <p className="p-likes">Likes: 158k</p>
                                    </div>
                                </div>

                                <div className="photo">
                                    <div className="oneLine">
                                        <img className="instagramlogo" src={InstagramLogo} alt="InstagramLogo" />
                                        <p>Instagram</p>
                                    </div>
                                    <img className="instagramPhoto" src={photo2} alt="Photo2" />
                                    <div className="twoLine">
                                        <div className="threeIcons">
                                            <img src={Heart} alt="Like" />
                                            <img src={Comment} alt="Comment" />
                                            <img src={Send} alt="Send" />
                                            <img src={Save} alt="Save" className="save"/>
                                        </div>
                                        <p className="p-likes">Likes: 109k</p>
                                    </div>
                                </div>
                                
                                <div className="photo">
                                    <div className="oneLine">
                                        <img className="instagramlogo" src={InstagramLogo} alt="InstagramLogo" />
                                        <p>Instagram</p>
                                    </div>
                                    <img className="instagramPhoto" src={photo3} alt="Photo3" />
                                    <div className="twoLine">
                                        <div className="threeIcons">
                                            <img src={Heart} alt="Like" />
                                            <img src={Comment} alt="Comment" />
                                            <img src={Send} alt="Send" />
                                            <img src={Save} alt="Save" className="save"/>
                                        </div>
                                        <p className="p-likes">Likes: 124k</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bar"/>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Body