import DJ1 from "./assets/dj1.jpg"
import ProfPic from "./assets/profpic.png"
import Spotify from "./Spotify";
import { Link } from "react-router-dom";

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
            
        </div>
    );
}

export default Body