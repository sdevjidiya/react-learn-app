import React from 'react'

export default function Home(props) {

  // const [username, userName] = useState("Guest");
  // const [old, Old] = useState(0);
  

  return (
    <>
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-7">
            {/* {console.log(props)} */}
            {props.children}
            <div className="d-flex justify-content-end mb-4"><span className="btn btn-primary text-uppercase" 
            >Older Posts →</span></div>
            {/* <div className="d-flex justify-content-end mb-4"><span className="btn btn-primary text-uppercase" 
            onClick={ () => {
              Old(!old);
              console.log(old);  
            }}>Older Posts → {old}</span></div>

            {
             old ? (
               <>
                <div className="post-preview">
                <a href="post.html">
                    <h2 className="post-title">Failure is not an option</h2>
                    <h3 className="post-subtitle">Many say exploration is part of our destiny, but it’s actually our duty to future generations.</h3>
                </a>
                <p className="post-meta">
                    Posted by
                    <a href="#!">Start Bootstrap</a>
                    on July 8, 2022
                </p>
            </div>
            <hr className="my-4" />
               </>
             ): ''
            } */}
          </div>
        </div>
      </div>
    </>
  )
}
