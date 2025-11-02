/* 
-------------------------------------------------------------
CHALLENGE 3 — NESTED OBJECT
Create an object `library` with:
  - name (string)
  - books (array of objects), where each book has title and author.

1️⃣ Print the name of the library.
2️⃣ Loop through the books and print their details.
-------------------------------------------------------------
*/

let library = {
    name: "City Library",
    books: [
        { title: "The Hobbit", author: "J.R.R. Tolkien" },
        { title: "1984", author: "George Orwell" },
        { title: "The Alchemist", author: "Paulo Coelho" }
    ]
};

console.log("Library Name:", library.name);
console.log("Books:");

for (let book of library.books) {
    console.log("-", book.title, "BY", book.author);
}
