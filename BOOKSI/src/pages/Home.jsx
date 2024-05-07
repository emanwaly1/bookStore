import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../../component/spinner.jsx";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdAddBox, MdDelete } from "react-icons/md";
import BooksCards from "../../component/home/BooksCards.jsx";
import BooksTable from "../../component/home/BooksTable.jsx";
const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showtype,setshowType]=useState('table')

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/books")
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
    <div className="flex justify-between items-center gap-x-4 ">
      <button className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-1g" onClick={()=>setshowType('table')}>
         TABLE
      </button>
      <button className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-1g" onClick={()=>setshowType('card')}>
       CARDS
      </button>
    </div>
      <div className="flex justify-between items-center" >
        <h1 className="text-3xl my-8">Book List</h1>
        <Link to="/books/create">
          <MdAddBox className="text-sky text-4xl" />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : showtype=='table'?(
        <BooksTable books={books}/> )
      : (<BooksCards books={books}/>
      )}
    </div>
  );
};

export default Home;
