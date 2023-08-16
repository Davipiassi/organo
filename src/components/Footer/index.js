import "./Footer.css"
import facebookIcon from "../../assets/fb.png"
import instagramIcon from "../../assets/ig.png"
import twitterIcon from "../../assets/tw.png"
import logo from "../../assets/logo.png"

const Footer = () => {
    return(
        <footer className="rodape">
            <nav>
                <a href="#"><img src={facebookIcon} alt="Facebook Organo"/></a>
                <a href="#"><img src={twitterIcon} alt="Twitter Organo"/></a>
                <a href="#"><img src={instagramIcon} alt="Instagram organo"/></a>
            </nav>
            <img src={logo} alt="Organo"/>
            <p>Desenvolvido por Davi Piassi &copy;</p>
        </footer>
    )
}

export default Footer