import React,{useState} from 'react';
import * as Colors from '../assets/everCommColor'
import Switch from 'react-switch'
const ChillerName=(props)=>{
    const [check, setCheck] = useState(false)
    const handleChange=()=>{
        setCheck(!check)
    }
    return(
<div className="d-flex justify-content-between py-3">
 <label className="pl-1" style={{color:`${Colors.text1}`}}>{props.name}</label>
 <label htmlFor="material-switch">
     <span style={{color:`${Colors.text1}`,fontSize:'14px'}}>Dynamic Mode</span>
     <Switch
     onChange={handleChange} checked={check}
    onColor="#86d3ff"
    onHandleColor="#2693e6"
    handleDiameter={30}
    uncheckedIcon={false}
    checkedIcon={false}
    boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
    activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
    height={10}
    width={35}
    handleDiameter={20}
    className="react-switch"
    id="material-switch"

  />
     
     
 </label>
</div>
    )
}
export default ChillerName