import React, { useState } from 'react'
import About from './About';
import Blogs from './Blogs';
import Career from './Careers';
import Help from './Help';
import './BtmNav.css';

export default function BtmNav() {
    let [comp,setComp] = useState(<About/>);

  return (
    <div style={{
        background:"#383838",
        color:'white',
        padding:"3%"
    }}>
        <div style={{
            paddingBottom:"2%"
        }} className='btn_nav' id='btm_id'>
            <nav style={{
                display:'flex',
                alignItems:"center",
            }}>
                <p onClick={()=>{
                    setComp(<About/>)
                }}
                >ABOUT US</p>

                <p onClick={()=>{
                    setComp(<Blogs/>)
                }}>BLOGS</p>

                <p onClick={()=>{
                    setComp(<Career/>)
                }}>CAREERS</p>

                <p onClick={()=>{
                    setComp(<Help/>)
                }}>HELP & SUPPORT</p>         
            </nav>
        </div>
        {comp}
    </div>
  )
}
