// write a function to retrieve a blob of json
// make an ajax request! Use the 'fetch' function
// https://rallycoding.herokuapp.com/api/music_albums

function fetchAlbums() {
  // the async request returns a promise
  // .then() is called if request is successful with the value returned from the async request
  fetch("https://rallycoding.herokuapp.com/api/music_albums")
    .then(res => {
      return res.json();
    })
    .then(json => console.log(json));
}

fetchAlbums();
