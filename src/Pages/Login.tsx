// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";

// import styled from "styled-components";
// import { login } from "../redux/Authentication/action";
// import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
// import { useRef } from "react";
// import { LOGIN_SUCCESS } from "../redux/actionTypes";

// import { Dispatch } from "redux";

// interface State {
//   authReducer: {
//     isAuth: boolean;
//     // Add other properties if necessary
//   };
// }

// // interface User{
// //   email:"",
// //   password:""
// // }


 //function Login() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const emailRef = useRef<HTMLInputElement>(null);
//   const passwordRef = useRef<HTMLInputElement>(null);
//   const dispatch = useDispatch();
//   const isAuth = useSelector((store: State) => store.authReducer.isAuth);


//   const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const email = emailRef.current?.value;
//     const password = passwordRef.current?.value;

//     dispatch(login({email, password})).then(()=> {
      
        
//         navigate(location.state, { replace: true })
      
//     })
//   };


  // return (
//     <DIV auth={isAuth.toString()}>
//       <div className="box">
//         <h1>Login</h1>

//         <form onSubmit={handleSubmit} className="formData">
//           <input
//             type="email"
//             placeholder="Enter email"
//             ref={emailRef}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Enter password"
//             ref={passwordRef}
//             required
//           />
//           <button>Login</button>
//           <p>Don't have account <Link to="/signup"><span style={{ color: "red" }}>Register</span></Link></p>
//         </form>
//       </div>
//     </DIV>
// );
// }

// const DIV = styled.div`
//  width: 100%;
//     .box{
//       width: 400px;
//       margin: auto;
//       box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 10px;
//       padding: 20px;
//       border-radius: 10px;
//       margin-top: 50px;
//     }
//     .formData{
//       display: flex;
//       flex-direction:column;
//       gap: 20px;
//     }
//     input{
//       padding: 5px;
//     }
//     button{
//       padding: 5px;
//       border-radius: 10px;
//       background-color:  #47bd47;;
//       color: aliceblue;
//       font-size: 20px;
//     }
//     h1 {
//       font-size: 30px;
//       margin-bottom:20px;
//       color:red;
//     }
//     input {
//        padding: 8px;
//        border-radius: 5px;
//        border: 1px solid grey;
//     }
// `

//  export default Login