import React, { Component } from 'react';
import CompanyByData from "./CompanyByData";
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
        fetch('/api/company/count/'+ this.props.count)
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
                            <CompanyByData data={item}/>
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

