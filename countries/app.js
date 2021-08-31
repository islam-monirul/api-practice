const loadCountries = () => {
     fetch('https://restcountries.eu/rest/v2/all')
          .then(res => res.json())
          .then(data => displayCountries(data))
}

const displayCountries = (countries) =>{
     const divContainer = document.getElementById('countries');

     countries.forEach( country => {
          const col = document.createElement('div');
          col.classList.add('col');

          const card = document.createElement('div');
          card.classList.add('card');
          card.classList.add('h-100');
          
          const cardBody = document.createElement('div');
          cardBody.classList.add('text-center');
          cardBody.classList.add('p-3');

          cardBody.innerHTML = `
               <img src="${country.flag}" class="img-fluid border border-2 w-25">
               <h6 class="pt-4">${country.name}</h6>
               <p>${country.capital}</p>
          `;

          card.appendChild(cardBody);
          col.appendChild(card);
          divContainer.appendChild(col);
     })
}