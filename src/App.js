import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import navBackground from './assets/navBackground.jpg'

function App() {
  return (
    <div>
     <NavBar/>
     <div className='nav-section' style={{background:`url(${navBackground})`}}>
     </div> 
    </div>
  );
}

export default App;
