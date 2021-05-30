import React from 'react';
import './Input.css';

class Input extends React.Component {

    // state = {term: ''};

    onInputChange = (event) => {
        // this.setState({term: event.target.value});
        // this.props.onChange(this.state.term);
        this.props.onChange(event.target.value, this.props.name);
        // this.props.onChange(this.props.name);
    }

    render(){
        return(
            <div className="input">
                <label id="label" htmlFor="i">{this.props.name}</label>
                <input id="i" name={this.props.name} type = "number" onChange={this.onInputChange} required max="10" min="4"/>      
            </div>
  
        )
    }
}

export default Input;
// e => this.setState({term: e.target.value})
// value={this.state.term}