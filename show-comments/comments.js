function loadComments(){
     fetch('https://jsonplaceholder.typicode.com/comments')
     .then(res => res.json())
     .then(data => displayComments(data))
}

function displayComments(comments){
     const commentContainer = document.getElementById('comments');

     comments.forEach( comment => {
          const div = document.createElement('div');
          div.classList.add('commentBox');

          div.innerHTML = `
               <h4 style="color: green;">${comment.name}</h4>
               <h5 style="color: grey;">${comment.email}</h5>
               <p>${comment.body}</p>
          `;

          commentContainer.appendChild(div);
     })
}