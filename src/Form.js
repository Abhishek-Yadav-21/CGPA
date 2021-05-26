import React from 'react';
import Input from './Input';
import './Form.css';
import Sgrade from './Sgrade';

class Form extends React.Component{

    onFormSubmit = (event) => {
        event.preventDefault();
    }
    onInputChange(term){
        console.log(term);
    }

    render(){
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                        <Input onChange={this.onInputChange} name="BTN-202"/>
                        <Input onChange={this.onInputChange} name="BTN-204"/>
                        <Input name="BTN-206"/>
                        <Input name="BTN-292"/>
                        <Input name="BTN-391"/>
                        <Input name="CEN-108"/>
                    <div>
                        Your current CGPA {" "}
                        <input type="number" />
                    </div>
                    <div>
                        Credits earned without S grade {" "}
                        <input type="number"/>
                    </div>
                    <div>
                        Take S grade in 
                        <Sgrade sub="BTN-202"/>
                        <Sgrade sub="BTN-204"/>
                        <Sgrade sub="BTN-206"/>
                        <Sgrade sub="BTN-292"/>
                        <Sgrade sub="BTN-391"/>
                        <Sgrade sub="CEN-108"/>
                    </div>
                    <div>
                        <input type="Submit" />
                        <input type="reset" />
                    </div>
                </form>
                
            </div>
        )
    }
}

export default Form;