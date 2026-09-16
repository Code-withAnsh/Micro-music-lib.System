import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Musics from '../Pages/Musics'
import Login from '../Pages/Login'
import Artist from '../Pages/Artist'
const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Musics" element={<Musics />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Artist" element={<Artist />} />
    </Routes>
  );
}

export default Mainroutes