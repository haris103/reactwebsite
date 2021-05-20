import React from 'react';
import { NavLink } from 'react-router-dom';

const Card =(propss)=>{
    return(
        <>
<div className="col-md-4 col-10 mx-auto">
<div className="card" >
  <img className="card-img-bottom card-imgg" src={propss.imgsrc} alt="Card imageee cap"/>
  <div className="card-body">
    <h5 className="card-title">{propss.title}</h5>
    <p className="card-text">{propss.description}</p>
    <NavLink to={propss.visit} className="btn btn-primary">{propss.btname}</NavLink>
  </div>
</div>
</div>
        </>
    )
}
export default Card;