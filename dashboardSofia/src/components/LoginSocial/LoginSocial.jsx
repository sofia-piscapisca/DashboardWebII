import "./LoginSocial.style.scss"
import google from "../../assets/google.svg"
import apple from "../../assets/apple.svg"
import facebook from "../../assets/Facebook.svg"

const LoginSocial =()=>{
    return(
        <div className="loginSocials">
            <img src={facebook} alt="facebook" className="socialsIcon" />
            <img src={apple} alt="apple" className="socialsIcon" />
            <img src={google} alt="google" className="socialsIcon" />
        </div>
    )
}

export default LoginSocial