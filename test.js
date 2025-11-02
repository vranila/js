let library = {
    name: "City Library",
    books: [
        { title: "The Hobbit", author: "J.R.R. Tolkien" },
        { title: "1984", author: "George Orwell" },
        { title: "The Alchemist", author: "Paulo Coelho" }
    ]
};


console.log("LIBRARY :", library.name);
console.log("BOOKS :", library.books);

console.log("-------------------------------------");


for (let book of library.books) {
    console.log("-", book.title, "by", book.author);
}