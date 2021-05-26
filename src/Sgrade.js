import React from 'react';

class Sgrade extends React.Component {
    render(){
        return(
            <div>
                <input type = "checkbox" id= {this.props.sub} />
                <label for = {this.props.sub}> {this.props.sub} </label>
            </div>
            
        )
    }
}

export default Sgrade;