import React from 'react';

class Sgrade extends React.Component {

    onInputChange = (event) => {
        this.props.onCheck(event.target.checked, this.props.sub);
    }

    render(){
        return(
            <div>
                <input type = "checkbox" id= {this.props.sub} onChange={this.onInputChange} />
                <label > {this.props.sub} </label>
            </div>
            
        )
    }
}

export default Sgrade;