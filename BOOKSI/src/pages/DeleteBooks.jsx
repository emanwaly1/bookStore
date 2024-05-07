import React,{useState} from 'react'
import { useNavigate,useParams } from 'react-router-dom'
import BackButton from '../../component/BackButton.jsx'; // Importing BackButton component
import Spinner from '../../component/spinner.jsx';
import axios from 'axios';
const DeleteBooks = () => {
    const[loading,setLoading]=useState(false);
    const navigate=useNavigate();
    const {id}=useParams();
    const handelDeletButton=()=>{
 setLoading(true);
 axios.delete(`http://localhost:5555/books/${id}`).then(
    ()=>{
        setLoading(false);
        navigate('/')
    }
 ).catch(
    (error)=>{
        setLoading(false);
        alert('there is a problem cheack the console');
        console.log(error);


    }
 )
    };
    return (
        <div className='p-4'>
        <BackButton/>
        <h1 className='text-3x1 my-4'>delete A Book</h1>
{
    loading ? 
    <Spinner/>
    :''
}
    <div className='flex felx-col item-center border-2 border-sky-400 rounded-x1 w-[600px] p-8 mx-auto'>
<h3 className='text-2x1'>Are you sure you want to delet this Book?</h3>
<button className='p-4 bg-red-600 text-white m-8 w-full' onClick={handelDeletButton}>
Yes,delet it
</button>
    </div>          
        </div>
    )
}

export default DeleteBooks
