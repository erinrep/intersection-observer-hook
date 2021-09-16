import URI from "urijs";
import { Item, ItemDetails } from "./types";

const NUM_ITEMS = 10;

async function get(path: string, params: Record<string, unknown>): Promise<{[x: string]: unknown}> {
  let result = {} as {[x: string]: unknown};
  try {
    const url = new URI(path);
    url.addSearch("lang", "en");
    Object.entries(params).forEach(([key, value]) => {
      url.addSearch(key, value);
    })
    const response = await fetch(url.toString(), {headers: {Authorization: process.env.REACT_APP_FN_API_KEY || ""}});
    result = await response.json();
  } catch(e) {
    console.debug("API error", e)
  }

  return result;
}

export async function getRandomItems(num = NUM_ITEMS): Promise<Item[]> {
  const randomItems = [];
  try {
    const response = await get("https://fortniteapi.io/v2/items/list", {});
    const items = response.items as Item[];
    for (let i = 0; i < num; i++) {
      const randomIndex = Math.random() * (items.length - 1) + 1;
      randomItems.push(items[Math.floor(randomIndex)]);
    }
  } catch(e) {
    console.debug("Error getting items", e);
  }
  return randomItems;
}

export async function getItemDetails(id: string): Promise<ItemDetails> {
  let item = {} as ItemDetails;
  
  try {
    const response = await get("https://fortniteapi.io/v2/items/get", { id });
    item = response.item as ItemDetails;
  } catch(e) {
    console.debug("Error getting item details", e);
  }

  return item;
}