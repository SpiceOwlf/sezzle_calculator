import React, {Component} from 'react';

class HistoryComponent extends Component {


    render() {
        let {history} = this.props;
        let {historyArr} = this.props;
        return (
            <div className="result">
                <p>{history}</p>
                {/* <p>{historyArr}</p> */}
                
            </div>
    )
        ;
    }
}


export default HistoryComponent;