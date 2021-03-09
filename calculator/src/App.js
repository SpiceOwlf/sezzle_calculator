import React,{Component} from 'react';
import './App.css';
import ResultComponent from './components/ResultComponent';
import KeyPadComponent from "./components/KeyPadComponent";
import HistoryComponent from './components/HistoryComponent';
class App extends Component {

    constructor(){
        super();

        this.state = {
            result: "",
            history: "okok",
        }
    }
    //define onClick function that used in keypadComponent.js

    onClick=button=>{
        if(button === "="){
            console.log("calculate");
            this.calculate()
        }else if(button === "C"){
            console.log("reset");
            this.reset();
        }else if(button == "CE"){
            console.log("backspace");
            this.backspace();
        }else{
            console.log("before else: " + this.state.result);
            this.setState({
                result: this.state.result + button
            })
        }
    };

    calculate = ()=>{
        try{
            this.setState({
                result:(eval(this.state.result) || "") + ""
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
                    <h1>
                        A Calculator
                    </h1>
                    <ResultComponent result={this.state.result}/>
                    <KeyPadComponent onClick={this.onClick}/>
                    <HistoryComponent history={this.state.history}/>
                </div>
            </div>
        );
    }
}

export default App;
