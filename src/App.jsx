import { Outlet, useLoaderData } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import { createContext } from "react"
export const ProductContext = createContext([])
const CartContext = createContext([])
const App = () => {
  const { cartArray, products } = useLoaderData();
  console.log(products)
  return (
    <ProductContext.Provider value={products}>

      <Header></Header>
      <div className="h-[calc(100vh-157px)]">
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </ProductContext.Provider>

  )



}

export default App
