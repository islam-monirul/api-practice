function loadPhotos(){
     fetch('https://jsonplaceholder.typicode.com/photos')
     .then(res => res.json())
     .then(data => displayPhotos(data))
}

function displayPhotos(photos){
     const photosContainer = document.getElementById('photos');

     photos.forEach( photo => {
          const div = document.createElement('div');
          div.classList.add('imgBox');

          div.innerHTML = `
               <img src="${photo.url}">
          `;

          photosContainer.appendChild(div);
     })
}