const 
    http = new SimpleHTTP(), 
    dataToPost = {title: 'foo', body: 'bar', userId: 1}, 
    dataToUpdate = {title: 'hey', body: 'hi', userId: 1};

// http.get('https://jsonplaceholder.typicode.com/posts', (response, error) => {
//     error ? console.error(error) : console.log(response);
// });

// http.get('https://jsonplaceholder.typicode.com/posts/101', (response, error) => {
//     error ? console.error(error) : console.log(response);
// });

// http.post('https://jsonplaceholder.typicode.com/posts', dataToPost, (response, error) => {
//     error ? console.error(error) : console.log(response);
// });

// http.put('https://jsonplaceholder.typicode.com/posts', 4, dataToUpdate, (response, error) => {
//     error ? console.error(error) : console.log(response);
// })

http.delete('https://jsonplaceholder.typicode.com/posts', 3, (response, error) => {
    error ? console.error(error) : console.log(response);
});