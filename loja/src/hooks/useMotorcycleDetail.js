import { useEffect, useState } from "react";
import { urlApi } from "../constants";

function useMotocyclesDetails(id) {
    const [dataApi, setDataApi] = useState(null);
  
    useEffect(() => {
      fetch(urlApi)
        .then((response) => response.json())
        .then((json) => setDataApi(json));
    }, []);


    return dataApi;
} 

export default useMotocyclesDetails;