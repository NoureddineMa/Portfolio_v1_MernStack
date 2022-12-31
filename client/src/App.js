import Home from "./Components/pages/Home";
import About from "./Components/pages/About";
import Projects from "./Components/pages/Projects";
import { BrowserRouter,  Routes, Route } from 'react-router-dom';
import Layout from "./Components/pages/Layout";
import Blogs from "./Components/pages/Blogs";
import Contactme from "./Components/pages/Contactme";
import Dashboard from "./Components/Admin/Dashboard";
import Login from "./Components/Admin/Login";


function App() {
  return (
    <BrowserRouter>
  <Routes>
    <Route  element={<Layout/>}>
      <Route path='/' element={<Home />} />
      <Route path='/About' element={<About/>} />
      <Route path='/Projects' element={<Projects/>} />
      <Route path='/Blogs' element={<Blogs/>} />
      <Route path='/Contactme' element={<Contactme />} />
    </Route>

      <Route element={<Layout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
  </Routes>
  </BrowserRouter>
  );
}

export default App;
