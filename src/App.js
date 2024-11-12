import './App.css';
import NavBar from './componentes/sections/NavBar';
import Presentation from './componentes/sections/Presentation';
import Footer from './componentes/sections/Footer';
import Project from './componentes/sections/Project';
import Skills from './componentes/sections/Skills';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Presentation/>
     <Skills/>
     <Project/>
     <Footer/>
    </div>
  );
}

export default App;
