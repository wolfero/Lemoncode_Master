interface Book {
    title: string;
    isRead: boolean;
}

function isBookRead(books: Book[], titleToSearch: string) {
    const book = books.find((book) => book.title === titleToSearch);
    if (!book) return false;

    return book.isRead;
}

const books: Book[] = [
    { title: 'Harry Potter y la piedra filosofal', isRead: true },
    { title: 'Canción de hielo y fuego', isRead: false },
    { title: 'Devastación', isRead: true },
];
console.log(isBookRead(books, 'Devastación')); // expected -> true
console.log(isBookRead(books, 'Canción de hielo y fuego')); // expected -> false because is not read
console.log(isBookRead(books, 'Los Pilares de la Tierra')); // expected -> false because the book isn't exist
