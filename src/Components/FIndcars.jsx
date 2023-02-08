import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function FIndcars() {
    let [trip, settrip] = useState(false)


    const styles = {
        gray:{
            background:"#e3e3e3",
        },
        white:{
            background:"white",
            border:"1px solid #10a310",
            color:"#10a310",
        }
    }

  return (
    <div style={{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        margin:"20px 0"
    }}>
        <div style={{
            display:"flex",
            justifyContent:"center",
            fontSize:"14px" ,
            textAlign:'center',
            width:"100%"  
        }}
        className="trip"
        >
            <div style={trip?styles.gray:styles.white} onClick={()=>{
                settrip(false);
            }} className='round_trip'>
                <i class="bi bi-arrow-left-right"></i>
                <p>Round Trip</p>
            </div>
            <div style={trip?styles.white:styles.gray} onClick={()=>{
                settrip(true);
            }} className='plane_trip'>
                <i class="bi bi-airplane"></i>
                <p>Aeroplane Round Trip</p>
            </div>
        </div>

        {/* Trip Location */}
        

        <Link to="/products">
            <button>Find Cars</button>
        </Link>
    </div>
  )
}
