import logo from "../imges/Tutedude1.png"
import { FaUser, FaAngleDown } from "react-icons/fa"
import "../css/nav.css"
import { Link } from "react-router-dom"


const Nav = () => {
    return (
        <>
            <nav className="nav">
                <div className="navLogo">
                    <img src={logo} alt="Logo"></img>
                </div>
                <div >
                    <ul className="navLinkContainer">
                        <li className="navText"><Link to="#" >My Assignment</Link></li>
                        <li className="navText"><Link to="#" >Chat with Mentor</Link></li>
                        <li className="navText flexCenter">
                            <div className="activeFauser"><FaUser className="faUser"/></div>
                            <div className="active"><Link to="#" >ProfileName</Link></div>
                            <div className="active"><FaAngleDown className="faAngleDown" /></div>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Nav;