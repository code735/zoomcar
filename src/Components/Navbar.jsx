import React from 'react'
import logo from '../images/zoomcar_logo.png';

export default function Navbar() {
  return (
    <div>
        <div className='nav' style={{
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center",
            padding:"20px"
            }}>

            {/* Logo And Hamburger*/}

            <div className="logo_hamburger_parent" style={{
                display:"flex",
                justifyContent:"space-between",
                alignItems:"center",
                gap:"20px"
                }}>
                <div className="hamburger">
                <i style={{color:"white",fontSize:"2rem"}} class="bi bi-list"></i>
                </div>
                <div className="logo" style={{width:"150px"}}>
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
                        gap:"20px",
                        background:"white",
                        padding:"5px"
                        }}>
                        <img src={logo} style={{width:"30px"}} alt="" />
                        <p style={{fontWeight:"bold"}}>Become a Host</p>
                    </div>
                </div>

                <div className="signup">
                <div style={{
                        color:"white",
                        display:"flex",
                        alignItems:"center",
                        gap:'5px'
                    }}>
                        <i class="bi bi-person-circle"></i>
                        <p>SignUp/SignIn</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}
