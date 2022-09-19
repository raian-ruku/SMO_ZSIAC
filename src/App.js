import { BrowserRouter, Route, Routes } from 'react-router-dom';
import about from './components/aboutus';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

function App(){
  return(
<div>
  

<h1>Home Page</h1>
<about> </about>
</div>

  );
};

export default App;
