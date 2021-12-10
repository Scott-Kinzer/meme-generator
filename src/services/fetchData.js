export function fetchData() {

   return fetch('https://api.imgflip.com/get_memes')
        .then(data => data)
       .then(item => item.json())
       .then(data => data.data);
}