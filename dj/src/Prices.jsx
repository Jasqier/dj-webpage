import FB from "./assets/blackfacebook.png"
import IG from "./assets/blackinstagram.png"
import GH from "./assets/blackgithub.png"
import IN from "./assets/blacklinkedin.png"




function Prices(){
    return(
        <div>
            <div className="tablediv">
                <table>
                    <tr>
                        <th>Service</th>
                        <th>Price</th>
                    </tr>
                    <tr>
                        <td>DJ</td>
                        <td>50$/h</td>
                    </tr>
                    <tr>
                        <td>DJ at a wedding</td>
                        <td>40$/h</td>
                    </tr>
                    <tr>
                        <td>Make a song to your like</td>
                        <td>100$</td>
                    </tr>
                    <tr>
                        <td>Make a whole playlist with the music I create to your like</td>
                        <td>1000$</td>
                    </tr>
                    
                </table>
            </div>

            <div>
                <h1 className="logos-h">You want something else? DM me on my socials!</h1>
                <div className="logos">
                    <a href="https://www.facebook.com" rel="noreferrer" target="_blank"><img src={FB} alt="FaceBook" /></a>
                    <a href="https://www.instagram.com" rel="noreferrer" target="_blank"><img src={IG} alt="Instagram" /></a>
                    <a href="https://www.linkedin.com/in/jantadrowski/" rel="noreferrer" target="_blank"><img src={IN} alt="LinkedIn" /></a>
                    <a href="https://github.com/Jasqier" rel="noreferrer" target="_blank"><img src={GH} alt="GitHub" /></a>
                </div>
            </div>
        </div>
    );
}

export default Prices