import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import style from './Footer.module.css'
function Footer (){
    return(
        <div className={style.footer}>
           <ul>
                <li><a href='https://www.instagram.com/rubens_juniorr/'><FaInstagram size={30}/></a></li>
                <li><a href='https://www.linkedin.com/in/rubens-rodrigues-83822b269/'><FaLinkedinIn size={30}/></a></li>
                <li><a href='https://github.com/rubens-juniorr'><FaGithub size={30}/></a></li>
            </ul>
            <p>rubensjunior_20@icloud.com</p>
            <p>Rubens Rodrigues © 2024</p>
        </div>
    )
}
export default Footer