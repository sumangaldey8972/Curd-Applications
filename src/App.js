import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Navbar from './Components/Pages/Layout/Navbar';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import NotFound from './Components/Pages/NotFound';
import Adduser from './Components/User/Adduser';
import EditUser from './Components/User/EditUser';
import ViewUser from './Components/User/ViewUser';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={ <Home/> }/>
          <Route path="/about" element={ <About/> }/>
          <Route path="/contact" element={ <Contact/> }/>
          <Route element={ <NotFound/> } />
          <Route path="/users/add" element={ <Adduser/> }/>
          <Route path='/users/edit/:id' element={<EditUser/>} />
          <Route path='/users/:id' element={<ViewUser/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
