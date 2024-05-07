import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../../component/BackButton.jsx'; // Importing BackButton component
import Spinner from '../../component/spinner.jsx'; // Assuming this is your spinner component

const ShowBooks = () => {
    const [book, setBook] = useState({});
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:5555/books/${id}`)
            .then((response) => {
                setBook(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.log(error); // Log the error properly
                setLoading(false);
            });
    }, [id]); // Include id in the dependency array to re-fetch data when id changes

    return (
        <div className='p-4'>
            <BackButton /> {/* Check if BackButton component is causing the error */}
            <h1 className='text-3xl my-4'>Show Book</h1> {/* Corrected text-3x1 to text-3xl */}
            {loading ? (
                <Spinner /> // Corrected spinner to Spinner
            ) : (
                <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'> {/* Corrected border2 to border-2 and rounded-x1 to rounded-xl */}
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>Id</span> {/* Corrected text-x1 to text-xl */}
                        <span>{book._id}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>Title</span> {/* Corrected text-x1 to text-xl */}
                        <span>{book.title}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>Author</span> {/* Corrected author to Author and text-x1 to text-xl */}
                        <span>{book.author}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>Publish Year</span> {/* Corrected publishYear to Publish Year and text-x1 to text-xl */}
                        <span>{book.publishYear}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>Create Time</span> {/* Corrected creat Time to Create Time and text-x1 to text-xl */}
                        <span>{new Date(book.createdAt).toString()}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>Last Update Time</span> {/* Corrected last update time to Last Update Time and text-x1 to text-xl */}
                        <span>{new Date(book.updatedAt).toString()}</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ShowBooks;
