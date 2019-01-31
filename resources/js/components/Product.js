import React, {Component} from 'react';
import "./../css/Product.css";
export default class Product extends Component{

    constructor(props) {
        super(props);
        this.state = {
            product: [],
            isLoaded: false,

        }
    }

    componentDidMount() {
        fetch('/api/product/'+ this.props.id )
            .then(response => {
                return (response.json());
            })
            .then(json => {
                //Fetched product is stored in the state
                this.setState({
                    isLoaded: true,
                    product: json,
                });
            });
    }



    render=()=>{
        var {isLoaded,product}=this.state;
        if(!isLoaded){
            return(
                <h1>Loading........</h1>
            )
        }
        else{

        return(
            <div>
                <div className="product-box" style={{width:"100%",border:"1px solid white"}} className="product-view">
                    <a href={this.props.product_link} className="product-top">
                        {console.log(this.props.data)}
                        <img style={{width:"100%"}} src={require('./img/'+ this.product.img_path)}/>
                    </a>

                    <div className="product-info">
                        <ul className="product-data">
                            <li className="product-name">{this.props.name}</li>
                            <li className="min-quantity">min quantity : {this.props.min_quantity}</li>
                            <li className="price">{this.props.price}</li>
                            <li className="location">product location : {this.props.location}</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
        }
    }
}