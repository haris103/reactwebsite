import React, { useState } from 'react';

const Contact =()=>{
    const[data,setData] = useState({
        fullname:"",
        phone:"",
        email:"",
        msg:"",
    });
    const InputEvent = (eventt)=>{
     const{name,value} = eventt.target;
setData((preVal)=>{
    return{
        ...preVal,
        [name]: value,
    }
})
    }
    const formsubmit = (e)=>{
        e.preventDefault();
        alert(
            `My Full Name is ${data.fullname}. My Mobile number is ${data.phone}.My emailaddress is ${data.email} and here is what i want to say ${data.msg}.`
        )
    }
    return(
        <>
<div className="my-5">
<h1 className="text-center">Contact Us</h1>
</div>
<div className="container contact-div">
<div className="row">
<div className="col-md-6 col-10 mx-auto mb-5">
<form onSubmit={formsubmit}>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">
  Full Name
  </label>
  <input 
  type="text" 
  class="form-control" 
  id="exampleFormControlInput1" 
  name="fullname"
  value={data.fullname}
  onChange={InputEvent}
  placeholder="Enter your Full Name"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">
  Phone
  </label>
  <input 
  type="number" 
  class="form-control" 
  id="exampleFormControlInput1" 
  name="phone"
  value={data.phone}
  onChange={InputEvent}
  placeholder="Mobile No."/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">
  Email address
  </label>
  <input 
  type="email" 
  class="form-control" 
  id="exampleFormControlInput1" 
  name="email"
  value={data.email}
  onChange={InputEvent}
  placeholder="Enter your Email"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">
Message  
</label>
  <textarea 
  className="form-control" 
  id="exampleFormControlTextarea1" 
  rows="3"
  className="msg"
  value={data.msg}
  onChange={InputEvent}
  ></textarea>
</div>
<div class="col-12">
    <button class="btn btn-outline-primary" type="submit">Submit form</button>
  </div>
  </form>
</div>
</div>
</div>       
 </>
    )
}
export default Contact;