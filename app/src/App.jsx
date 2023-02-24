
import './App.css';
import Header from './layouts/Header.jsx'
import Home from './components/Home';
import Homefondo from './components/Homefondo';
// import Form from './components/form/Form';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Homefondo/>
      {/* <Form/> */}
    </div>
  );
}

export default App;
