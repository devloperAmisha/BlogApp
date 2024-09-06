import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  )

  const logout = ()=>{
    localStorage.setItem("user", null);
    setCurrentUser(null)
  }

  const login = async (payload) => {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, payload);
    const user = await getUser(res.data.access_token);
    setCurrentUser(user)
  }

  const getUser = async (token) => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/auth/me`, 
      {
        headers: {
          Authorization: "Bearer " + token
        }
      }
    );
    
    return {user_id: res.data.id, name: res.data.name, email: res.data.email, access_token: token};
  }

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser))
  }, [currentUser])

  
  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}