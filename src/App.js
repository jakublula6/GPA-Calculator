import Form  from "./Components/Form";
import Grades from "./Components/Grades";
import Result from "./Components/Result";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import './App.css'
function App() {
  const [state, setState] = useState(
    {
      number: 2,
      weighted: false,
      gpa:0,
      grades:[],
      weights:[]
    });

  return (
    <div className="App" >
      <Routes>
        <Route path="/" element = {<Form state = {state} setState = {setState}/>}/>
        <Route path="/grades" element = {<Grades state = {state} setState = {setState}/>}/>
        <Route path="/result" element = {<Result state = {state} setState = {setState}/>}/>
      </Routes>
    </div>
  );
}

export default App;
