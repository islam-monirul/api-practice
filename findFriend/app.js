const loadBuddies = () => {
     fetch('https://randomuser.me/api/?results=3')
          .then(res => res.json())
          .then(data => displayBuddies(data))
}

const displayBuddies = (buddy) => {
     const divContainer = document.getElementById('buddies');

     const allData = buddy.results;
     allData.forEach( data => {
          const div = document.createElement('div');
          div.classList.add('buddy');

          div.innerHTML = `
               <img src="${data.picture.large}" class="img-fluid border border-2 rounded-circle">
               <h6 class="pt-4">${data.name.title} ${data.name.first} ${data.name.last}</h6>
               <p>${data.email}</p>
          `;

          divContainer.appendChild(div)
     })
}