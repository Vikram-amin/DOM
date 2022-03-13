const fetchData = async (url) => {
    try {
      let data = await (await fetch(url)).json();
  
      return data.meals;
    } catch (error) {
      console.log(error);
    }
  };
  
  async function searchMeal() {
    try {
      let meal = document.getElementById("search").value;
      let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`;
      let data = await (await fetch(url)).json();
      return data.meals;
    } catch (error) {
      console.log(error);
    }
  }
  
  export { fetchData, searchMeal };