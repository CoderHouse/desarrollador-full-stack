function get(url) {
  // return fetch(url, {
  //   method: 'get'
  // });
}


function getJSON(url) {
  // return get(url).then(function(response) {
  //   return response.json();
  // });
}

getJSON('https://jsonplaceholder.typicode.com/posts')
// .then(function(response) {
//   console.log(response);
// })
// .catch(function(error) {
//   console.log(error);
// });
