import React, { useState } from 'react'
import bg from '../images/bg-img.jpg';
import { Link } from 'react-router-dom'; 

const NavAvail = () => {
const[clicked,setClicked]=useState(false)
  return (
    <div>
        <center>
            <div className='avail-img' >
                <img src={bg} alt='bg'></img>
            </div>
            <div className='avail-txt'>
              <h1>WELCOME TO PARK PLACE</h1>
              
              <p> Located in the convenient Lakeline neighborhood just northwest of Austin, Park Place features two-level houses offering accessibility to outdoor recreation in the adjacent Lakeline Park. Just minutes away from great schools, family entertainment centers, and major employers, it’s a place anyone would love to call home.</p>
              {!clicked ? (
          <button className="avail-txt-img"onClick={()=>setClicked(true)}>AVAILABILITY</button>
        ) : (
          <Link to="/AVAILABILITY">
            <button>AVAILABILITY</button>
          </Link>
        )}
            </div>
        </center>
      
    </div>
  )
}

export default NavAvail
