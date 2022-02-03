import React from "react";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Buat from "./pages/Buat";

function Routing() {
  return (
    <div className='p-4'>
      <BrowserRouter>
        <AnimatePresence>
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/buat' element={<Buat />} />
            <Route path='/signin' element={<Login />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </div>
  );
}

export default Routing;
