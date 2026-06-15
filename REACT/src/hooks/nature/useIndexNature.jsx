import { useState } from "react";
import { API_URL } from "../../config";
import { useEffect } from "react";

//indexNature = getProducts, useIndexNature = useGetProducts

function useIndexNature() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const indexNature = async (url) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(
          "Error al traer los registros de Naturaleza",
          response.status,
        );
      }

      const data = await response.json();

      setProducts(data);
    } catch (error) {
      console.error(error);
      setError(error);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    indexNature(`${API_URL}products`);
  }, []);

  return {error, products, loading};
}

export default useIndexNature;
