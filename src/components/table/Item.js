import React from "react";
import twomember from "../../image/2MemberTable.webp";
import fourmember from "../../image/4MemberTable.jpg";
import sixmember from "../../image/6MemberTable.jpg";
import { useDispatch } from "react-redux";
import Table from "../../image/round-table.png";
import Table1 from "../../image/round.png"



const Item = (props) => {
 
  console.log("propswsss",props.item)
  function AddTable1(prop){
    console.log("addtable",prop)
   alert("Table Selected")
   localStorage.setItem('table',props)
   window.location.reload(false)

  }
  function selected(prop){
    console.log("addtable",prop)
   alert("Already Selected")
   //localStorage.setItem('table',props)
   window.location.reload(false)

  }

  const dispatch = useDispatch();
  return (
    <div className="col-5 col-md-8 col-lg-3 mx-0 mb-4">
      <div className="card p-0 overflow-hidden h-100 shadow">
      
      {props.status === "booked" && (
        <>
        <img src={Table1} className="card-img-top img-fluid" />
      <button className="btn btn-danger sm" >{props.title} </button>
      </>
      )}
          {props.status === "active" && (
            <>
            <img src={Table} className="card-img-top img-fluid" />
            <button className="btn btn-success sm" onClick={()=>dispatch(AddTable1({data:props.item}))} >{props.title}</button>
            </>
        )}
          
        </div>
      </div>
    
  );
};
export default Item;
