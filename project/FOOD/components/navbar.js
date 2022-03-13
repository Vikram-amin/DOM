async function navbar() {
    return ` <div id="navbar">
        <img src="img/icons8-menu.svg" alt="menu" id="menu" />
        <img src="img/logo.gif" alt="logo" id="logo" />
        <div class="links">
          <a href="index.html">Search</a>
          <a href="recipe.html">Recipe of the Day</a>
          <a href="category.html">Search by Category </a>
        </div>
        <div class="right">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search"
            autocomplete="off"
            onblur="hide()"
            oninput="debounce(main, 1000)"
          />
           <div id="meal_list"></div>
          
        </div>
      </div>
  `;
  }
  
  export default navbar;