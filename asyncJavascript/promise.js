const books =[{name:"Kitap1",yazar:"Yazar1"},{name:"Kitap2",yazar:"Yazar2"},{name:"Kitap3",yazar:"Yazar3"}]

const listBooks=() => {
    books.map((book)=>{
        console.log(book.name);
    });
};

//listBooks();

const addBook = (newBook) => {
    const promise1=new Promise((resolve,reject)=>{
        books.push(newBook);
        resolve(books);
        reject("Bir hata oluştu.")
    });
    return promise1;    
}

addBook({name:"Kitap4",yazar:"Yazar4"}).then(()=>{
    console.log("Yeni Liste");
    listBooks();
}).catch((error)=>{
   console.log(error);
});
