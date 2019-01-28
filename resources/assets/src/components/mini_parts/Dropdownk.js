
import React, { Component } from 'react';

//import {NavLink} from "react-router-dom";

class Dropdownk extends Component{
    render=(props)=>{
        return(
            <div className="nav-bar">
                <div className="link-box">
                    <p>{this.props.title}</p>
                </div>
                <div>
                    
                    <ul style={{display:"none"}}>  
                        {this.props.items.map((item)=>{return <li>{item}</li>})}
                    
                    </ul>
                    
                </div>
            
            </div>
        );
    }
        
    
}



export default Dropdownk;