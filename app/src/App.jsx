
import './App.css';
import Header from './layouts/Header.jsx'
import Home from './components/Home';
import Homefondo from './components/Homefondo';



function App() {
  return (
    <div className="App">
     <div className='page1'>
     <Header/>
      <Home/>
      <Homefondo/>
     </div>
    
    
    </div>
  );
}

export default App;
