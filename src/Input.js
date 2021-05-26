import React from 'react';

class Input extends React.Component {

    // state = {term: ''};

    onInputChange = (event) => {
        // this.setState({term: event.target.value});
        // this.props.onChange(this.state.term);
        this.props.onChange(event.target.value);
    }

    render(){
        return(
            <div>
                <label>Your grade point in {this.props.name}</label>
                <input id="this.props.name" type = "number" onChange={this.onInputChange} />      
            </div>
  
        )
    }
}

export default Input;
// e => this.setState({term: e.target.value})
// value={this.state.term}