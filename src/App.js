import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import PrivateRoutes from "./components/PrivateRoutes";
import Auth from "./pages/Auth/Auth";
import Admin from "./pages/Main/Admin";
import Home from "./pages/Main/Home";

function App() {
  return (
    <Routes>
      <Route element={<PrivateRoutes/>}>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/admin'} element={<Admin/>}/>
        <Route path={'*'} element={<Navigate to={'/'}/>}/>
      </Route>
      <Route path={'/auth'} element={<Auth/>}/>
      <Route path={'*'} element={<Navigate to={'/auth'}/>}/>
    </Routes>
  )
}

export default App;
