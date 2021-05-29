import React from 'react';
import Input from './Input';
import './Form.css';
import Sgrade from './Sgrade';

var gp = [[0,4], [0,4], [0,4], [0,3], [0,2], [0,4]];
var cg = [0,0];

class Form extends React.Component{

    state = {sgpa: '', cgpa: ''};
    

    onFormSubmit = (event) => {
        event.preventDefault();
        var tc = 0;
        var sg = 0;
        var c =0; 

        for(var i=0; i<gp.length; i++)
        {
            sg = sg + gp[i][0]*gp[i][1];
            tc = tc+gp[i][1];
        }

        sg = sg/tc;
        var k = (cg[0]*cg[1]+sg*tc);
        var total = parseInt(cg[1]) + tc;
        c = k/total;
        
        this.setState({sgpa: sg, cgpa: c});
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
            <div className="ui container">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <h3>
                        Your grade in:
                    </h3>
                    <div className="grade">
                        <Input onChange={this.onInputChange} name="BTN-202"/>
                        <Input onChange={this.onInputChange} name="BTN-204"/>
                        <Input onChange={this.onInputChange} name="BTN-206"/>
                    </div>
                    <div className="grade">
                        <Input onChange={this.onInputChange} name="BTN-292"/>
                        <Input onChange={this.onInputChange} name="BTN-391"/>
                        <Input onChange={this.onInputChange} name="CEN-108"/>
                    </div>
                    <div className="cg">
                        <div>
                            <label id="label1" htmlFor="cgpa">Your current CGPA</label>
                            <input id="cgpa" step="any" onChange={this.cgChange} type="number" />
                        </div>
                        <div>    
                            <label id="label2" htmlFor="credits">Credits earned without S grade </label>
                            <input id="credits" onChange={this.crChange} type="number"/>
                        </div>
                    </div>
                    
                    <div className="inline field">
                        <div className="ui checkbox">
                        Take S grade in 
                            <Sgrade onCheck={this.onChecked} sub="BTN-202"/>
                            <Sgrade onCheck={this.onChecked} sub="BTN-204"/>
                            <Sgrade onCheck={this.onChecked} sub="BTN-206"/>
                            <Sgrade onCheck={this.onChecked} sub="BTN-292"/>
                            <Sgrade onCheck={this.onChecked} sub="BTN-391"/>
                            <Sgrade onCheck={this.onChecked} sub="CEN-108"/>
                        </div>
                    </div>
                    <div>
                        <input type="Submit" />
                        <input type="reset" onClick={e => this.setState({sgpa: '', cgpa: ''})} />
                    </div>
                    <div>
                        Your SGPA is: {this.state.sgpa}
                    </div>
                    <div>
                        Your CGPA is: {this.state.cgpa}
                    </div>
                </form>
                
            </div>
        )
    }
}

export default Form;