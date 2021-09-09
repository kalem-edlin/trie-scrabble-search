class TrieNode {
	//  childNodes = [];  //collection of TrieNode
	//  word = null; //will store null if no search result to store
    //  character = null; //will store null if root node

    constructor(characterToAdd){
        this.words = [];
        this.character = characterToAdd;
        this.childNodes = [];
    }

    addWords = (wordList) => {
        [...wordList].forEach(wordToAdd =>{
            let node = this;
            [...wordToAdd].forEach(c => {
                let nextNode = null
                node.childNodes.some( childNode => {
                    if(childNode.character === c){
                        nextNode = childNode;
                        return true;
                    }
                    return false;
                })
                if(nextNode === null){
                    nextNode = new TrieNode(c);
                    node.childNodes.push(nextNode);
                }
                node = nextNode;
                node.words.push(wordToAdd);
            })
        })
        
    }

    get = (prefix) => {
        let node = this;
        
        [...prefix].forEach(c => {
            let nextNode = null
            node.childNodes.some(childNode => {
                        if(childNode.character === c){
                            nextNode = childNode;
                            return true;
                        }
                    return false;
            })
            node = nextNode;
            if(node === null){
                return null;
            }
        })
        if(node === null) return null;
        else return node.words;
    }
}

export default TrieNode;