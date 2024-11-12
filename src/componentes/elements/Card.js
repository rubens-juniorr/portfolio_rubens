import style from './Card.module.css'
import ButtoB from './ButtonB'
import {useState} from 'react'
function Card({img, title, tech, descriptio, repo, site}){

    const [info, setInfo] = useState(false)

    function infoOn(){
        setInfo(true)
    }

    function infoOff(){
        setInfo(false)
    }

    return(
        <div onMouseLeave={infoOff} className={style.card}>
            <a onMouseEnter={infoOn} href={site}>
                <img src={img} alt='ERRO'/>
            </a>  

            {info === true && (

            <section>
                <h3>{title}</h3>
                <p><strong>Tecnologia:</strong>{tech}</p>
                <p>{descriptio}</p>
                <ButtoB text='Acesse o Repositorio ' link={repo}/>
            </section>
            )}
         
        </div>
    )
}
export default Card