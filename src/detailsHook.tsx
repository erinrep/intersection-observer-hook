/* eslint-disable react-hooks/exhaustive-deps */
import { RefObject, useEffect, useState } from "react";
import { getItemDetails } from "./api";
import { ItemDetails } from "./types";

export const useDetails = (id: string, ref: RefObject<HTMLElement>): ItemDetails | null => {
  const [details, setDetails] = useState<ItemDetails | null>(null);

  const fetchDetails = () => {
    getItemDetails(id).then(
      response => {
        if (response) {
          console.debug("got details:", response)
          setDetails(response);
          observer.disconnect();
        }
      },
      e => console.log("error", e)
    );
  }

  const observer = new IntersectionObserver(
    ([entry]: IntersectionObserverEntry[]): void => {
      if (entry.isIntersecting) {
        fetchDetails();
      }
    }
  );

  useEffect(() => {
    if (ref.current) {
      observer.observe(ref.current);
    }
    return (): void => observer.disconnect();
  }, [])

  return details;
}