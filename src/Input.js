import React from 'react';

class Input extends React.Component {

    state = {term: null};

    render(){
        return(
            <input type = "number" value={this.state.term} onChange={e => this.setState({term: e.target.value})} />
        )
    }
}

export default Input;