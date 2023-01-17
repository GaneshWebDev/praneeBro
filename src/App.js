import './App.css';
import React,{useState} from 'react';
import Header from './Components/header';
import Details from './Components/Details';
import Qualification from './Components/Qualification';
import Skills from './Components/Skills';
import Certifications from './Components/certificates';
function App() {
  const [div,setdiv]=useState(Details)
  const handler=(e)=>{
    setdiv(e);
  }
  return (
      <div>
         <Header setdiv={setdiv}/>
         {div}
      </div>
      
  );
}

export default App;
