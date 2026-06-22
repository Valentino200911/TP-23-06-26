import { useState } from "react";
import { API_URL } from "../../config";

function useDeleteNature() {

  const [error, setError] = useState(null);

  const deleteNature = async ( bioelementId) => {
    try {
      setError(null);

      const response = await fetch(`${API_URL}products/${bioelementId}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json"
        },
      });

      if (!response.ok) {
        throw new Error(
          "Error al traer el elemento de Naturaleza",
          response.status,
        );
      }

    const data = await response.json();

    } catch (error) {
      console.error(error);
      setError(error)
      return null
    } 

  return {error, deleteNature };
}

}

export default useDeleteNature