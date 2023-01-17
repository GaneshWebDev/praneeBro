import React from 'react';
import '../App.css'
function Qualification(){
    return(
            <div className="column-2a">
            <span>Education Qualification</span>
            <table className="table-style">
            <tr id='head'>
            <td>Qualification</td>
            <td>Marks/Grade</td>
            <td>Institution</td>
            <td>Year of Pass out</td>
            </tr>
            <tr>
            <td className="q">MCA</td>
            <td className="g">7.8 CGPA</td>
            <td className="i">PB Siddhartha College Of Arts & Science</td>
            <td className="y">2022</td>
            </tr>
            <tr>
            <td  className="q">B.Sc Computer Science</td>
            <td className="g">6.8 CGPA</td>
            <td className="i">Andhra Loyola College</td>
            <td className="y">2020</td>
            </tr>
            <tr>
            <td  className="q">Intermediate</td>
            <td className="g">87%</td>
            <td className="i">Chaitanya Junior College Nandigama</td>
            <td className="y">2017</td>
            </tr>
            <tr>
            <td  className="q">SSC</td>
            <td className="g">7.8 CGPA</td>
            <td className="i">Gowtama Model School</td>
            <td className="y">2015</td>
            </tr>
            </table>
            </div>
    )
}
export default Qualification;