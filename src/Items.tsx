import React, { useEffect, useState } from "react";
import { getRandomItems } from "./api";
import ItemCard from "./ItemCard";
import { Item } from "./types";

const Items: React.FunctionComponent = () => {
  const [items, setItems] = useState([] as Item[]);

  const fetchItems = async () => {
    const randomItems = await getRandomItems();
    setItems(randomItems);
  }

  useEffect(() => {
    fetchItems();
  }, [])

  return (
    <div className="Items">
      <h2>Fortnite Items</h2>
      <ul className="ItemList">
        {items.map((item) => <ItemCard key={item.id} item={item}/>)}
      </ul>
    </div>
  )
}

export default Items;