
import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import './../css/navigation.css';
import SearchForm from './mini_parts/SearchForm';

class Navigation extends Component{

    getItem=(e)=>{
        const productName=e.target.elements.productName.value;
        e.preventDefault();//prevents from refrehing
        console.log(productName);
    }

    render=()=>{
        return(
            <div className="nav-bar-k">
                <ul style={{display:"flex", alignItems:"center", justifyContent:"center" }}>
                    <li >
                        <NavLink to="/"><span className="site-name">Byapar</span></NavLink>
                    </li>

                    <li style={{display:"flex", alignItems:"center", justifyContent:"center" }}>
                        <SearchForm getItem={this.getItem}/>
                    </li>
                    
                    <li className="auth-part-k">
                        <NavLink to="/new" class="login-k">Login</NavLink>
                        <NavLink to="/new" class="register-k">Register</NavLink>
                    </li>
                </ul>
            
            </div>
            
           


        );
    }
        
    
}



export default Navigation;