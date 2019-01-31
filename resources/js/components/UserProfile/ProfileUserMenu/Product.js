import React from "react";
import {thumbofprod} from "../../img/images";
import "./MyProduct.css"

export default function Product(props){
    const style = {
        bottom:"5px",
    }

    return(
        <div className="single-product">
            <img src={thumbofprod[props.info.id-1]}/>
            <h4 style={style}>Product Name: {props.info.productname}</h4>
        </div>
    )
}