import { useState } from "react";
import { API_URL } from "../../config";

function useLoginUser() {
  const [error, setError] = useState(null);

  const loginUser = async (email, password) => {
    setError(null);

    try {
      const response = await fetch(`${API_URL}user`);

      if (!response.ok) {
        throw new Error(
          `Error al leer el usuario, intente de nuevo,
          ${response.status}`,
        );
      }
      
      const users = await response.json();

      //Tener un getUserByEmail

      const userFound = users.find((user) => user.email === email && user.password === password);

      if (!userFound) {
        console.log(userFound);
        setError("Credenciales no autorizadas")
        return null
        
      }


      const { password: _, ...userWithoutPassword } = userFound;

      return userWithoutPassword;
    } catch (error) {
      console.error("Error al ingresar como usuario",  error);
      setError(error);
      return null;
    }
  };
  return {error, loginUser}
}

export default useLoginUser;
