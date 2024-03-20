// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import "./Datafetch.css";

// function DataFetch() {
//     const [books, setBooks] = useState([]);

//     useEffect(() => {
//         axios.get("https://www.googleapis.com/books/v1/volumes?q=Harry%20Potter")
//             .then((res) => {
//                 const fetchedBooks = res.data.items.map((item) => ({
//                     title: item.volumeInfo.title,
//                     authors: item.volumeInfo.authors,
//                     imageLinks: item.volumeInfo.imageLinks
//                 }));
//                 setBooks(fetchedBooks);
//             })
//             .catch((error) => {
//                 console.error('Error fetching data:', error);
//             });
//     }, []);

//     return (
//         <>
//             <div className="searchContainer">
//                 <input
//                     type="text"
//                     placeholder="Enter search term"
//                 />
//                 <button >Search</button>
//             </div>
//             <div className="allBooks">
//                 <ul className="bookList">
//                     {books.map((book, index) => (
//                         <li key={index}>
//                             {book.imageLinks && (
//                                 <img src={book.imageLinks.thumbnail} alt="Book Cover" />
//                             )}
//                             <h4>{book.title}</h4>
//                             <p>Authors: {book.authors && book.authors.join(', ')}</p>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </>
//     );
// }

// export default DataFetch;


import axios from 'axios';
import React, { useState, useEffect } from 'react';
import "./Datafetch.css";

function DataFetch() {
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

        useEffect(() => {
        axios.get("https://www.googleapis.com/books/v1/volumes?q=Harry%20Potter")
            .then((res) => {
                const fetchedBooks = res.data.items.map((item) => ({
                    title: item.volumeInfo.title,
                    authors: item.volumeInfo.authors,
                    imageLinks: item.volumeInfo.imageLinks
                }));
                setBooks(fetchedBooks);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handleSearch = () => {
        //implementation is not assigned in this assignment
        console.log("Clicked")
    };

    return (
        <>
            <div className="searchContainer">
                <input
                    type="text"
                    placeholder="Search Book here"
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className='btn-pri' onClick={handleSearch}>Search</button>
            </div>
            <div className="allBooks">
                <ul className="bookList">
                    {books.map((book, index) => (
                        <li key={index}>
                            {book.imageLinks && (
                                <img src={book.imageLinks.thumbnail} alt="Book Cover" />
                            )}
                            <h4>{book.title}</h4>
                            <p>Authors: {book.authors && book.authors.join(', ')}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default DataFetch;
