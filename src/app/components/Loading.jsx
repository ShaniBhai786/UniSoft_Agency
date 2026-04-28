import React from 'react'
import newLogo from "../../app/logo.jpeg"
import Image from 'next/image'

function Loading() {
  return (
    <>
     <div className="loading_container">
        <div className="loading">
            <div className="imgload"><Image src={newLogo} alt="logo" /></div>
                <div className="dotsDiv">
                    <span>Working on it</span>
                    <span className='dot'></span>
                    <span className='dot'></span>
                    <span className='dot'></span>
                </div>
        </div>
     </div> 
    </>
  )
}

export default Loading
