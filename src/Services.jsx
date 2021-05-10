import React from 'react';
import Card from './Card';
import Sdata from './Sdata';

const Services =()=>{
    return(
        <>
<div className="my-5">
<h1 className="text-center">Our Services</h1>
</div>
<div className="container-fluid mb-5">
<div className="row">
<div className="col-10 mx-auto">
<div className="row gy-2">
{
    Sdata.map((val,ind)=>{
        return <Card 
        key={ind}
        imgsrc ={val.imgsrc}
        title={val.title}
        description={val.description}
        btname={val.btname}
        visit={val.visit}
        />
    })
}
</div>
</div>
</div>
</div>
        </>
    )
}
export default Services;