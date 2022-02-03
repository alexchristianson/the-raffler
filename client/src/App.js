import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
          <Nav />
          <Routes>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
