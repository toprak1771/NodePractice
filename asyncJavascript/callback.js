const books =[{name:"Kitap1",yazar:"Yazar1"},{name:"Kitap2",yazar:"Yazar2"},{name:"Kitap3",yazar:"Yazar3"}]
const listBooks=() => {
    books.map((book)=>{
        console.log(book.name);
    });
};

//listBooks();

const addBook = (newBook,callback) => {
    books.push(newBook);
    callback();
}

addBook({name:"Kitap4",yazar:"Yazar4"},listBooks);
