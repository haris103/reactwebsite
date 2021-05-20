import React from 'react';
import web from "../src/images/h.jpg";
import Common from './Common';
const Home =()=>{
    return(
        <>
{/* <section id="header" className="d-flex align-items-center">
<div className="container-fluid nav_bg">
<div className="row">
<div className="col-10 mx-auto">
<div className="row">
<div className="col-md-6 pt-ld-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
<h1>
Grow Your Business with <strong className="brand-name">Haris Mahmood</strong>
</h1>
<h2 className="my-3">
we are a Team of talented Devs.
</h2>
<div className="mt-3">
<NavLink to="/service" className="btn-get-started">Get Started</NavLink>
</div>
</div>
<div className="col-lg-6 order-1 order-lg-2 header-img">
<img  src={web} className="img-fluid animated" alt="img of animated"/>
</div>
</div>
</div>
</div>
</div>
</section> */}
<Common 
    name='Grow Your Business with '
    imgsrc={web}
    visit="/service"
    btname='Get Startedd'
/>
        </>
    )
}
export default Home;