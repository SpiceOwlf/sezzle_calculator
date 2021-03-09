import React, {Component} from 'react';

class HistoryComponent extends Component {


    render() {
        let {history} = this.props;
        return (
            <div className="result">
                <p>history will appear here</p>
                <p>{history}</p>
            </div>
    )
        ;
    }
}


export default HistoryComponent;