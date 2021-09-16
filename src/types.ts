export interface Item {
  description: string;
  id: string;
  name: string;
}

export interface ItemDetails {
  images: {
    background: string;
    icon: string;
    featured: string;
  };
  introduction: {
    chapter: string,
    season: string,
    text: string
  };
  shopHistory: string[];
}