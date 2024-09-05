import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("userToken")) || null
  )

  const logout = ()=>{
    localStorage.setItem("userToken", null);
    setCurrentUser(null)
  }

  const login = async (payload) => {
    const res = await axios.post("https://tatkalsamacharapi.thecognizance.in/api/auth/login", payload);
    const user = await getUser(res.data.token);
    setCurrentUser(res.data.token)
  }

  const getUser = async (token) => {
    const res = await axios.get("https://tatkalsamacharapi.thecognizance.in/api/auth/me", 
      {
        headers: {
          Authorization: "Bearer " + token
        }
      }
    );
    console.log(res.data)
    return res.data;
  }

  useEffect(() => {
    localStorage.setItem("userToken", JSON.stringify(currentUser))
  }, [currentUser])

  
  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}