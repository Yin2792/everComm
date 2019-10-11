import React from 'react'
import * as Colors from '../assets/everCommColor'
const ButtonStyle=()=>{
  return {
    outline:"none",
    color:"red",
    boxShadow:"none",
    borderTop:"none",
    borderRight:"none",
    borderBottom:"1px solid rgb(31,169,255)",
    borderLeft:"none",
    borderImage:"initial",
    borderRadius:"0px",
    color:`${Colors.text1}`
  }
}
const ChillerTab=() =>{
    return(
  <div className="row align-items-center">
    <div className="col-sm-3 pl-3 pr-0">
        <div className="d-flex align-items-center" style={{fontSize:"20px"}}>
           <b className="px-0" style={{color:`${Colors.text1}`}}>Chiller</b>
           <i className="fas fa-circle px-1" style={{color:`${Colors.FontAwsomeColor}`,fontSize:"12px"}}></i>
        </div>
    </div>
    <div className="col-sm-8 px-0 py-1">
     <div className="d-flex d-flex-reverse">
      <div>
      <button type="button"
       className="btn btn-sm mx-1"
        style={ButtonStyle()} style={{bordrim}}><b>Real-time</b></button>
      </div>
     </div>
    </div>
  </div>
    )

}
export default ChillerTab