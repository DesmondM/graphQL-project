import React, {useState} from "react";
import "../index.css";

function FormDes() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
const [submitted, setSubmitted] = useState(false);
const [valid, setValid] = useState(false);

  const handleFormNameInputChange = (event)=>{
    setValues({...values, firstName: event.target.value})  // "...values" takes a copy of current values
  }
  const handleFormLastnameInputChange = (event)=>{
    setValues({...values, lastName: event.target.value})  // "...values" takes a copy of current values
  }
    const handleFormEmailInputChange = (event)=>{
    setValues({...values, email: event.target.value})  
  }

  const handleSubmit = (event)=>{
    event.preventDefault();
    if(values.firstName && values.lastName && values.email){
      setValid(true);
    }
    setSubmitted(true);
  }
  return (
    <div class="form-container">
      <form class="register-form" onSubmit={handleSubmit}>
        {submitted && valid? <div className="success-message">Succesfully Registered</div> : <div className= "form-heading">FILL IN THE FORM</div>}
    
          <input
        onChange ={handleFormNameInputChange}
        value={values.firstName}
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        {submitted && !values.firstName? <span>Please enter your first name</span> : null}
        
        <input
         onChange = {handleFormLastnameInputChange}
          value={values.lastName}
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
       {submitted && !values.lastName? <span>Please enter your surname</span> : null}
        
        <input
          onChange = {handleFormEmailInputChange}
          value ={values.email}
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
        {submitted && !values.email?<span>Please enter your valid email</span> :null}
        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}


export default FormDes