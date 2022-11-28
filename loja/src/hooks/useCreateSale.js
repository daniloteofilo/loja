import { useState } from "react";
import { urlApi } from "../constants";

function useCreateSale() {
  const [dataApi, setDataApi] = useState(null);

  const createSale = (salesData) => {
  
    return fetch(`${urlApi}/sales`, { 
        method: "POST",
        headers:{ 'content-type' : 'application/json'
        },
        body:JSON.stringify(salesData) })
        .then((response) => response.json())
        .then((json) => setDataApi(json));
  };

  return createSale;
}

export default useCreateSale;
