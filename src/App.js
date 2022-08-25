import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";

import Home from "./components/Pages/Home";

import About from "./components/Pages/About";

import Services from "./components/Pages/Services";

import Shop from "./components/Pages/Shop";


function App() {
   
  return (

    <BrowserRouter>
      
      <Routes>

        <Route path="/" element={<Nav />}>

          <Route index element={<Home />} />

          <Route path="about" element={<About />} />

          <Route path="services" element={<Services />} />

          <Route path="shop" element={<Shop />} />

        </Route>

      </Routes>

    </BrowserRouter>

  );
  
 }

 export default App