import React from 'react';
import Input from './Input';
import './Form.css';
import Sgrade from './Sgrade';

var gp = [[0,4], [0,4], [0,4], [0,4], [0,4], [0,3]];
var cg = [0,0];

class Form extends React.Component{

    state = {sgpa: '', cgpa: '', message: ''};
    

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

        if(parseInt(c)>=9)
        {
            this.setState({message: "Chup chap 500rs paytm krde chapo k, varna sabko bata dunga ki 9+ CG aayi hai :D"});
        }
        
        this.setState({sgpa: sg, cgpa: c});
    }
    onInputChange(term, value){

        // console.log(value);
        if(value === "BTN-301")
        {
            gp[0][0] = term;
        }
        else if(value === "BTN-303")
        {
            gp[1][0] = term;
        }
        else if(value === "BTN-305")
        {
            gp[2][0] = term;
        }
        else if(value === "BTN-342/347")
        {
            gp[3][0] = term;
        }
        else if(value === "BTN-208")
        {
            gp[4][0] = term;
        }
        else if(value === "IBM")
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
        if(value === "BTN-301")
        {
            if(e===true)
            {
                gp[0][1] = 0;
            }
            else{
                gp[0][1] = 4;
            }
        }
        if(value === "BTN-303")
        {
            if(e===true)
            {
                gp[1][1] = 0;
            }
            else{
                gp[1][1] = 4;
            }
        }
        if(value === "BTN-305")
        {
            if(e===true)
            {
                gp[2][1] = 0;
            }
            else{
                gp[2][1] = 4;
            }
        }
        if(value === "BTN-342/347")
        {
            if(e===true)
            {
                gp[3][1] = 0;
            }
            else{
                gp[3][1] = 4;
            }
        }
        if(value === "BTN-208")
        {
            if(e===true)
            {
                gp[4][1] = 0;
            }
            else{
                gp[4][1] = 4;
            }
        }
        if(value === "IBM")
        {
            if(e===true)
            {
                gp[5][1] = 0;
            }
            else{
                gp[5][1] = 3;
            }
        }
        
    }

    render(){
        return(
            <div className="ui container">
                <h1 id="h1">CGPA Calculator for Biotechnology</h1>
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <h3>
                        Your grade point in:
                    </h3>
                    <div className="grade">
                        <Input onChange={this.onInputChange} name="BTN-301"/>
                        <Input onChange={this.onInputChange} name="BTN-303"/>
                        <Input onChange={this.onInputChange} name="BTN-305"/>
                    </div>
                    <div className="grade sub">
                        <Input onChange={this.onInputChange} name="BTN-342/347"/>
                        <Input onChange={this.onInputChange} name="BTN-208"/>
                        <Input onChange={this.onInputChange} name="IBM"/>
                    </div>
                    <div className="cg">
                        <div>
                            <label id="label1" htmlFor="cgpa"><h4>Your current CGPA:</h4></label>
                            <input id="cgpa" step="any" onChange={this.cgChange} type="number" required max="10"/>
                        </div>
                        <div>    
                            <label id="label2" htmlFor="credits"><h4>Credits earned without S grade:</h4> </label>
                            <input id="credits" onChange={this.crChange} type="number" required/>
                        </div>
                    </div>
                    
                    {/* <div className="inline field"> */}
                        {/* <h3 id="h">Take S grade in:</h3>
                        <div className="ui checkbox">
                            <Sgrade onCheck={this.onChecked} sub="BTN-301"/>
                            <Sgrade onCheck={this.onChecked} sub="BTN-303"/>
                            <Sgrade onCheck={this.onChecked} sub="BTN-305"/>
                        </div>
                        <div className="ui checkbox">    
                            <Sgrade onCheck={this.onChecked} sub="BTN-342/347"/>
                            <Sgrade onCheck={this.onChecked} sub="BTN-20"/>
                            <Sgrade onCheck={this.onChecked} sub="IBM"/>
                        </div> */}
                    
                    <div className="input1">
                        <input className="small ui button ui green button" type="Submit" value="Calculate"/>
                        <input className="small ui button ui blue button" id="reset" type="reset" onClick={e => this.setState({sgpa: '', cgpa: '', message: ""})} />
                    </div>
                   
                    
                    <h3>
                        Your SGPA is: {this.state.sgpa}
                    </h3>
                    <h3>
                        Your CGPA is: {this.state.cgpa}
                    </h3>
                    <h5 id="message">
                        {this.state.message}
                    </h5>
                </form>
                <div id="k">
                      h
                </div>
                
            </div>
        )
    }
}

export default Form;