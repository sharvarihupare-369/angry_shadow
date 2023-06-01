import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { MainRoutes } from './Pages/MainRoutes';
import  Footer  from './components/Footer';
import { BagDetails } from './Pages/BagDetails';


function App() {
  return (
    <div className="App">
     <Navbar/>
     <MainRoutes/>
     <Footer/>

     {/* <BagDetails/> */}
 
    </div>
  );
}

export default App;
