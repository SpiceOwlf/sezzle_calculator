import React,{Component,useState, useEffect, useRef} from 'react';
import socketIOClient from "socket.io-client";
import './App_cal.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";
import App_cal from "./App_cal";
const ENDPOINT = "http://127.0.0.1:4001";
const NEW_CHAT_MESSAGE_EVENT = "newChatMessage";

function App() {
    // const [response, setResponse] = useState("");
    // useEffect(() => {
    //     const socket = socketIOClient(ENDPOINT);

    // // socket.emit("ferret", "tobi", (data) => {
    // //     console.log(data); // data will be "woot"
    // // });
    //     socket.emit("ferret", window.histArr, (data) => {
    //         console.log(data); // data will be "woot"
    //     });

    //     socket.on("FromAPI", data => {
    //         setResponse(data);
    //         // console.log("data is" ,data); time
    //       });

       
    //     // console.log("jkjkjkjkjkjk123123");
    //     // console.log(window.histArr);
    //   }, []);


  return (
      
    <div>
    <Router>
      <Switch>
        <Route exact path="/" component={App_cal} />
        {/* <Route exact path="/:roomId" component={ChatRoom} /> */}
      </Switch>
    </Router>
    {/* <p>
      It's <time dateTime={response}>{response}</time>
    </p> */}
    {/* <p>
        another 
        
    </p> */}

    
        
        

    </div>
  );
}

export default App;