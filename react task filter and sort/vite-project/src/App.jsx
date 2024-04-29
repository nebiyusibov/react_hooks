
import { useEffect, useState } from 'react'
import './App.css'
import FilterAndSort from './components/FilterAndSort'

function App() {
  const [product,setproduct]=useState([])
  async function getProduct() {
    const res=await fetch("https://fakestoreapi.com/products?limit=5")
    const data=await res.json()
    console.log(data);
    setproduct(data)
  }
  useEffect(()=>{
    getProduct()
  },[])

  return (
    <>
    <FilterAndSort product={product} setproduct={setproduct} getProduct={getProduct}></FilterAndSort>
    </>
  )
}

export default App
