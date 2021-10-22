import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

const Login = (props) => {
    const [valueInput, setInput] = useState({});
    const [error, setErrors] = useState(false);

    const MyValueInput = (event) => {
      let res = valueInput;
      res[event.target.name] = event.target.value;
      setInput(res)
    };



    const handleFormSubmit = async (event) => {
      event.preventDefault();
  
      try {
         await axios.post(
          "http://localhost:8000/api/users/login",
          valueInput
        );
        setErrors(false);
      
  
        props.history.replace("/");
   
      } catch (error) {
        //console.log(error.response)
        alert(error.response.data);
      }
    };
    
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <form onSubmit={handleFormSubmit} className="box">
              <h1>Login</h1>
        
              <input type="text" name="adresseEmail" placeholder="Email"  onChange={MyValueInput} />
              <input type="password" name="password" placeholder="Password" onChange={MyValueInput} />{" "}
         
              <input type="submit" name defaultValue="Login"  />
              <Link to ='/singup'>Create your Account ! </Link>
                
            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
