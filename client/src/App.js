import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from "./pages/Home";
import Nav from "./components/Nav";
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Footer from './components/Footer';
import Raffles from './components/Raffles';

function App() {
  return (
    <Router>
      <div>
          <Nav />
          <Routes>
            <Route exact path='/login' element={<Login/>}/>
            <Route exact path='/signup' element={<SignUp/>}/>
          </Routes>
          <Raffles />
          <Footer />
      </div>
    </Router>
  );
}

export default App;