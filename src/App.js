import { BrowserRouter, Router, Route } from 'react-router-dom';
import aboutus from './aboutus';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
<nav>
  <Link to="/aboutus">About us</Link>
</nav>

  );
}

export default App;
