import {useState, useEffect} from 'react';
import React from 'react';
import TrieNode from '../config/Trie'
import { useHistory } from "react-router-dom";

function WordSearch({testWords}) {
  let history = useHistory();

  const [wordsFound, setWordsFound] = useState(null);
  const [rootNode, setRootNode] = useState(new TrieNode(null));

  useEffect(() => {
    console.log(testWords);
    rootNode.addWords(testWords);
    setRootNode(rootNode);
    console.log(rootNode);
  }, [rootNode, setRootNode, testWords])

  const handleChange = (event) =>{
    let prefixCheck = event.target.value;
    if(prefixCheck !== null){
      setWordsFound(rootNode.get(prefixCheck));
    }
    else{ 
      setWordsFound(null);
    }
  }

  

  return (
    <div className="App">
      <input type="text" placeholder="begin by typing a word" onChange={handleChange}/>
      <div>
        {wordsFound && wordsFound.map(word=>{return <p> {word} </p>})}
      </div>
    </div>
  );
}

export default WordSearch;