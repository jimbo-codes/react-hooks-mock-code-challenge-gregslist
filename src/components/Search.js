import React,{useState} from "react";

function Search({setFilter,searchbar}) {
  function handleSubmit(e) {
    e.preventDefault();
    // console.log(input);
    searchbar(input)
    setInput('');
    // clean out your search.
  }
const [input, setInput] = useState('');
  return (
    <form className="searchbar" onSubmit={handleSubmit}>
     <label onClick={setFilter}type='filter'>🍄</label>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">🔍</button>
      
    </form>
  );
}
// setFilter should be a binary switch, in one case it filters alpha by loc

export default Search;
