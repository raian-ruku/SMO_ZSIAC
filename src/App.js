import { BrowserRouter, Route, Routes } from 'react-router-dom';
import about from './aboutus';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

function App(){
  return(
<div>
  

<h1>Home Page</h1>
<BrowserRouter>
<Routes>


<Route path="/aboutus">
  <about />
</Route>
</Routes>
</BrowserRouter>
</div>

  );
};

export default App;
