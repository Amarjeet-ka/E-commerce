import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/*section only for User*/}

     

    <Route path='/' element={<Home/>}  />


    </Routes>
    </BrowserRouter>
  );
}

export default App;
