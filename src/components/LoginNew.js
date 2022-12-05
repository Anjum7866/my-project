import React from "react";

const Login= ()=> {
      return (
        <>
          
<div className="card">
<form>

<h3 style={{    textAlign: "center"}}> Admin Log in</h3>
<div className="form-group">
    <label>Email</label>
    <input type="email" className="form-control" placeholder="Enter email" />
</div>

<div className="form-group">
    <label>Password</label>
    <input type="password" className="form-control" placeholder="Enter password" />
</div>


<button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>

</form>
      
</div>
  </>
          
        );
    
}
export default Login