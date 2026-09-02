import DJ1 from "./assets/dj1.jpg"
import { Link } from "react-router-dom";

function Body(){
    return(
        <div className="body">
            <div>
                <div className="firstPhotos">
                    <img className="djPhotos" src={DJ1} alt="dj1" />
                </div>
            </div>


            <div className="pricesDiv">
                <h1 className="offers">
                    Check out my offers!
                </h1>
                <p className="p-offers">
                    I can play at your birthday party, your wedding, your event, you name it! 
                    Just give me a call and we'll figure something out. 
                    You can even check example prices for different occasions.
                </p>
                <Link to="/prices"><button className="priceBtn">Check example prices</button></Link>
            </div>
        </div>
    );
}

export default Body