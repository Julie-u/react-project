import React from 'react'

const Filters = () => {

  return (
        <div class="result-filters">
          <a><h2>Filter</h2></a>
          <fieldset>
            <legend><h3>Consoles</h3></legend>
            <ul class="filter-list">
              <li>
                <label class="my-checkbox">
                  <input type="checkbox"/> 
                  <span>PS5</span>
                </label>
              </li>
              <li>
                <label class="my-checkbox">
                  <input type="checkbox"/> 
                  <span>PS4</span>
                </label>
              </li>
              <li>
                <label class="my-checkbox">
                  <input type="checkbox"/> 
                  <span>Xbox One</span>
                </label>
              </li>
              <li>
                <label class="my-checkbox">
                  <input type="checkbox"/> 
                  <span>Xbox Series</span>
                </label>
              </li>
            </ul>
          </fieldset>
          <fieldset>
            <legend><h3>New</h3></legend>
            <ul class="filter-list">
              <li>
                <label class="my-checkbox">
                  <input type="checkbox"/> 
                  <span>New on Soldrop</span>
                </label>
              </li>
              <li>
                <label class="my-checkbox">
                  <input type="checkbox"/> 
                  <span>Pre-Orders</span>
                </label>
              </li>
              <li>
                <label class="my-checkbox">
                  <input type="checkbox"/> 
                  <span>Co-ops</span>
                </label>
              </li>
              <li>
                <label class="my-checkbox">
                  <input type="checkbox"/> 
                  <span>Summer sales</span>
                </label>
              </li>
            </ul>
          </fieldset>
          <fieldset>
            <legend><h3>Genres</h3></legend>
            <ul class="filter-list">
              <li>
              <label class="my-checkbox">
                <input type="checkbox"/> 
                <span>FPS</span>
              </label>
              </li>
              <li>
                <label class="my-checkbox">
                  <input type="checkbox"/> 
                  <span>RPG</span>
                </label>
              </li>
              <li>
                <label class="my-checkbox">
                  <input type="checkbox"/> 
                  <span>Sport</span>
                </label>
              </li>
              <li>
                <label class="my-checkbox">
                  <input type="checkbox"/> 
                  <span>Racing</span>
                </label>
              </li>
              <li>
                <label class="my-checkbox">
                  <input type="checkbox"/> 
                  <span>Simulation</span>
                </label>
              </li>
              <li>
                <label class="my-checkbox">
                  <input type="checkbox"/> 
                  <span>Adventure</span>
                </label>
              </li>
              <li>
                <label class="my-checkbox">
                  <input type="checkbox"/> 
                  <span>Action</span>
                </label>
              </li>
              <li>
                <label class="my-checkbox">
                  <input type="checkbox"/> 
                  <span>Horror</span>
                </label>
              </li>
              <li>
                <label class="my-checkbox">
                  <input type="checkbox"/> 
                  <span>Strategy</span>
                </label>
              </li>
              <li>
                <label class="my-checkbox">
                  <input type="checkbox"/> 
                  <span>Open World</span>
                </label>
              </li>
            </ul>
          </fieldset>
        </div>

        )
}

export default Filters