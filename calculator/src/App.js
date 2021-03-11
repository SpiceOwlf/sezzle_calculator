import React,{Component,useState, useEffect, useRef} from 'react';
import socketIOClient from "socket.io-client";
import './App_cal.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";
import App_cal from "./App_cal";
const ENDPOINT = "http://127.0.0.1:4001";
const NEW_CHAT_MESSAGE_EVENT = "newChatMessage";

function App() {


  return (
      
    <div>
    <Router>
      <Switch>
        <Route exact path="/" component={App_cal} />
      </Switch>
    </Router>


    
        
        

    </div>
  );
}

export default App;