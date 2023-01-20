import React from 'react'
import '../CSS/SingUp.css'
export default function SingUp() {
    return (
        <div className='parent'>
            <p className='para'>Have an<br></br>account?</p>
            <p className='para1'>Lorem pata nhi yha kya hai</p>
            <button className='btn'>Login</button>
            <div className='d'>
                <h2>REGISTER</h2>
                <input type='text' placeholder='Email'  className='txt1'/>
                <input type='password' placeholder='Password'  className='txt2'/><br></br>
                <input type='password' placeholder='Confirm Password'  className='txt3'/>
                <button className='r'>REGISTER</button>
            </div>
            By:M.Maurya
        </div>
    )
}
