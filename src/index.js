import React from 'react';
import ReactDom from 'react-dom';
import Form from './Form';

class App extends React.Component {


    

    render(){
        
        return (
                <div>
                    <Form />
                </div>
                
            
                

        )
    }
}

ReactDom.render(<App />, document.querySelector('#root'));