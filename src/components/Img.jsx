import React from 'react'
import mountain from "../mountains.jpg";
function Img() {
  return (
    <>
        <section className="img h-cover"> 
            <img src={mountain}></img>
        </section>
    </>
  )
}

export default Img