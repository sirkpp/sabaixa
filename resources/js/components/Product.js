import React, {Component} from 'react';
import "./../css/Product.css";
export default class Product extends Component{
    render=()=>{
        return(
            <div>
                <div className="product-box" style={{width:"100%",border:"1px solid white"}} className="product-view">
                    <a href={this.props.data[1]} className="product-top">
                        {console.log(this.props.data)}
                        <img style={{width:"100%"}} src={require('./img/'+ this.props.data[0])}/>
                    </a>

                    <div className="product-info">
                        <ul className="product-data" >
                            <li className="product-name">{this.props.data[2]}</li>
                            <li className="min-quantity">min quantity : {this.props.data[3]}</li>
                            <li className="price">{this.props.data[4]}</li>
                            <li className="location">product location : {this.props.data[5]}</li>
                        </ul>
                    </div>
                </div>
            </div>
        );

    }
}