import React,{Component} from 'react';
import './App_cal.css';
import ResultComponent from './components/ResultComponent';
import KeyPadComponent from "./components/KeyPadComponent";
import HistoryComponent from './components/HistoryComponent';

window.histArr = [];
class App extends Component {
    
    constructor(){
        super();

        this.state = {
            result: "",
            history: "",
            //insert past history to the historyArr?
            historyArr: Array(10).fill(null),
            
        }
    }
    //define onClick function that used in keypadComponent.js

    onClick=button=>{
        if(button === "="){
            // console.log("calculate");
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
                    </h5>
                    
                </div>
            </div>
        );
    }
}

export default App;