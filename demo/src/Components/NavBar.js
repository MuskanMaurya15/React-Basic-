import React from 'react'
import '../CSS/NavBar.css'
import logo from '../Images/img.jpg'
import logo2 from '../Images/maurya.jpg'
export default function NavBar() {
    return (
        <div>
            <div className='main'>
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" to="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" to="/">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" to="/">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled">Contact</a>
                    </li>
                </ul>
            </div>
            <button className='btn'>Hire Me</button>

          <img src={logo} alt="img" id='mk'/>
          <h1 className='im'>I'm Muskan Maurya</h1>
            <h1 className='in'>India,Bihar(841238)</h1>
            <p className='p'>
                I'm student of BCA1st year(M. M.H.A.A.F.U) <br></br> <br></br>ipsum.
            </p>
          
            <button className='btn2'>Learn more</button>
            <img src={logo2} alt="mm" className='myPic'/> 
        </div>
    )
}
