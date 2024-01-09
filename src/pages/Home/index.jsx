import React, { useContext } from 'react'
import Productcard from '../../components'
import { NavLink } from 'react-router-dom'
import { SearchContext } from '../../context/Searchcontext'
import { FilterContext } from '../../context/FilterContext'

function Home() {
    const {handleSearch} = useContext(SearchContext)
    const {handleFilter} = useContext(FilterContext)
  return (
    
    <div>
        <input type="text" onChange={(e)=>handleSearch(e)}/>
        <NavLink to={"add"}>Add</NavLink>

        <li onClick={()=>handleFilter("6500")}>1000manatdan baha</li>
        <li onClick={()=>handleFilter("35")}> 1000manatdan ucuz</li>
        <Productcard></Productcard></div>
  )
}

export default Home