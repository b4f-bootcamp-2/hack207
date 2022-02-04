import './App.css';
import { BrowserRouter, Routes, Link, Route } from 'react-router-dom';
import Homepage from '../View/homepage';
import { HomeAdmin } from '../View/HomeAdmin';
import Overview from '../View/Overview';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Homepage" element={<Homepage />} />
        <Route path="/Home" element={<HomeAdmin />} />
        {/* <Route path="/Clients" element={<Forms />} /> */}
        <Route path="/Overview" element={<Overview />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;


