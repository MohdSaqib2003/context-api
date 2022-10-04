import React from "react";
import AboutUser from "../components/about";
import Contact from "../components/contact";
import { UserContext } from '../context/user'
import { UserContextProvider } from "../context/user";
// import { createContext } from "react";

// const initialData = {
//   name : "Jack",
//   age : 19,
//   address: 'Bareilly'
// }

// const userContext = createContext();


export default function Home() {
  return (

      <>
        <h1>Context API</h1>
        <AboutUser />
      </>

  )
}
