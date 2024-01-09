import { Navbar, Main, Product } from "../components";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    global.analytics.track("Home")
  }, [])
  
  return (
    <>
      <Navbar />
      <Main />
      <Product />
    </>
  )
}

export default Home