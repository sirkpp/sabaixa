import React from "react";

const Error = () => {
    return(
        <div style={{display:"flex",
                    alignItems:"center",
                    justifyContent:"center",
                    height:"600px",
                    width:"100%"
        }}>
            <h1 style={{fontSize:"86px",
                        color:"red",
                        }}>Error 403
                <br />
                Page doesn't exist</h1>
        </div>
    );
}

export default Error;