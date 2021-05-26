import React from 'react';

class Sgrade extends React.Component {
    render(){
        return(
            <div>
                <input type = "checkbox" id= {this.props.sub} />
                <label > {this.props.sub} </label>
            </div>
            
        )
    }
}

export default Sgrade;