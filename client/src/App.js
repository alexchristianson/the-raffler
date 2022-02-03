import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Nav from "./components/Nav";
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <div>
          <Nav />
          <Routes>
            <Route exact path='/login' element={<Login/>}/>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
