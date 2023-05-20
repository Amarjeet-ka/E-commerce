import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Home";
import Loginpage from './pages/Login';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/*section only for User*/}
      <Route path="/"  element={<Loginpage/>}/>
      <Route path="/home"  element={<Homepage/>}/>
      
   



    </Routes>
    </BrowserRouter>
  );
}

export default App;
