
import './App.css';
import Home from './components/Home';
import Homefondo from './components/Homefondo';
import Formulario from './components/form/Formulario';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
     <header>
     <Navbar/>
     </header>
      <Home/>
      <Homefondo/>
      <Formulario/>
    </div>
  );
}

export default App;
