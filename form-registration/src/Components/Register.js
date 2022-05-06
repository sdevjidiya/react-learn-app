import React from 'react';
import styledComponents from 'styled-components';

export default function Register(props) {
  let showIconClasses  = ["bi","show-password"];
  let btnType;
  if(props.showPassword === true){
    showIconClasses.push("bi-eye-slash-fill");
    btnType = 'text';
  }else{
    showIconClasses.push("bi-eye-fill");
    btnType = 'password';
  }

  /* style component use */ 
  // const Button = styledComponents.button`
  //   display: inline-block;
  //   color: palevioletred;
  //   font-size: 1em;
  //   margin: 1em;
  //   padding: 0.25em 1em;
  //   border: 2px solid palevioletred;
  //   border-radius: 3px;
  //   display: block;
  //   background-color:blue;
  // `;


  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-xl-9 mx-auto">
            <div className="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
              <div className="card-img-left d-none d-md-flex"></div>
              <div className="card-body p-4 p-sm-5">
                <h5 className="card-title text-center mb-5 fw-light fs-5">Register</h5>
                <form onSubmit={props.submit}>

                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" name='username' id="username" required/>
                    <label htmlFor="username">Username</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input type="email" className="form-control" name='email' id="email" />
                    <label htmlFor="email">Email address</label>
                  </div>

                  <hr />

                  <div className="form-floating mb-3 position-relative">
                    <input type={btnType} className="form-control" name='password' id="password" />
                    <i className={showIconClasses.join(" ")} onClick={props.click}></i>
                    <label htmlFor="password">Password</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input type={btnType} className="form-control" id="conpassword"/>
                    <label htmlFor="conpassword">Confirm Password</label>
                  </div>

                  <div className="d-grid mb-2">
                    <button className="btn btn-lg btn-primary btn-login fw-bold text-uppercase" type="submit">Register</button>
                  </div>
                  {/* <Button>Normal Button</Button> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
