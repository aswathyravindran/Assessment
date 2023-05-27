import './App.css';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import DashBoard from './components/DashBoard';
import New from './components/New';

function App() {
  return (
    <div className="App">
      <NavBar/>
     <Routes>
        <Route path='/dashboard' element={<DashBoard/>}/>
        <Route path='/new' element={<New/>}/>
     </Routes>
    </div>
  );
}

export default App;
