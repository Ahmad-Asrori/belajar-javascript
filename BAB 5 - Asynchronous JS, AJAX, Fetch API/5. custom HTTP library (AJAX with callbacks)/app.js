const http = new easyHTTP;

//get posts
// http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(posts);
//     } 
// });

//get single post
// http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, post){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(post);
//     } 
// });

//create data
const data = {
    title : 'custom post',
    body : 'custom post'
}

// POST data
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });

//PUT data
// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, post){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });

//DELETE data
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, response){
    if(err){
        console.log(err);
    } else {
        console.log(response);
    } 
});