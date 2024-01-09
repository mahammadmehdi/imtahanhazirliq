import React, { createContext, useState } from 'react'

export const FilterContext = createContext()
function FilterProvider({children}) {
    const [price, setPrice] = useState("")

    function handleFilter(price) {
setPrice(price)
        
    }
  return (
    <FilterContext.Provider value={{handleFilter,price}}>{children}</FilterContext.Provider>
  )
}

export default FilterProvider