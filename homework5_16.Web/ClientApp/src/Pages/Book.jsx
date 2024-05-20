import { useUser } from '../UserContext';
import axios from 'axios';
import { useState, useEffect } from 'react';



const Book = ({ book, isFav }) => {
    const { user } = useUser();
    const { title, author } = book;
    const isLoggedIn = user;
 
    const [isFav1, setIsFav1] = useState(false);
    useEffect(() => {
        setIsFav1(isFav);
    }, []);

    const onClick = async () => {
        const favBook = {};
        favBook.key = book.id;
        favBook.title = book.title;
        favBook.author = book.author;

        { !isFav1 && await axios.post('/api/favbook/addfav', favBook) };
        { isFav1 && await axios.post('/api/favbook/deletefav', favBook ) };
        setIsFav1(!isFav1);
    }

    return (
        <div className="col-md-4 mb-3">
            <div className="card h-100">
                <div className="d-flex align-items-center justify-content-center">
                </div>
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{author}</p>
                    {!isLoggedIn && <button disabled className="btn btn-success mt-auto">Sign In to Add to Favorites</button>}
                    {!isFav1 && isLoggedIn && <button className="btn btn-success mt-auto" onClick={onClick}>Add to Favorites</button>}
                    {isFav1 && <button className="btn btn-danger mt-auto" onClick={onClick}>Remove from Favorites</button> }
                </div>
            </div>
        </div>
    )
}

export default Book;
