import React from 'react'
import logo from '../images/zoomcar_logo.png';

export default function Navbar({menu,setmenu}) {

  return (
    <div>
        <div className='nav' style={{
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center",
            padding:"10px"
            }}>

            {/* Logo And Hamburger*/}

            <div className="logo_hamburger_parent" style={{
                display:"flex",
                justifyContent:"space-between",
                alignItems:"center",
                gap:"20px"
                }}>
                <div className="hamburger" onClick={()=>{
                    if(menu){
                        setmenu(false);
                    }
                    else{
                        setmenu(true);
                    }
                }} style={{cursor:"pointer"}}>
                <i style={{color:"white",fontSize:"1.5rem"}} class="bi bi-list"></i>
                </div>
                <div className="logo" style={{width:"180px"}}>
                    <img src="https://www.zoomcar.com/blog/wp-content/uploads/2020/03/footer-logo.png" alt="" />
                </div>
            </div>  

            {/* become A Host and Sign in Sign Up */}
            <div className="host_signin_parent" style={{
                display:"flex",
                alignItems:"center",
                gap:'20px'
            }}>
                <div className="host">
                    <div style={{
                        display:"flex",
                        justifyContent:"space-around",
                        alignItems:"center",
                        gap:"10px",
                        background:"white",
                        padding:"10px 15px",
                        borderRadius:"30px"
                        }} className="host_btn">
                        <img src={logo} style={{width:"24px"}} alt="" />
                        <p className='become_host_txt' style={{fontSize:"1.1rem",margin:"0"}}>Become a Host</p>
                    </div>
                </div>

                <div className="signup">
                <div style={{
                        color:"white",
                        display:"flex",
                        alignItems:"center",
                        gap:'10px',
                        fontWeight:"bold",
                        paddingRight:"20px"
                    }}>
                        <p style={{margin:"0",fontSize:"1.1rem"}}>Login/Signup</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}
