import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/aboutus';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

function App(){
  return(
<div>
  

<h1>Home Page</h1>
{/*<Routes>
  <Route path='/' element={<App />}></Route>
<Route path="/aboutus" element={<About />}>
</Route>
  </Routes>*/}
</div>

  );
};

export default App;
