import React, {  useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../../component/BackButton.jsx'; // Importing BackButton component
import Spinner from '../../component/spinner.jsx';
import { useNavigate } from 'react-router-dom';

const CreatBooks = () => {
    const[title,setTiltle]=useState('');
    const[author,setAuthor]=useState('');
    const[publishYear,setPublishYear]=useState('');
    const [loading,setLoading]=useState(false);
    const navigate=useNavigate();
    const handelSaveBook=()=>{
     const data={  title ,
       author,
       publishYear,
     };
  
    setLoading(true);
    axios.post('http://localhost:5555/books', data).
    then(
()=>{
    setLoading(false);
    navigate('/')
})
.catch((error)=>{
setLoading(false);
alert('An error happend please cheack your console');
console.log(error);

    });
};

  
    return (
        <div className='p-4'>
        <BackButton/>
        <h1 className='text-3x1 my-4'>Create A Book</h1>
{loading ?<Spinner/> :''}
<div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto '>
<div className='my-4'>
<label className=' text-x1 mr-4 text-gray-500'>Title</label>
<input 
    type='text'
    value={title}
    onChange={(e)=>setTiltle(e.target.value)}
    className='border-2 border-gray-500 px-4 py-2 w-full'
/>


</div>
    <div className='my-4'>
<label className=' text-x1 mr-4 text-gray-500'>Author</label>
<input 
    type='text'
    value={author}
    onChange={(e)=>setAuthor(e.target.value)}
    className='border-2 border-gray-500 px-4 py-2 w-full'
/>
</div>
<div className='my-4'>
<label className=' text-x1 mr-4 text-gray-500'>Publish Year</label>
<input 
    type='text'
    value={publishYear}
    onChange={(e)=>setPublishYear(e.target.value)}
    className='border-2 border-gray-500 px-4 py-2 w-full'
/>
</div>
<div>
    <button className=' p-2 bg-sky-300 m-8 ' onClick={handelSaveBook}>
Save
    </button>
</div>
</div>
            
        </div>
    )
}

export default CreatBooks
