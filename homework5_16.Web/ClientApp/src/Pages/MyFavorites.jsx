import { useState, useEffect } from 'react';
import axios from 'axios';
import FavBook from './FavBook';

const MyFavorites = () => {

    const [favs, setFavs] = useState([]);


    const getFavs = async () => {
        const { data } = await axios.get('/api/favbook/getfavs');
        setFavs(data);
    }

    useEffect(() => {
        getFavs();
    }, []);

 

    return (<div className="container mt-5">
        <div>
            <div className="container mt-5">
                <h2 className="mb-4 text-primary">My Favorites</h2>
                <div className="row">
                    {favs.map(f => <FavBook book={f} key={f.id} getFavs={getFavs()} />)}
                    
                </div>
            </div>
        </div>
    </div>)
}

export default MyFavorites;