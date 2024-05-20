import { useState, useEffect } from 'react';
import axios from 'axios';
import Book from './Book';
import { useUser } from '../UserContext';

const Search = () => {
    const [text, setText] = useState('');
    const [books, setBooks] = useState([]);
    const { user } = useUser();
    const [favBooks, setFavBooks] = useState();

    const getBooks = async () => {
        const { data } = await axios.get('/api/favBook/getfavs');
        setFavBooks(data);
    }

    useEffect(() => {
        { user && getBooks(); }
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        const { data } = await axios.get(`/api/book/search?text=${text}`);
        setBooks(data);
        setText('');
    }

    return (
        <div className="container mt-5">
            <div>
                <div className="container mt-5">
                    <h2>Search for Books</h2>
                    <form onSubmit={onSubmit}>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Enter book title, author, or ISBN" value={text} onChange={e => setText(e.target.value)} />
                            <button className="btn btn-primary" type="submit">Search</button>
                        </div>
                    </form>
                    <div className="row">
                        {books.map(b => <Book book={b} key={b.id} isFav={user && favBooks.some(f => f.key === b.id)} />) }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search;
