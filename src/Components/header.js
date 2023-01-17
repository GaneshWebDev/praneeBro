import React from 'react';
import '../App.css';
import Details from './Details';
import Qualification from './Qualification';
import Skills from './Skills';
import Certifications from './certificates';
function Header(props){
    return(
        <div className='header'>
            <div>
            <img src='https://t4.ftcdn.net/jpg/03/16/32/23/360_F_316322355_m8FC5EDRun5JOAAHD94CvW1uUScY5IFh.jpg'/>
            </div>
            <div className='btn'>
            <a  onClick={()=>props.setdiv(Details)}>Home</a>
            <a  onClick={()=>props.setdiv(Qualification)}>Qualification</a>
            <a  onClick={()=>props.setdiv(Skills)}>Skills</a>
            <a  onClick={()=>props.setdiv(Certifications)}>Certifications</a>
            <a>Contact</a>
            </div>
        </div>
    )
}
export default Header;