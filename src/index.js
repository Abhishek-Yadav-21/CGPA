import React from 'react';
import ReactDom from 'react-dom';
import Form from './Form';

class App extends React.Component {


    

    render(){
        
        return (
            <div className="ui container">
                <h1>CGPA Calculator for Biotechnology (4th Semester)</h1>
                <div>
                    <Form />
                </div>
                
            </div>
                

        )
    }
}

ReactDom.render(<App />, document.querySelector('#root'));