import './App.css'
import Time from './components/Time/time';
import Timer from './components/Timer/timer';
import 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router className="App">
      
      
      
        <h1 id="title">WebTime</h1>

        <Routes>

          <Route path='/' element={<Time />} />
          <Route path='timer' element={<Timer />} />

        </Routes>
        
        
      

    
    </Router>
  );
}

export default App;
