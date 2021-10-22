
import './App.css'
import {React,useState} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Tache from './Components/Pages/Tache';
import Singup from './Components/Pages/Singup';
import Login from './Components/Pages/Login';
function App() {


  return (
  <div>
      <BrowserRouter>
         <Switch>
           <Route exact path ="/" component={Tache}/>
           <Route path ="/singup" component={Singup}/>
           <Route path ="/login" component={Login}/>

        </Switch>
        </BrowserRouter>
  </div>
  )
}


export default App