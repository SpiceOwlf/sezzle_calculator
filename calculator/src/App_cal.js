import React,{Component} from 'react';
import './App_cal.css';
import ResultComponent from './components/ResultComponent';
import KeyPadComponent from "./components/KeyPadComponent";
import HistoryComponent from './components/HistoryComponent';
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:4001";

window.histArr = [];
window.shared_hist = [];
class App_cal extends Component {
    
    constructor(){
        super();

        this.state = {
            result: "",
            history: "",
            // shared_hist: [],
        }
    }
    //define onClick function that used in keypadComponent.js

    onClick=button=>{
        if(button === "="){
            
            this.setState({
                history: this.state.result+'='+ eval(this.state.result),
            })
            

            window.histArr.unshift(this.state.history);
            console.log(window.histArr);
            if(window.histArr.length >=9){
                console.log("excess length");
                window.histArr.pop();

            }
            this.calculate()
            console.log("this.state.history ", this.state.result)


            const socket = socketIOClient(ENDPOINT);
            socket.emit("send_history", (this.state.result+'='+ eval(this.state.result)), (data) => {
            console.log("receive data is ", data); 
            // this.setState({
            //     shared_hist : data,
            // })
            window.shared_hist = data;
        });
        console.log("calculate");

        }else if(button === "C"){
            console.log("reset");
            this.reset();
        }else if(button === "CE"){
            // console.log("backspace");
            this.backspace();
        }else{
            // console.log("before else: " + this.state.result);
            this.setState({
                result: this.state.result + button,
            })
        }
    };

    calculate = ()=>{
        try{
            this.setState({
                result:(eval(this.state.result) || "") + "",
            })
        }catch(e){
            this.setState({
                result:"error"
            })
        }

    };

    
    reset=()=>{
        this.setState({
            result:""
        })
    };
    backspace=()=>{
        this.setState({
            result: this.state.result.slice(0,-1)
        })

    }


    render(){
        return(
            <div>
                <div className = "calculator-body">
                    <h5>
                        A Calculator
                    </h5>
                    <ResultComponent result={this.state.result}/>
                    <KeyPadComponent onClick={this.onClick}/>
                    <HistoryComponent history={this.state.history}/>
                    <HistoryComponent history={window.histArr+ "\n"}/>
            
                </div>
                <div>
                    <h5>
                        Shared history Area
                        <HistoryComponent history={window.shared_hist+ "\n"}/>
                    </h5>
                    
                </div>
            </div>
        );
    }
}

export default App_cal;
