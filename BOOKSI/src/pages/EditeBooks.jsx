import React, { useEffect ,useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // Importing useParams once
import BackButton from '../../component/BackButton.jsx';
import Spinner from '../../component/spinner.jsx';
import { useNavigate } from 'react-router-dom'; // Importing useNavigate instead of useParams

const EditeBooks = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publishYear, setPublishYear] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams(); // Using useParams to get the id parameter

    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:5555/books/${id}`)
            .then((response) => {
                setAuthor(response.data.author);
                setPublishYear(response.data.publishYear);
                setTitle(response.data.title);
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                alert('An error occurred. Please check your console for details.');
                console.log(error);
            });
    }, [id]); // Empty dependency array to run effect only once on component mount

    const handleEditBook = () => {
        const data = {
            title,
            author,
            publishYear,
        };

        setLoading(true);
        axios.put(`http://localhost:5555/books/${id}`, data)
            .then(() => {
                setLoading(false);
                navigate('/');
            })
            .catch((error) => {
                setLoading(false);
                alert('An error occurred. Please check your console for details.');
                console.log(error);
            });
    };

    return (
        <div className='p-4'>
            <BackButton />
            <h1 className='text-3xl my-4'>Edit A Book</h1>
            {loading ? <Spinner /> : ''}
            <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Title</label>
                    <input 
                        type='text'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Author</label>
                    <input 
                        type='text'
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Publish Year</label>
                    <input 
                        type='text'
                        value={publishYear}
                        onChange={(e) => setPublishYear(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>
                <div>
                    <button className='p-2 bg-sky-300 m-8' onClick={handleEditBook}>
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditeBooks;
