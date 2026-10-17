import logo from "../assets/GloboDot.png"
import { logo as logoClass } from "./Banner.module.css"
import { useNavigate } from "react-router";


const subtitleStyle = {
    fontStyle: "italic",
    fontSize: "x-large",
    color: "coral"
}

const Banner = ({ headerText }) => {


    const { navigate } = useNavigate();

    return (

        <header className="row mb-4">
            <div className="col-5">
                <img
                    src={logo}
                    className={logoClass}
                    alt="logo"
                    onClick={() => navigate("/")}
                />
            </div>
            <div className="col-7 mt-5" style={subtitleStyle}>{headerText}</div>

        </header>

    )


};



export default Banner;