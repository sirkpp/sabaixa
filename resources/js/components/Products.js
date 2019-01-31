import React, { Component } from 'react';
import Product from "./Product";
import "./../css/Product.css";

export default class Products extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            isLoaded: false,

        }
    }

    componentDidMount() {
        fetch('/api/product/count/'+ this.props.count)
            .then(response => {
                return (response.json());
            })
            .then(json => {
                //Fetched product is stored in the state
                this.setState({
                    isLoaded: true,
                    products: json,
                });
            });
    }






    render = ()=>{
        var {isLoaded,products}=this.state;
        if(!isLoaded){
            return(
                <h1>Loading........</h1>
            )
        }
        else{



        return(
            
            <div>
                <div className="Products">
                    <h1 style={{ width: "100%", padding: "30px 0px", textAlign: "center" }}>Companies</h1>
   
                    {
                        
                        <div className="products">
                            {products.map(item=>(
                                <div className="product" key={item.id}>
                                {console.log(item.id)}
                                    <Product info={item.id}/>
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

