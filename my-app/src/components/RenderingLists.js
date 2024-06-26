import React from 'react';
import Book from './Book';

function RenderingLists() {
    const bookList = [
        "killing a mocking bird",
        "the great gatsby",
        "the cathcher in the rye"
    ]

    const books = [
        {
            title: "to kill a mocking bird",
            author: "harper lee",
            pages: 281
        },
        {
            title: "the great gatsby",
            author: "f. fitzgerald",
            pages: 342
        },
        {
            title: "sapiens",
            author: "Y. Harari",
            pages: 346
        }
    ]
  return (
    <div>
        {bookList.map(book => {
            return <h2 key={book}>{book}</h2>
        })}
        <hr />
        {
            books.map(book => {
                return <div key={book.title}>
                <h5>{book.title}</h5>
                    <p>{book.author}</p>
                    <p>{book.pages}</p>
                </div>
            })
        }
        <hr />
       {
        books.map(book => {
            return <Book key={book.title} book={book} />
        })
       }
    </div>
  )
}

export default RenderingLists