import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SearchProvider from './context/Searchcontext.jsx'
import FilterProvider from './context/FilterContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BasketProvider>
    <FilterProvider>
    <SearchProvider>
    <App />
    </SearchProvider>
    </FilterProvider>
    </BasketProvider>
  </React.StrictMode>
)
