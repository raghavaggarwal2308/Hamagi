import React, { useState } from 'react';
import { Link } from "react-router-dom";


function Address(){
    const [nm,setnm]=useState("");
    const [mb,setmb]=useState("");
    const [pin,setpin]=useState("");
    const [add,setadd]=useState("");
    const [pay,setpay]=useState("/buy");

    function checkall(){
        let x=document.getElementById("full").value;
        let y=document.getElementById("mobile").value;
        let z=document.getElementById("pincode").value;
        let w=document.getElementById("ad").value;

        if(x!=="")
        {
            setnm("show");
        }
        else
        {
            setnm("");
        }

        if(y.length===10)
        {
            setmb("show");
        }
        else
        setmb("");

        if(z.length===6)
        {
            setpin("show");
        }
        else
        setpin("");

        if(w!=="")
        {
            setadd("show");
        }
        else
        setadd("");

    }

    function check(){
        if(nm==="show" && mb==="show" && pin==="show" && add==="show"){
            setpay("/pay");
        }
        else
        {
            setpay("/buy");
            alert("Please Enter all details correctly !");
        }
    }

return(
    <div className="container mb-2 mt-2">
        <h3  className="text-center">ADD A NEW ADDRESS</h3>
        <form>
                <h6>Country/Region</h6>
                <select className="rounded" style={{width:"50vw",border:"1px solid orange"}}>
                <option value="India">India</option>
                </select>
                <h6>Full Name</h6>
                <input type="text" id="full" onBlur={checkall} className="rounded" style={{width:"50vw",border:"1px solid orange"}} placeholder="Enter your Name" required />&nbsp;
                <span className={"fa fa-check-circle text-success collapse"+nm}></span>
                <h6>Mobile Number</h6>
                <input type="number" id="mobile" onBlur={checkall} placeholder="Enter 10 digit number" className="rounded" style={{width:"50vw",border:"1px solid orange"}} required/>&nbsp;
                <span className={"fa fa-check-circle text-success collapse"+mb}></span>
                <h6>City</h6>
                <select className="rounded" style={{width:"50vw",border:"1px solid orange"}} required>
                    <option>Delhi</option>
                    <option>Mumbai</option>
                    <option>Chandigarh</option>
                    <option>Kolkata</option>
                    <option>Bangalore</option>
                    <option>Pune</option>
                    <option>Hyderabad</option>
                    <option>Chennai</option>
                    <option>Rajasthan</option>
                    <option>Gujarat</option>
                </select>
                <h6>Pincode</h6>
                <input type="number" id="pincode" onBlur={checkall} className="rounded" style={{width:"50vw",border:"1px solid orange"}} placeholder="Enter 6 digit [0-9] PIN code"/>&nbsp;
                <span className={"fa fa-check-circle text-success collapse"+pin}></span>
                <h6>Address</h6>
                <textarea rows="5" id="ad" onBlur={checkall} placeholder="Enter your Full Address" className="rounded" style={{width:"50vw",border:"1px solid orange",resize:"none"}}></textarea>&nbsp;
                <span className={"fa fa-check-circle text-success collapse"+add}></span>
        </form>
        <Link to={pay} onClick={check} className="btn btn-warning">
                    Go Next <span className="fa fa-arrow-right text-success"></span>
        </Link>
    </div>
);
}
export default Address;