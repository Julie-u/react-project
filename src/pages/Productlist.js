import React from 'react'
import Layout from 'components/Layout'
import Productlist from '../components/Productlist'

return (
    <Layout>

<div class="result-filters">
        <a><h2>Filter</h2></a>

        <div class="search-div">
          <fieldset className="search">
            <input type="search" name="search" id="filterResults" autocomplete="off" onChange={handleQueryChange} value={query}/>
          </fieldset>
        </div>

        <fieldset>
          <select name="sort" id="sort" defaultValue="0" onChange={handleSortChange}>
            <option value="1">Price, highest to lowest</option>
            <option value="0">Price, lowest to highest</option>
            <option value="newest">Newest releases</option>
          </select>
        </fieldset>

        <fieldset className="slider">
          <label htmlFor="filterPrice">Price:</label>
          <input type="range" name="price" id="filterPrice" value={minPrice} min="0" max="110" step="0.1" onChange={handlePriceChange}/>
          <output htmlFor="filterPrice">{minPrice.toFixed(1)}</output>
        </fieldset>
    </div>
      </Layout>
  )

export default Productlist