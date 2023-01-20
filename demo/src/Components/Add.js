import React from 'react'
import '../CSS/Add.css'
export default function C07() {
    let a=10,b=20
    return (
    <div className='mainTag'>
     <h2>The Addition of a anb b {a+b}</h2>
     <h2>The Subtraction of a and b {a-b}</h2>
     <h2>The Multiplication of a and b {a*b}</h2>
     <h2>The Division of a and b {a/b}</h2>
     <h2>The Remainder of a and b {a%b}</h2>
    </div>
  )
}
