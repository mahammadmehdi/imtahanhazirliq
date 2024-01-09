import React, { useContext } from 'react'
import Productcard from '../../components'
import { NavLink } from 'react-router-dom'
import { SearchContext } from '../../context/Searchcontext'


function Home() {
    const {handleSearch} = useContext(SearchContext)

  return (
    
    <div>
        <input type="text" onChange={(e)=>handleSearch(e)}/>
        <NavLink to={"add"}>Add</NavLink>

        <Productcard></Productcard></div>
  )
}

export default Home