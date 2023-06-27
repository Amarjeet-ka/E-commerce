import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useEffect } from 'react';
import Homepage from "./pages/Home";
import Loginpage from './pages/Login';
import CompHome from './pages/CompHome';

function App() {




  return (
    <BrowserRouter>
    <Routes>
      {/*section only for User*/}
      <Route path="/"  element={<Loginpage/>}/>
      <Route path="/home"  element={<Homepage/>}/>
      <Route path="/complaints"  element={<CompHome/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
