import { useState } from 'react';
import axios from 'axios';

const FavBook = ({ book, getFavs }) => {
    const [isAdd, setIsAdd] = useState(false);
    const [note, setNote] = useState('');
    const [isEdit, setIsEdit] = useState(false);
   
    const onClick = async (book) => {
        await axios.post('/api/favbook/deletefav', book)
        getFavs();
    }

    const addNote = async (book) => {
        book.notes = note;
        await axios.post('/api/favbook/updatefav', book)
        setIsAdd(false);
        setIsEdit(false);
    }
    const onClick2 = () => {
        setIsEdit(true);
        setNote(book.notes);
    }

   

    return (
        <>
            <div className="col-md-4 mb-4">
                <div className="card h-100 shadow-sm border-0">
                    <div className="position-relative">
                        <button className="btn btn-danger btn-sm position-absolute top-0 end-0 m-2" onClick={() => onClick(book)}>
                            <i className="bi bi-trash">
                            </i>
                        </button>
                    </div>
                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title text-truncate">{book.title}</h5>
                        <p className="card-text text-muted">by {book.author}</p>
                        {!book.notes && !isAdd && <div className="mt-auto">
                            <button className="btn btn-outline-primary w-100 mb-2" onClick={() => setIsAdd(true)}>Add Note</button>
                        </div>}
                        {!book.notes && isAdd &&
                            <div className="mt-3">
                                <textarea className="form-control" rows="3" placeholder="Add your notes here..." value={note} onChange={e => setNote(e.target.value)}>
                                </textarea><div className="d-flex justify-content-between mt-2">
                                    <button className="btn btn-success" onClick={() => addNote(book)}>Save Note</button>
                                    <button className="btn btn-outline-secondary ms-2" onClick={() => setIsAdd(false)}>Cancel</button>
                                </div>
                            </div>
                        }
                        {book.notes && <>
                            <div className="mt-auto">
                                <button className="btn btn-outline-primary w-100 mb-2" onClick={onClick2}>Edit Note</button>
                                <button className="btn btn-outline-dark w-100" onClick={onClick2}>Show Note</button></div>
                        </>
                        }
                        {isEdit && <>
                            <div className="mt-3"><textarea className="form-control" rows="3" placeholder="Add your notes here..." value={note} onChange={e => setNote(e.target.value)}>{book.notes}
                            </textarea>
                                <div className="d-flex justify-content-between mt-2">
                                    <button className="btn btn-success" onClick={() => addNote(book)}>Save Note</button>
                                    <button className="btn btn-outline-secondary ms-2"onClick={()=>setIsEdit(false) }>Cancel</button>
                                </div>
                            </div>
                        </>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default FavBook;
