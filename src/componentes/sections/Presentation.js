import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'
import ButtonB from '../elements/ButtonB'
import { useEffect, useState } from 'react'

function Presentation (){

  const [text, setText] = useState('');
  const toRotate = ['Olá, eu sou Rubens Rodrigues!!', 'E sou Desenvolvedor Front End!!' ];
  const [loop, setLoop] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const period = 150;
  const [delta, setDelta] = useState(100)

  useEffect(()=>{

    let ticker = setInterval(()=>{
      toType()
    },delta)
     return()=>{clearInterval(ticker)}

  }, [text])

    const toType = () => {
      let i = loop % toRotate.length;
      let fulltText = toRotate[i]
      let updatedText = isDeleting ? fulltText.substring(0, text.length-1) : fulltText.substring(0,text.length+1)

      setText(updatedText); 

      if(!isDeleting && updatedText === fulltText){
        setIsDeleting (true);
        setDelta(period)
      }else if(isDeleting && updatedText === ''){
         setIsDeleting(false);
         setDelta(period);
         setLoop(loop+1);
      }
      
    }

    return(
        <div className={styles.presentation} id="Presentation">
          <h4><strong>Bem-vindo ao meu Portfólio</strong></h4>
          <h1>  {text}</h1>
          <p>
            Sou um apaixonado por tecnologia e soluções inovadoras. <br/>
            Como Desenvolvedor, tenho o compromisso de resolver problemas<br/>
            complexos e trazer resultados excepcionais para os negócios.<br/>
            
          </p>

          <ButtonA link='https://github.com/rubens-juniorr' text='Conecte-se comigo!!'/>
          
        </div>
    )
}
export default Presentation