import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Home from "./components/Home";
import GetHelp from "./components/GetHelp";
import RiskAssessment from "./components/RiskAssessment";
import Navbar from "./components/Navbar";


function App() {
  return (
    <Router>
      <div className="App">
        <div classname="navbar-wrapper">
          <Navbar/>
        </div>
        <Routes>
          <Route path = "/" element={<Home/>}/>
          <Route path = "/gethelp" element={<GetHelp/>}/>
          <Route path = "/riskassessment" element={<RiskAssessment/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;