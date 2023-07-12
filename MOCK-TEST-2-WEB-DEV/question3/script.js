const postsContainer = document.getElementById('posts');

// Show skeleton loader
function showLoader() {
  for (let i = 0; i < 5; i++) {
    const loader = document.createElement('div');
    loader.classList.add('skeleton-loader');
    postsContainer.appendChild(loader);
  }
}

// Hide skeleton loader and display posts
function showPosts(posts) {
  postsContainer.innerHTML = '';

  posts.forEach((post) => {
    const postElement = document.createElement('div');
    postElement.textContent = post.title;
    postsContainer.appendChild(postElement);
  });
}

// Fetch data from API
function fetchData() {
  showLoader();

  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => {
      // Simulate delay to demonstrate the skeleton loader
      setTimeout(() => {
        showPosts(data);
      }, 2000);
    })
    .catch((error) => {
      console.error(error);
    });
}

// Initiate data fetching
fetchData();
