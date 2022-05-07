import React from 'react'

export default function Details(props) {
  return (
    <>
      <div className='container d-flex justify-content-center'>
        <div className='quiz-card card p-2 border-0 mb-3'>
          <div className='card-body'>
            <form onSubmit={props.submit}>
              <div className="mb-3">
                <label htmlFor="nameId" className="form-label"><span className='quiz-count'>1.</span> Name</label>
                <input type="text" name='name' className="form-control" id="nameId" placeholder="Please enter your name" autoComplete='off' required/>
              </div>
              <div className="mb-3">
                <label htmlFor="emailId" className="form-label"><span className='quiz-count'>2.</span> Email</label>
                <input type="email" name='email' className="form-control" id="emailId" placeholder="Please enter your email" autoComplete='off' required/>
              </div>
              <button type='submit' className='btn btn-custom-primary'>Next</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
