import React from "react";
import { PauAndres } from "./templates/PauAndres";
import { Login } from "./Login";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";

export function MasterPage() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<PauAndres />}/>
          <Route path=":lang" element={<PauAndres />}/>
          <Route path=":lang/login" element={<Login />}/>
        </Routes>
      </BrowserRouter>
  );
}