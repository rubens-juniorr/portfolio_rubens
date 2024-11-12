import styles from './NavBar.module.css'
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav'

function NavBar(){
    return(
        <div className={styles.navbar}>
            <ul>
                <li><Nav.Link href='#Presentation'>Apresentação</Nav.Link></li>
                <li><Nav.Link href='#Skills'>Habilidades</Nav.Link></li>
                <li><Nav.Link href='#Projects'>Projetos</Nav.Link></li>
            </ul>
            <ul>
                <li><a href='https://www.instagram.com/rubens_juniorr/'><FaInstagram size={30}/></a></li>
                <li><a href='https://www.linkedin.com/in/rubens-rodrigues-83822b269/'><FaLinkedinIn size={30}/></a></li>
                <li><a href='https://github.com/rubens-juniorr'><FaGithub size={30}/></a></li>
            </ul>
        </div>
    )
}
export default NavBar