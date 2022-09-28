const listElement = document.querySelector('.posts');
const postTemplate = document.querySelector('#single-post');
const form = document.querySelector('#new-post form');
const fetchButton = document.querySelector('#available-posts button');
const postList = document.querySelector('ul');
let currentData;

function sendHttpRequest(method, url, data) {
  // with XHR
  //   const promise = new Promise((resolve, reject) => {
  //     const xhr = new XMLHttpRequest();
  //     xhr.open(method, url);
  //     xhr.onload = function () {
  //       if (xhr.status >= 200 && xhr.status < 300) {
  //         resolve(xhr.response);
  //       } else {
  //         reject(new Error("Something went wrong.... :<"));
  //       }
  //     };
  //     xhr.send();
  //   });

  //   return promise;

  //with fetch function
  //   return fetch(url).then((data) => data.json());

  //with axios
  return axios.get(url);
}

async function fetchPosts() {
  //   const responseData = sendHttpRequest(
  //       "GET",
  //       "https://jsonplaceholder.typicode.com/posts"
  //   ).then(data => {
  //       return JSON.parse(data)
  //   }).then(parsedData => {
  //       for(const post of parsedData){
  //         const postElClone = document.importNode(postTemplate.content, true)
  //         postElClone.querySelector('h2').textContent = post.title.toUpperCase()
  //         postElClone.querySelector('p').textContent = post.body
  //         postElClone.querySelector('li').id = post.id
  //         listElement.appendChild(postElClone)

  //       }
  //   }).catch(err => {
  //     console.error('Error Message => ', err)
  //   })

  const responseData = sendHttpRequest(
    'GET',
    'https://jsonplaceholder.typicode.com/posts'
  )
    .then(({ data }) => {
      currentData = data;
      createPostItems();
    })
    .catch((err) => {
      console.error('Error Message => ', err);
    });
}

async function deletePost(id) {
  sendHttpRequest(
    'DELETE',
    `https://jsonplaceholder.typicode.com/posts/${id}`
  ).then((res) => {
    console.log(`Deleted post with id of ${id}`);
    currentData = currentData.filter((item) => item.id !== parseInt(id));
    document.querySelector('.posts').innerHTML = '';
    createPostItems();
  });
}

function createPostItems() {
  for (const post of currentData) {
    const postElClone = document.importNode(postTemplate.content, true);
    postElClone.querySelector('h2').textContent = post.title.toUpperCase();
    postElClone.querySelector('p').textContent = post.body;
    postElClone.querySelector('li').id = post.id;
    listElement.appendChild(postElClone);
  }

  // DELETE
  document.querySelectorAll('.posts button').forEach((button) => {
    button.addEventListener('click', (e) => {
      const id = e.target.closest('.post-item').id;
      deletePost(id);
    });
  });
}

//READ
fetchButton.addEventListener('click', fetchPosts);

//Delete
deleteButtons.forEach((button) => {
  button.addEventListener('click', (e) => deletePost(e));
});
