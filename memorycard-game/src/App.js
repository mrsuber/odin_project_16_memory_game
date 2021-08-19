
import './App.css';
import Cards from './component/Cards'
import Result from './component/Result'
import {useState} from 'react'

function App() {
  const[miss,setMiss]=useState(0)
  const[score,setScore]=useState(0)
  return (
    <div className="App">
    <Result score={score} miss={miss}/>
    <Cards
    missFunction={miss=>setMiss(miss)}
    scoreFunction={score=>setScore(score)}
    />




    </div>
  );
}

export default App;
