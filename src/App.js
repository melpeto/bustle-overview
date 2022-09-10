import './App.scss';
import {Route, Routes} from 'react-router-dom';
import Homepage from './pages/Homepage.js';
import Architecture from './pages/Architecture.js';
import Presentation from './pages/Presentation.js';
import TeamInfo from './pages/TeamInfo.js';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/architecture" element={<Architecture />}/>
        <Route path="/presentation" element={<Presentation />}/>
        <Route path="/teaminfo" element={<TeamInfo />}/> 
      </Routes>
    </div>
  );
}

export default App;

//homepage - summary
  //problem - solution

//architecture
  //class diagrams etc

//team
  //contact info

//presentation
