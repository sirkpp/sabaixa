import React, {Component} from "react";
import "./AccountSetting.css";

export default class AccountSetting extends Component{
    render(){
        return (
            <div>
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
            </div>
        );
    }
}