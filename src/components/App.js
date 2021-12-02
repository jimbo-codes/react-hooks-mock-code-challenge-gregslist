import React,{useState,useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [data, setData] = useState([]);
  const [filtered,setFiltered] = useState(false)
  function refresh(item){
  setData(item)
  }
  function setFilter(e){
    setFiltered(!filtered)
    console.log(filtered)
  }
function newPost(item){
  console.log(item)
  // here you do your fetch post request, and then also update data.
  fetch('http://localhost:6001/listings',{
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(item)
  })
  .then(r=>r.json())
  .then(result=>{
    const newData= [...data, result]
    setData(newData);
  })
}
  function searchBar(text){
    const searchFilter  = data.filter((item)=>item.description.toLowerCase().includes(text))
    setData(searchFilter);
  }

  useEffect(()=>{
    fetch('http://localhost:6001/listings')
    .then(r=>r.json())
    .then(fetchedData=>setData(fetchedData))
    //call the fetch here, set state in second then.
  },[])
  return (
    <div className="app">
      <Header 
      data={data}
      setFilter={setFilter}
      searchBar={searchBar}
      newPost={newPost}
      />
      <ListingsContainer 
      filtered={filtered}
      data={data}
      refresh={refresh}
      />
    </div>
  );
}

export default App;
