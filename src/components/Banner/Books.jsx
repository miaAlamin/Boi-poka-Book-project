import { useEffect, useState } from "react";
import SingleBook from "../singleBook/SingleBook";

const Books = () => {

    const [books, setBooks] = useState([]);

    useEffect(()=>{

        fetch('booksData.json')
        .then(res => res.json())
        .then(data => setBooks(data))

    },[])


    return (
        <div>
            <h1 className="text-4xl font-bold text-center">Books</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
                {
                    books.map(book => <SingleBook key={book.bookId} book={book}></SingleBook> )
                }
            </div>
            
        </div>
    );
};

export default Books;