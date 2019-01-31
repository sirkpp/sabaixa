import React, { Component } from 'react';
import Company from "./Company";
import "./../css/company.css";

export default class Companies extends Component {

    constructor(props) {
        super(props);
        this.state = {
            companies: [],
            isLoaded: false,

        }
    }

    componentDidMount() {
        fetch('/api/user/count/'+ this.props.id)
            .then(response => {
                return (response.json());
            })
            .then(json => {
                //Fetched product is stored in the state
                this.setState({
                    isLoaded: true,
                    companies: json,
                });
            });
    }






    render = ()=>{
        var {isLoaded,companies}=this.state;
        if(!isLoaded){
            return(
                <h1>Loading........</h1>
            )
        }
        else{



        return(
            <div>
                <div className="companies">
                    <h1 style={{ width: "100%", padding: "30px 0px", textAlign: "center" }}>Companies</h1>
                    
                    {
                        <div className="companies">
                            {companies.map(item=>(
                                <div className="company" key={item.id}>
                                    <Company info={[item.id,3]}/>
                                </div>
                            ))}
                        </div>
                    }                    
                </div>
            </div>
        );
                }
    }
}

