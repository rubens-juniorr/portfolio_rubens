import style from './Skills.module.css'
import javascript from '../../Image/Skill/javascript.svg'
import html from '../../Image/Skill/html.svg'
import css from '../../Image/Skill/css.svg'
import typescript from '../../Image/Skill/typescript.svg'
import react from '../../Image/Skill/react.svg'
import csharp from '../../Image/Skill/csharp.png'
function Skills (){
    return(
        <div className={style.skill} id="Skills">
            <h1>Habilidades</h1>
            <p>Conheça um pouco das minhas principais habilidades e conhecimentos.</p>
            <div>
                <img src={javascript}/>
                <img src={html}/>
                <img src={css}/>
                <img src={react}/>
                <img src={typescript}/>
                <img src={csharp}/>
            </div>
        </div>
    )
}
export default Skills