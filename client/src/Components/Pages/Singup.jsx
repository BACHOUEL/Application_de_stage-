import React , {useState , useEffect} from 'react'
import axios from 'axios'
const Singup = (props) => {
    const [valuesInput, setValues] = useState({});

    const MyValueInput = (event) => {
        let res = valuesInput;
        res[event.target.name] = event.target.value;
        setValues(res);
      };

      const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
          await axios.post(
            "http://localhost:8000/api/users/singup",
            valuesInput
          );
          alert("compte créé")
          props.history.push("/login");
        } catch (error) {
           console.log(error) 
          
        }
        
      };



    return (   <div className="container">
    <div className="row">
      <div className="col-md-6">
        <div className="card">
          <form onSubmit={handleFormSubmit} className="box">
            <h1>Singup</h1>
            <input type="text" name="nomUser"  placeholder="Username" onChange={MyValueInput}/>
            <input type="text" name="adresseEmail" placeholder="Email" onChange={MyValueInput}/>
            <input type="password" name="password" onChange={MyValueInput} placeholder="Password" />{" "}
       
            <input type="submit" name defaultValue="Login" href="#" />
          </form>
        </div>
      </div>
    </div>
  </div> );
}
 
export default Singup;