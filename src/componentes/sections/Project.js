import ButtonB from '../elements/ButtonB'
import style from './Project.module.css'
import Card from '../elements/Card'
import lpDNC from '../../Image/Skill/lpDNC.svg'
import portifolio from '../../Image/Skill/portifolio.svg'
import cadastra from '../../Image/Skill/cdAPI.svg'
function Project (){
    return(
        <div className={style.projects} id='Projects'>
            <h1>Projetos:</h1>
             <Card
                img={lpDNC} 
                title="API - DNC"
                tech=" HTML, CSS e JS"
                descriptio="Desenvolvimento de sistema de consumo de API para o lançamento da formação de tecnolodia"
                repo="https://github.com/rubens-juniorr?tab=repositories"
                site="https://rad-monstera-4888e6.netlify.app/"
             />
             <Card
                 img={portifolio} 
                title="Portifólio"
                tech=" HTML, CSS, JS e React"
                descriptio="Desenvolvimento de sistema de um portifólio para o lançamento da formação de tecnolodia"
                repo="https://github.com/rubens-juniorr?tab=repositories"
                site="https://rad-monstera-4888e6.netlify.app/"/>
             <Card
                img={cadastra} 
                title="Portifólio"
                tech=" HTML, CSS e JS"
                descriptio="Desenvolvimento de sistema de consumo de API para busca de CEP"
                repo="https://github.com/rubens-juniorr?tab=repositories"
                site="https://autocomplementoenderoco-main.netlify.app"/>

            <ButtonB text='Acesse meu repositório' link='https://github.com/rubens-juniorr?tab=repositories'/>
        </div>
    )
}
export default Project