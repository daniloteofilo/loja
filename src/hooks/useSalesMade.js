import { useEffect, useState } from "react";
import { urlApi } from "../constants";

function useSalesMade() {
  const [dataApi, setDataApi] = useState(null);

  useEffect(() => {
    fetch(`${urlApi}/sales`)
      .then((response) => response.json())
      .then((json) => setDataApi(json));
  }, []);

  return dataApi;
}

export default useSalesMade;
