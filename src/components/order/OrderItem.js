import React from "react";
import twomember from "../../image/2MemberTable.webp";
import fourmember from "../../image/4MemberTable.jpg";
import sixmember from "../../image/6MemberTable.jpg";
import { useDispatch } from "react-redux";



const OrderItem = (props) => {
 
  console.log("propswsss",props.item)
  function AddTable1(prop){
    console.log("addtable",prop)
   alert("Table Booked")
   //localStorage.setItem('table',props)
   window.location.reload(false)

  }

  const dispatch = useDispatch();
  return (
    <div className="col-5 col-md-8 col-lg-4 mx-0 mb-4">
      <div className="card p-0 overflow-hidden h-100 shadow">
      
         
          {props.title === "2MemberSheet" && (
          <img src={twomember} className="card-img-top img-fluid" />
        )}
          {props.title === "4MemberSheet" && (
          <img src={fourmember} className="card-img-top img-fluid" />
        )}
          {props.title === "6MemberSheet" && (
          <img src={sixmember} className="card-img-top img-fluid" />
        )}
      
       
        
        <div className="card-body text-center">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text"> {props.status}</p>
          {props.status === "active" && (
            <button className="btn btn-success" onClick={()=>dispatch(AddTable1({data:props.item}))} >BookTable</button>
        )}
          
        </div>
      </div>
    </div>
  );
};
export default OrderItem;
