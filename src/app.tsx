import React, { useState } from 'react';
import { Book, initialBooks } from './entities';

const App: React.FC = () => {
    const [books, setBooks] = useState<Book[]>(initialBooks)
    const [newBook, setNewBook] = useState<Book>({
      name: '',
      author: '',
      year: 0,
      pageCount: 0,
    });
  
    const addBook = () => {
      if (
        newBook.name &&
        newBook.author &&
        newBook.year > 0 &&
        newBook.pageCount > 0
      ) {
        setBooks([...books, newBook])
        setNewBook({name: '', author: '', year: 0, pageCount: 0})
      }
    };
  
    const removeBook = (name: string) => {
      setBooks(books.filter((book) => book.name !== name))
    }

    return (
        <div>
            <h1>управление книгами</h1>
            <div>
                <input 
                    type="text" 
                    placeholder="название" 
                    value={newBook.name} 
                    onChange={(e) => setNewBook({...newBook, name: e.target.value})} 
                />
                <input 
                    type="text" 
                    placeholder="автор" 
                    value={newBook.author} 
                    onChange={(e) => setNewBook({...newBook, author: e.target.value})} 
                />
                <input 
                    type="number" 
                    placeholder="год" 
                    value={newBook.year} 
                    onChange={(e) => setNewBook({...newBook, year: Number(e.target.value)})} 
                />
                <input 
                    type="number" 
                    placeholder="количество страниц" 
                    value={newBook.pageCount} 
                    onChange={(e) => setNewBook({...newBook, pageCount: Number(e.target.value)})} 
                />
                <button onClick={addBook}>добавить книгу</button>
            </div>
            <ul>
                {books.map((book) => (
                    <li key={book.name}>
                        {book.name} - {book.author} ({book.year} год, {book.pageCount} страниц)
                        <button onClick={() => removeBook(book.name)}>удалить</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default App