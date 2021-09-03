import React from 'react';
import {Link} from 'react-router-dom';

function Thanks(){
    return(
        <div style={{marginTop:"-10vh"}} className="container jumbotron text-center mb-2 font-italic">
            <img src="/h.png" alt="logo" height="150px"/><br></br>
            <h1 className="text-info">Thank you , enjoy !</h1>
            <h6 className="text-muted">Your order has been placed Successfully.</h6>
            <Link to="/" style={{borderRadius:"20px 20px 20px 20px"}} className="btn btn-danger">SHOP MORE <span className="fa fa-shopping-basket"></span></Link>
        </div>
    );
}

export default Thanks;