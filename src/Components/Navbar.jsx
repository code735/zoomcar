import React from 'react'

export default function Navbar() {
  return (
    <div>
        <div className='nav' style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>

            {/* Logo And Hamburger*/}

            <div className="logo_hamburger" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <div className="hamburger">
                <i style={{color:"white",fontSize:"2rem"}} class="bi bi-list"></i>
                </div>
                <div className="logo">
                    <img src="https://www.zoomcar.com/blog/wp-content/uploads/2020/03/footer-logo.png" alt="" />
                </div>
            </div>  

            {/* become A Host and Sign in Sign Up */}
            

        </div>
    </div>
  )
}
