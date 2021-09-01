const searchFood = () => {
     const searchField = document.getElementById('search-field');
     const searchText = searchField.value;
     console.log(searchText);
     
     // clear data
     searchField.value = '';
     if(searchText == ''){
          // please write something
     }

     // load data 
     const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
     fetch(url)
          .then(res => res.json())
          .then(data => displaySearchResult(data.meals))
}

const displaySearchResult = (meals) => {
     // console.log(meals);
     const searchResult = document.getElementById('search-result');
     searchResult.textContent = '';

     if(meals.length == 0){
          // show no results found
     }

     meals.forEach( meal => {
          console.log(meal);
          const div = document.createElement('div');
          div.classList.add('col');

          div.innerHTML =`
               <div onclick="loadMealDetails(${meal.idMeal})" class="card h-100">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                         <h5 class="card-title">${meal.strMeal}</h5>
                         <p class="card-text">${meal.strInstructions}</p>
                    </div>
               </div>
          `;

          searchResult.appendChild(div);
     })
}


const loadMealDetails = (idMeal) => {
     console.log(idMeal);
     const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
     fetch(url)
          .then(res => res.json())
          .then(data => displayMealDetails(data.meals[0]))
}

const displayMealDetails = meal => {
     console.log(meal);
     const mealDetails = document.getElementById('meal-details');

     const div = document.createElement('div');
     div.classList.add('card');

     div.innerHTML =`
          <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
          <div class="card-body">
               <h5 class="card-title">${meal.strMeal}</h5>
               <p class="card-text">${meal.strInstructions}</p>
               <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
          </div>
     `;

     mealDetails.appendChild(div);
}