import { urlApi } from "../constants";

function useCreateSale() {

  const createSale = (salesData) => {
    return fetch(`${urlApi}/sales`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(salesData),
    });
  };

  return createSale;
}

export default useCreateSale;
