//import './App.css';
import hackathonLogo from "../src/images/hackathonLogo.svg"

const App = ()  => {
  return (
    <div className="h-full" style={{background: 'linear-gradient(270deg, #903AFF 0%, #FE34B9 100%)'}}>
    <div className="p-9 flex"> 
    <img src={hackathonLogo} className="h-11 w-36" alt="Hackathon Logo"/>
    <div className="text-white font-normal text-base flex justify-between" style={{fontFamily: "Montserrat"}}>
    <button>Timeline</button>
    <button>Overview</button>
    <button>FAQs</button>
    <button>Contact</button>
    </div>
    {/* <button className="text-white font-normal text-base" style={{fontFamily: "Montserrat"}}>Timeline</button> */}

    </div>
     
    </div>
  );
}

export default App;
