import { useEffect, useState } from "react";
import { urlApi } from "../constants";

function useMotocycles() {
  const [dataApi, setDataApi] = useState(null);

  useEffect(() => {
    fetch(`${urlApi}/motorcycle`)
      .then((response) => response.json())
      .then((json) => setDataApi(json));
  }, []);

  return dataApi;
}

export default useMotocycles;
