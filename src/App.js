import React from "react";
import RouteCompo from './HandsonFour/RouteCompo';
import { BrowserRouter } from "react-router-dom";
import LinkCompo from "./HandsonFour/LinkCompo";
import './App.css'

function App(){
  return(
    <>
    <BrowserRouter>
    <LinkCompo />
    <RouteCompo />
    </BrowserRouter>
    </>
  )
}

export default App;