import React from 'react';
import Input from './Input';
import './Form.css';
import Sgrade from './Sgrade';

var gp = [[0,4], [0,4], [0,4], [0,3], [0,2], [0,4]];
var cg = [0,0];
var sg = 0;
class Form extends React.Component{

    state = {sgpa: '', cgpa: ''};
    

    onFormSubmit = (event) => {
        event.preventDefault();

        for(var i=0; i<gp.length; i++)
        {
            sg = sg + gp[i][0]*gp[i][1];
        }
        this.setState({sgpa: sg});
        
    }
    onInputChange(term, value){

        // console.log(value);
        if(value === "BTN-202")
        {
            gp[0][0] = term;
        }
        else if(value === "BTN-204")
        {
            gp[1][0] = term;
        }
        else if(value === "BTN-206")
        {
            gp[2][0] = term;
        }
        else if(value === "BTN-292")
        {
            gp[3][0] = term;
        }
        else if(value === "BTN-391")
        {
            gp[4][0] = term;
        }
        else if(value === "CEN-108")
        {
            gp[5][0] = term;
        }
        

    }
    cgChange = (event) => {

        cg[0] = event.target.value;
    }
    crChange = (event) => {
        cg[1] = event.target.value;
        console.log(cg);
    }

    onChecked(e, value){
        if(value === "BTN-202")
        {
            if(e===true)
            {
                gp[0][1] = 0;
            }
            else{
                gp[0][1] = 4;
            }
        }
        if(value === "BTN-204")
        {
            if(e===true)
            {
                gp[1][1] = 0;
            }
            else{
                gp[1][1] = 4;
            }
        }
        if(value === "BTN-206")
        {
            if(e===true)
            {
                gp[2][1] = 0;
            }
            else{
                gp[2][1] = 4;
            }
        }
        if(value === "BTN-292")
        {
            if(e===true)
            {
                gp[3][1] = 0;
            }
            else{
                gp[3][1] = 3;
            }
        }
        if(value === "BTN-391")
        {
            if(e===true)
            {
                gp[4][1] = 0;
            }
            else{
                gp[4][1] = 2;
            }
        }
        if(value === "CEN-108")
        {
            if(e===true)
            {
                gp[5][1] = 0;
            }
            else{
                gp[5][1] = 4;
            }
        }
    }

    render(){
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                        <Input onChange={this.onInputChange} name="BTN-202"/>
                        <Input onChange={this.onInputChange} name="BTN-204"/>
                        <Input onChange={this.onInputChange} name="BTN-206"/>
                        <Input onChange={this.onInputChange} name="BTN-292"/>
                        <Input onChange={this.onInputChange} name="BTN-391"/>
                        <Input onChange={this.onInputChange} name="CEN-108"/>
                    <div>
                        Your current CGPA {" "}
                        <input onChange={this.cgChange} type="number" />
                    </div>
                    <div>
                        Credits earned without S grade {" "}
                        <input onChange={this.crChange} type="number"/>
                    </div>
                    <div>
                        Take S grade in 
                        <Sgrade onCheck={this.onChecked} sub="BTN-202"/>
                        <Sgrade onCheck={this.onChecked} sub="BTN-204"/>
                        <Sgrade onCheck={this.onChecked} sub="BTN-206"/>
                        <Sgrade onCheck={this.onChecked} sub="BTN-292"/>
                        <Sgrade onCheck={this.onChecked} sub="BTN-391"/>
                        <Sgrade onCheck={this.onChecked} sub="CEN-108"/>
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