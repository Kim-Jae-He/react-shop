import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./page/main";
import Fashion from "./page/fashion";
import Accessory from "./page/accessory";
import Digital from "./page/digital";
import Cart from "./page/cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/accessory" element={<Accessory />} />
        <Route path="/digital" element={<Digital />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
