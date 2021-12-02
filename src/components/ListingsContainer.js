import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({data,refresh,filtered}) {
  function deleteItem(id){
    const update = data.filter((item)=>item.id!==id)
    fetch(`http://localhost:6001/listings/${id}`,{
      method: "DELETE"
    })
    refresh(update);
    // look into this again to see if the delete actually needs this.
    // this refresh to update state WORKED.
    }
    if(filtered){
      let clonedArray = JSON.parse(JSON.stringify(data))
      clonedArray.sort(function(a, b) {
        var textA = a.location.toUpperCase();
        var textB = b.location.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
      return (
        <main>
          <ul className="cards">
            {clonedArray.map((item) =>{
             return <ListingCard deleteItem={deleteItem}key={item.id} id={item.id}description={item.description} image={item.image} location={item.location}/>
            })}
          </ul>
        </main>
      );
    }else{
      return (
        <main>
          <ul className="cards">
            {data.map((item) =>{
             return <ListingCard deleteItem={deleteItem}key={item.id} id={item.id}description={item.description} image={item.image} location={item.location}/>
            })}
          </ul>
        </main>
      );
    }
}

export default ListingsContainer;
