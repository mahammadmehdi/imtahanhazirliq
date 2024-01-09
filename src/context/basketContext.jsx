import React, { createContext, useState } from 'react'

export const BasketContext = createContext()
function BasketProvider({children}) {
    const [basket, setBasket] = useState([])

    function AddBasket(item) {
        const index = basket.findIndex((x)=>x.id === item.id)
        if (index === -1) {
            setBasket([...basket,{...item,count:1}])

            return
        }
        basket[index].count++
        setBasket([...basket])
    }
    function increase(item) {
        const index = basket.findIndex((x)=>x.id === item.id)
        basket[index].count++
        setBasket([...basket])  
    }
    function decrease(item) {
        const index = basket.findIndex((x)=>x.id===item.id)
        if (basket[index.count===1]) {
            return
        }
        basket[index].count--
        setBasket([...basket]) 
    }
    function removeItem(item) {
        setBasket(basket.filter(x=>x.id !==item.id))
    }

    const data = {basket,AddBasket,increase,decrease,removeItem}
  return (
    <BasketContext.Provider value={data}>{children}</BasketContext.Provider>
  )
}

export default BasketProvider