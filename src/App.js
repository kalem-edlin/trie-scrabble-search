import './App.css';
import {useState, useEffect} from 'react';
import React from 'react';
import TrieNode from './config/Trie'
import processData from './config/testWords';
import WordSearch from './components/WordSearch';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory 
} from "react-router-dom";


function App() {
  let history = useHistory();

  const [threeLetters, setThreeLetters] = useState(false)
  const [fourLetters, setFourLetters] = useState(false)
  const [fiveLetters, setFiveLetters] = useState(false)
  const [sixLetters, setSixLetters] = useState(false)
  const [sevenLetters, setSevenLetters] = useState(false)
  const [testWords, setTestWords] = useState([])

  useEffect(() => {
    if(threeLetters || fourLetters || fiveLetters || sixLetters || sevenLetters){
      setTestWords(processData(5, [threeLetters, fourLetters, fiveLetters, sixLetters, sevenLetters]));
    }
  }, [threeLetters, fourLetters, fiveLetters, sixLetters, sevenLetters]);


  return (
    <div className="App">
      <button onClick={() => history.push("/users")}>Use Trie search on results from an API of users instead</button>
      <label>How many letters per word?</label>
      <div style={{flexDirection: "row"}}>
        <div>3<input type="checkbox" checked={threeLetters} value="3" onChange={() => setThreeLetters(!threeLetters)} /></div>
        <div>4<input type="checkbox" checked={fourLetters} value="4" onChange={() => setFourLetters(!fourLetters)} /></div>
        <div>5<input type="checkbox" checked={fiveLetters} value="5" onChange={() => setFiveLetters(!fiveLetters)} /></div>
        <div>6<input type="checkbox" checked={sixLetters} value="6" onChange={() => setSixLetters(!sixLetters)} /></div>
        <div>7<input type="checkbox" checked={sevenLetters} value="7" onChange={() => setSevenLetters(!sevenLetters)} /></div>
      </div>
      {testWords.length > 0 && <WordSearch testWords={testWords} /> }
    </div>
  );
}

export default App;
