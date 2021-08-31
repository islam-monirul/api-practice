const btn = document.getElementById('searchBtn');
btn.addEventListener('click', () => {
     let name = document.getElementById('countryName').value;

     if(name != ''){
          getCountryInfo(name);
     }

     else{
          alert('You must enter a country name.')
     }

     document.getElementById('countryName').value = '';
})

const getCountryInfo = (countryName) => {
     url = `https://restcountries.eu/rest/v2/name/${countryName}`;
     fetch(url)
          .then(res => res.json())
          .then(data => displayInfo(data))
}

const displayInfo = (data) =>{
     const div = document.getElementById('info');
     div.classList.add('country');

     if(data.status == 404){
          div.innerHTML = `
               <p>No such country exists.</p>
          `;
     }

     else{
          const country = data[0];
          div.innerHTML = `
               <img src="${country.flag}" class="img-fluid border border-2 w-25">
               <h4 class="pt-4">${country.name}</h4>
               <p>${country.capital}</p>
               <p>
                    <span class="fw-bold">Population: </span>
                    ${country.population}
               </p>
               <p>
                    <span class="fw-bold">Region: </span>
                    ${country.region}
               </p>
          `;
     }
}