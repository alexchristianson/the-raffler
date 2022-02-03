import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Nav from "./components/Nav";
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  return (
    <Router>
      <div>
          <Nav />
          <Routes>
            <Route exact path='/login' element={<Login/>}/>
            <Route exact path='/signup' element={<SignUp/>}/>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
