
import {useState, useEffect} from 'react';
import React from 'react';
import TrieNode from '../config/Trie'
import { useHistory } from "react-router-dom";
import Axios from 'axios'


function WordSearch() {
  let history = useHistory();

  const [wordsFound, setWordsFound] = useState(null);
  const [rootNode, setRootNode] = useState(new TrieNode(null));

  useEffect(() => {
    let apiWords = [];
    Axios.get('https://reqres.in/api/users').then((response)=>{
        let responseData = response.data.data;
        [...responseData].forEach((dataItem)=>{
            apiWords.push(dataItem.first_name);
        });
        Axios.get('https://reqres.in/api/users?page=2').then((response)=>{
            let responseData = response.data.data;
            [...responseData].forEach((dataItem)=>{
                apiWords.push(dataItem.first_name);
            });
            rootNode.addWords(apiWords);
            setRootNode(rootNode);
            console.log(rootNode);
        })
    });
  }, [rootNode, setRootNode])

  const handleChange = (event) =>{
    let prefixCheck = event.target.value;
    if(prefixCheck !== null){
      setWordsFound(rootNode.get(prefixCheck));
    }
    else{ 
      setWordsFound(null);
    }
    console.log(wordsFound);
  }

  return (
    <div className="App">
        <button onClick={() => history.push("/")}>Go back to Scrabble Dictionary Search</button> 
        <input type="text" placeholder="begin by typing a name (case sensitive)" onChange={handleChange}/>
            <div>
            {wordsFound && wordsFound.map(word=>{return <p> {word} </p>})}
            </div>
        </div>
  );
}

export default WordSearch;