import React from 'react'

export default function Questions(props) {
  return (
    <>
      <div className='container d-flex justify-content-center'>
        <div className='quiz-card card p-2 border-0'>
          <div className='card-body'>
            <form onSubmit={props.submit}>
              <div className="mb-3">
                <label htmlFor="q1" className="form-label"><span className='quiz-count'>3.</span> What are you currently doing ?</label><br/>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" value="Teaching" name="q1" id="inlineRadio1" autoComplete='off' required/>
                  <label className="form-check-label" htmlFor="inlineRadio1">Teaching</label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="q1" value="Student" id="inlineRadio2" autoComplete='off' required/>
                  <label className="form-check-label" htmlFor="inlineRadio2">Student</label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="q1" value="Programmer" id="inlineRadio3" autoComplete='off' required/>
                  <label className="form-check-label" htmlFor="inlineRadio3">Programmer</label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="q1" value="Other" id="inlineRadio3" autoComplete='off' required/>
                  <label className="form-check-label" htmlFor="inlineRadio3">Other</label>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="q2" className="form-label"><span className='quiz-count'>4.</span> Please rate our course.</label><br/>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="q2" value="Poor" id="inlineRadio4" autoComplete='off' required/>
                  <label className="form-check-label" htmlFor="inlineRadio4">Poor</label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="q2" value="Good" id="inlineRadio5" autoComplete='off' required/>
                  <label className="form-check-label" htmlFor="inlineRadio5">Good</label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="q2" value="Excellent" id="inlineRadio6" autoComplete='off' required/>
                  <label className="form-check-label" htmlFor="inlineRadio6">Excellent</label>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="questionFiveId" className="form-label"><span className='quiz-count'>5.</span> Write your review here.</label>
                <textarea className="form-control" id="questionFiveId" name='q3' rows="3" required></textarea>
              </div>
              <button type='submit' className='btn btn-custom-primary'>Save</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
