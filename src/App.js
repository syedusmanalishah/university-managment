import './App.scss';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import User from './pages/user';
import Base from './components/Layouts/Base';
import './index.css'


function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Base>
        <Routes>
          <Route index path="/React_Registration_Form" element={<Home/>} /> 
          <Route path="/home" element={<Home/>}/>
          <Route path="/user" element={<User/>}/>

        </Routes>
      </Base>
    </BrowserRouter>
    </div>
  );
}

export default App;
