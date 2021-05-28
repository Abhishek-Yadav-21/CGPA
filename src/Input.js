import React from 'react';

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
            <div>
                <label>Your grade point in {this.props.name}</label>
                <input name={this.props.name} id="this.props.name" type = "number" onChange={this.onInputChange} />      
            </div>
  
        )
    }
}

export default Input;
// e => this.setState({term: e.target.value})
// value={this.state.term}