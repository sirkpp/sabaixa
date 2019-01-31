import React, { Component } from 'react';
import Product from "./Product";
import "./../css/company.css";

export default class Company extends Component {
    constructor(props) {
        super(props);
        this.state = {
            company: [],
            isLoaded: false,

        }
    }

    componentDidMount() {
        fetch('/api/company/' + this.props.id)
            .then(response => {
                return (response.json());
            })
            .then(json => {
                //Fetched product is stored in the state
                this.setState({
                    isLoaded: true,
                    company: json,
                });
            });
    }






    render = () => {
        var { isLoaded, company } = this.state;
        console.log(company);
        if (!isLoaded) {
            return (
                <h1>Loading........</h1>
            )
        }
        else {

            return (
                <div className="ind-company">
                    <div className="company-header">
                        <h3><span> Experience : {company.experience} years </span>    {company.name}</h3>
                    </div>
                    <div className="body-content">

                        <div className="products">

                            {
                                <div className="product">
                                    {company.products.map(id => (
                                        <div className="ind-product" key={id}>
                                            <Product data={id} />
                                        </div>
                                    ))}
                                </div>
                            }

                        </div>

                        <div className="details">
                            <ul>
                                <li>
                                    <span className="title-k">Main Products </span>: {company.main_products}
                                </li>
                                <li>
                                    <span className="title-k">Country/Region </span> : {company.location}
                                </li>
                                <li>
                                    <span className="title-k">Total Revenue </span> : Rs. {company.total_revenue} lakh
                                </li>
                                <li>
                                    <span className="title-k">Top Markets </span> : {company.top_markets}
                                </li>
                                <li>
                                    <span className="title-k">Response Rate </span> : {company.service_rating}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <button>Contact</button>
                        <button>
                            Leave Message
                    </button>
                    </div>
                </div>
            );
        }
    }
}
