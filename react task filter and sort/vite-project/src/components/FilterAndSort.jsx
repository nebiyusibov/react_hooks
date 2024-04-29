import { useEffect, useState } from "react"

function FilterAndSort({getProduct,product,setproduct}) {
  const [search,setsearch]=useState([])

  async function inpProduct() {
    const res=await fetch("https://fakestoreapi.com/products?limit=5")
    const data=await res.json()
    await getProduct()
    return data
  }
  useEffect(()=>{
    getProduct()
  },[])
  function sortInc(x,y) {
    setproduct([...product].sort((a,b) => (a[x] > b[x]) ? 1 : ((b[x] > a[x]) ? -1 : 0)))
  }
  function sortDec(x) {
    setproduct([...product].sort((a,b) => (a[x] < b[x]) ? 1 : ((b[x] < a[x]) ? -1 : 0)))
    
  }

  return (
    <div>
      <button onClick={()=>sortDec("price")}>A-Z</button>
      <button onClick={()=>sortInc("price")}>Z-A</button>
      <br />
      <br />
      <input type="text" placeholder="search"  value={search} onChange={(e)=>setsearch(e.target.value)}/>
      <br />
      <br />
      {[...product]
      .filter((x)=>x.title.toLowerCase().includes(search))
      .map((x)=>(
        <div key={x.id} style={{border:"1px solid black"}}>
          <h2>{x.id}</h2>
          <h2>{x.title}</h2>
          <h2>{x.price}</h2>
        </div>
      ))}
    </div>
  )
}

export default FilterAndSort
