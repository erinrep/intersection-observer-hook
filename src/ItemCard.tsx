import React, { useRef } from "react";
import { useDetails } from "./detailsHook";
import { Item } from "./types";
import logo from './logo.svg';

const ItemCard: React.FunctionComponent<{item: Item}> = ({ item }) => {
  const ref = useRef(null);
  const details = useDetails(item.id, ref);

  return (
    <li ref={ref} className="Item" key={item.id}>
      <img src={details ? details.images?.icon : logo} alt=""/>
      <div className="description">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        {details ?
          details.introduction || details.shopHistory ? (
            <>
              <h4>Details</h4>
              <p>{details.introduction?.text}</p>
              {details.shopHistory && (
              <p>Last time in shop: {details.shopHistory[details.shopHistory.length - 1]}</p>
              )}
            </>
          ) : <p>No additional details</p>
        : <p>Fetching details...</p>}
      </div>
    </li>
  )
}

export default ItemCard;