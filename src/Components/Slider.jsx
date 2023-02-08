import React from 'react'
import zoomcar from '../images/zoomcar_logo.png';

export default function Slider({setmenu,menu}) {

const styles = {
    show:{
        position:"absolute",
        top:"0",
        background:"#0000007a",
        width:"100%",
        height:"100vh",
        display:"flex",
        zIndex:"2"
    },
    hide:{
        position:"absolute",
        top:"0",
        background:"#0000007a",
        width:"100%",
        height:"100vh",
        display:"none",
        zIndex:"2"
    }
}

  return (
    <div className='menu' style={menu ? styles.show : styles.hide}>
        <div style={{
            background:"white",
            width:"30vw"
            }}>
                <ul style={{listStyle:"none",padding:"0"}}>
                    <li style={{
                        padding: "15px 20px",
                        background: "#fbf4f4",
                        display:'block'
                    }}>
                        <i class="bi bi-person-fill"></i> Login or Signup
                    </li>
                    <li>
                        <div style={{display:'flex',alignItems:"center"}}><i style={{fontSize:"24px"}} class="bi bi-geo-alt"></i> <p style={{marginLeft:"13px",marginBottom:"0"}}>Change City</p></div>
                        <p style={{
                            margin:"0",
                            color:"#10a310",
                            fontWeight:"bold",
                            fontSize:"16px"
                        }}>Mumbai</p>
                    </li>
                    <li>
                        <div style={{
                            display:"flex",
                            alignItems:"center",
                            gap:"12px"
                        }}>
                            <span style={{
                                width:"24px"
                            }}>
                            <img src={zoomcar} alt="" />
                            </span>
                            <p style={{margin:"0"}}>Become a Host</p>
                        </div>
                    </li>
                    <li>
                        <div style={{
                                display:"flex",
                                alignItems:"center",
                                gap:"12px"
                            }}>
                                <span style={{
                                    fontSize:"24px"
                                }}>
                                    <i class="bi bi-file-earmark-text"></i>
                                </span>
                                <p style={{margin:"0"}}>Zoomcar Fleet Vehicles Policies</p>
                        </div>
                    </li>
                    <li>
                    <div style={{
                                display:"flex",
                                alignItems:"center",
                                gap:"12px"
                            }}>
                                <span style={{
                                    fontSize:"24px"
                                }}>
                                    <i class="bi bi-file-earmark-text"></i>
                                </span>
                                <p style={{margin:"0"}}>Zoomcar Host Vehicles Policies</p>
                        </div>
                    </li>
                    <li>
                    <div style={{
                                display:"flex",
                                alignItems:"center",
                                gap:"12px"
                            }}>
                                <span style={{
                                    fontSize:"24px"
                                }}>
                                    <i class="bi bi-telephone"></i>
                                </span>
                                <p style={{margin:"0"}}>Help & Support</p>
                        </div>
                    </li>
                    <li></li>
                </ul>
        </div>
        <div style={{width:"70vw",height:"100%"}} onClick={()=>{setmenu(false)}}></div>
    </div>
  )
}
