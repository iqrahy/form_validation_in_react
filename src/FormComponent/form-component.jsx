import React, { useEffect, useState } from "react";

const FormComponent = () => {
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [userErr, setUserErr] = useState({
    firstErr: false,
    lastErr: false,
    emailErr: false,
    passwordErr: false,
    confirmPasswordErr: false,
  });

  const formHandling = (e) => {
    e.preventDefault();
    console.log(userDetails);

    if (
      userDetails.firstName === "" &&
      userDetails.lastName === "" &&
      userDetails.email === "" &&
      userDetails.password === "" &&
      userDetails.confirmPassword === ""
    ) {
      setUserErr({
        firstErr: true,
        lastErr: true,
        emailErr: true,
        passwordErr: true,
        confirmPasswordErr: true,
      });
    }


    if(userDetails.confirmPassword !== userDetails.password){
      
      setUserErr({confirmPasswordErr:true})
    }


  };

  useEffect(() => {
    
    if(userDetails.firstName !==""){
      setUserErr({...userErr ,firstErr:false})
    }
    if(userDetails.lastName !==""){
      setUserErr({...userErr, lastErr:false})
    }
    if(userDetails.email !== ""){
      setUserErr({...userErr, emailErr:false})
    }
    if(userDetails.password !== ""){
      setUserErr({...userErr, passwordErr:false})
    }
    if(userDetails.confirmPassword !== ""){
      setUserErr({...userErr, confirmPasswordErr:false})
    }

  }, [userDetails]);

  return (
    <>
      <main className="form-signin w-25 m-auto py-4">
        <form onSubmit={formHandling}>
          <h1 className="h4 mb-3 fw-medium text-center">User Details</h1>

          <div className="form-floating mb-3">
            <input
              type="text"
              style={{ border: userErr.firstErr && "1px solid red" }}
              value={userDetails.firstName}
              className="form-control"
              id="floatingInput"
              placeholder="First Name"
              onChange={(e) => {
                setUserDetails({ ...userDetails, firstName: e.target.value });
              }}
            />
            <label htmlFor="floatingInput">First Name</label>
            {userErr.firstErr && (
              <span className="text-danger">Enter your first name</span>
            )}
          </div>

          <div className="form-floating mb-3">
            <input
              type="text"
              style={{ border: userErr.lastErr && "1px solid red" }}
              value={userDetails.lastName}
              className="form-control"
              id="floatingInput"
              placeholder="Last Name"
              onChange={(e) => {
                setUserDetails({ ...userDetails, lastName: e.target.value });
              }}
            />
            <label htmlFor="floatingInput">Last Name</label>
            {userErr.lastErr && (
              <span className="text-danger">Enter your last name</span>
            )}
          </div>

          <div className="form-floating mb-3">
            <input
              type="email"
              style={{ border: userErr.emailErr && "1px solid red" }}
              value={userDetails.email}
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              onChange={(e) => {
                setUserDetails({ ...userDetails, email: e.target.value });
              }}
            />
            <label htmlFor="floatingInput">Email address</label>
            {userErr.emailErr && (
              <span className="text-danger">Enter your email</span>
            )}
          </div>

          <div className="form-floating mb-3">
            <input
              type="password"
              style={{ border: userErr.passwordErr && "1px solid red" }}
              value={userDetails.password}
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              onChange={(e) => {
                setUserDetails({ ...userDetails, password: e.target.value });
              }}
            />
            <label htmlFor="floatingPassword">Password</label>
            {userErr.passwordErr && (
              <span className="text-danger">Enter password</span>
            )}
          </div>

          <div className="form-floating mb-3">
            <input
              type="password"
              style={{ border: userErr.confirmPasswordErr && "1px solid red" }}
              value={userDetails.confirmPassword}
              className="form-control"
              id="floatingPassword"
              placeholder="Confirm Password"
              onChange={(e) => {
                setUserDetails({
                  ...userDetails,
                  confirmPassword: e.target.value,
                });
              }}
            />
            <label htmlFor="floatingPassword">Confirm Password</label>
            {userErr.confirmPasswordErr && (
              <span className="text-danger">Enter confirm password</span>
            )}
          </div>

          <button className="btn btn-success w-100 py-2" type="submit">
            Sign in
          </button>
        </form>
      </main>
    </>
  );
};

export default FormComponent;
