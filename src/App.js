import { BrowserRouter, Route } from 'react-router-dom';
import aboutus from "./aboutus";
import './App.css';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

function App(){
  return(
<div>
  

<h1>Home Page</h1>
<BrowserRouter>
<Route path="/aboutus">
  <aboutus />
</Route>
</BrowserRouter>
</div>

  );
};

export default App;
