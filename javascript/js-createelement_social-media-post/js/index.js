console.clear();
const body = document.querySelector('body');
const likeButton = document.querySelector('[data-js="like-button"]');

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

likeButton.addEventListener("click", handleLikeButtonClick);

const newPost = document.createElement('article');
newPost.classList.add('post');

const newPar = document.createElement('p');
newPar.classList.add('post__content');
newPar.textContent = 'bla bla bla thanks bla bla bla i guess. hu hu hu hu';

const newFoot = document.createElement('footer');
newFoot.classList.add('post__footer');

const newButton = document.createElement('button');
newButton.classList.add('post__button');
newButton.textContent = '♥ Like';
newButton.addEventListener("click", handleLikeButtonClick)

const newSpan = document.createElement('span')
newSpan.classList.add('post__username')
newSpan.textContent = '@username' 

newFoot.append(newSpan);
newFoot.append(newButton);
newPost.append(newPar);
newPost.append(newFoot);
body.append(newPost);




// Exercise:
// Use document.createElement() and append another social media post to the body.
/* <article class="post">
      <p class="post__content">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      </p>
      <footer class="post__footer">
        <span class="post__username">@username</span>
        <button type="button" class="post__button" data-js="like-button">
          ♥ Like
        </button>
      </footer>
    </article> */

