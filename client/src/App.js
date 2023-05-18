import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/*section only for User*/}
      <Route path="/"  element={<Homepage/>}/>





    </Routes>
    </BrowserRouter>
  );
}

export default App;
