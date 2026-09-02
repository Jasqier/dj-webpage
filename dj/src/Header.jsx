import Logo from "./assets/logo.png"
import { Link } from "react-router-dom";

function Header(){
    return(
        <div className="header">
            <Link to="/">
                <img className="mainLogo" src={Logo} alt="logo" />
            </Link>
        </div>
    );
}

export default Header