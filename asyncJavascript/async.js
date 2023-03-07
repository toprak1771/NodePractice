const posts=[{id:1,name:"post1",shared:"kisi1"},{id:2,name:"post2",shared:"kisi2"},{id:3,name:"post3",shared:"kisi3"}];

function listPost(){
    posts.map((post) =>{
        console.log(post.name);
    })
};

function addPost(newPost) {
   const promisePost=new Promise((resolve,reject) =>{
    posts.push(newPost);
    resolve(posts);
    reject("Bir hata oluştu");
   })
   return promisePost;
};

async function showPost(){
    try {
        await addPost({id:17,name:"post17",shared:"kisi17"});
        listPost()
        
    } catch (error) {
        console.log(error);
    }
};

showPost();