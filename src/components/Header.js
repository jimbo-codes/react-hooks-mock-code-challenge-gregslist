import React,{useState} from "react";
import Search from "./Search";

function Header({setFilter,searchBar,newPost}) {
  const [des, setDes] = useState('');
  const [img, setImg] = useState('');
  const [loc, setLoc] = useState('');
  
  function test(e){
    e.preventDefault();
    const netPost={
      description: des,
      image: img,
      location: loc
    }
    newPost(netPost)
  }
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search 
      searchbar={searchBar}
      setFilter={setFilter}/>
      <form onSubmit={test}>
        <input onChange={(e) => setDes(e.target.value)}placeholder={"Description"}></input>
        <input onChange={(e) => setImg(e.target.value)}placeholder={"ImageSrc"}></input>
        <input onChange={(e) => setLoc(e.target.value)}placeholder={"Location"}></input>
        <button type='submit'>CLICKIT to POST</button>
      </form>
    </header>
  );
}

export default Header;
