import React from 'react';
import ReactDom from 'react-dom';
import Subject from './Subject';
import Input from './Input';
import Sgrade from './Sgrade';
import './index.css';

class App extends React.Component {

    state = {sgpa: null, cgpa: null};

    render(){
        
        return (
            <div>
                <h1>CGPA Calculator for Biotechnology (4th Semester)</h1>
                <div>
                    <div>
                        <div className="a">
                            <Subject name = "BTN-202" /><Input/>
                        </div>
                        <div className="a">
                            <Subject name = "BTN-204" /><Input/>
                        </div>
                        <div className="a">
                            <Subject name = "BTN-206" /><Input/>
                        </div>
                        <div className="a">
                            <Subject name = "BTN-292" /><Input/>
                        </div>
                        <div className="a">
                            <Subject name = "BTN-391" /><Input/>
                        </div>
                        <div className="a">
                            <Subject name = "CEN-108" /><Input/>
                        </div>
                        
                    </div>

                    <div>Your current CGPA {" "} <Input /></div>
                    <div>
                        Credits earned without S Grade {" "}
                        <Input />
                    </div>
                    <div>
                        Take S grade in: {" "}
                        <Sgrade sub = "BTN-202"/>
                        <Sgrade sub = "BTN-204"/>
                        <Sgrade sub = "BTN-206"/>
                        <Sgrade sub = "BTN-292"/>
                        <Sgrade sub = "BTN-391"/>
                        <Sgrade sub = "CEN-108"/>
                    </div>
                    <div>
                        <input type = "Submit" value="Calculate" />
                        <input type="reset" />
                    </div>
                    <div>
                        Your SGPA is: {" "}
                    </div>
                    <div>
                        Your CGPA is: {" "}
                    </div>
                </div>
                
            </div>
        )
    }
}

ReactDom.render(<App />, document.querySelector('#root'));