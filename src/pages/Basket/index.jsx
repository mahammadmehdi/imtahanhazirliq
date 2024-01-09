import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AddPage() {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")

    function handleSubmit() {
        fetch("http://localhost:3000/",{
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
              },
              body: JSON.stringify({
                name: name,
                price: price,
                category: category
              }),
        })
        navigate("/")
    }
  return (
    <>
    <form onSubmit={handleSubmit}>
<input type="text" placeholder='name' onChange={(e)=>setName(e.target.value)} />
<input type="text" placeholder='price' onChange={(e)=>setPrice(e.target.value)} />
<input type="text" placeholder='category' onChange={(e)=>setCategory(e.target.value)} />

<button>Add</button>

    </form>
    
    
    
    
    
    </>
  )
}

export default AddPage