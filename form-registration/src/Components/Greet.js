import React from 'react'

export default function Greet(props) {
  return (
    <>
      <div className='container text-center py-5'>
        <div className='card shadow-sm bg-white p-3'>
          <h3>{props.name},<br/></h3>
          <p className='text-success mb-0'>Thank you for Register. <br/> Verification sent to</p>
          <h3>{props.email}</h3>
        </div>
      </div>
    </>
  )
}
