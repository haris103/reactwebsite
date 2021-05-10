import React from 'react';
import web from "../src/images/hh.jpg";
import Common from './Common';
const About =()=>{
    return(
        <>
        <Common 
    name='We are doing good '
    imgsrc={web}
    visit="/contact"
    btname='Contact us'
/>
        </>
    )
}
export default About;