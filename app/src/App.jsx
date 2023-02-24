
import './App.css';
import Header from './layouts/Header.jsx'
import Home from './components/Home';
import Homefondo from './components/Homefondo';
import Formulario from './components/form/Formulario';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Homefondo/>
      <Formulario/>
    </div>
  );
}

export default App;
