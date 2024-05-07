import express from "express";
import { PORT, MongoDBURL } from "./config.js";
import mongoose, { get } from "mongoose";
import { Book } from "./models/bookModel.js";
import bookRoutes from'./routes/bookRoutes.js'
import cors from 'cors';

// Create an instance of the Express application
const app = express();


app.use('/books',bookRoutes)
// Add middleware to parse incoming JSON data
app.use(express.json());

//middleware to handel cors policy
//firt way to allow orgins with defualt of cors (*)
//secand option allow two customs orgins
// app.use(cors())>>>> this is the first 
// app.use(
//     cors({
//         origin:'http:localhost:3000',
//         methods:['GET','POST','PUT','DELETE'],
//         allowedHearders:['Content-Typecd ..cd ..cd ..cd !$cd !$'],
//     })
// )

// Define a route for the root path ('/') that logs the request and responds with a custom message and status code 234
app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send("Hello, it is connected to port 234");
});//this one is just to connect to mongodb ! not used in router ! 

// // Define a POST route for '/books':
// // - Validate the request body for required fields (title, author, publishYear)
// // - Create a new book object from the request body
// // - Save the new book to the database using the Book model and return the book data with a status code 201
// // - Handle any errors that occur during this process
// app.post('/books', async (request, response) => {
//     try {
//         if (!request.body.title || !request.body.author || !request.body.publishYear) {
//             return response.status(400).send("Send all the schema");
//         }

//         const newBook = {
//             title: request.body.title,
//             author: request.body.author,
//             publishYear: request.body.publishYear,
//         };

//         const book = await Book.create(newBook);
//         return response.status(201).send(book);

//     } catch (error) {
//         console.log(error.message);
//         response.status(500).send({ message: error.message });
//     }
// });

// //route to get all books from the database
// app.get('/books',async(request,response)=>{
// try{
//     const books=await Book.find({});
//     return response.status(200).json({
//         count:books.lenght,
//         data:books,}
//     )
// }catch(error){
//     console.log(error.message);
//     response.status(500).send({message:error.message})
//  } 
// });

// //find books by id 
// app.get('/books/:id',async(request,response)=>{
//     try{
//       const { id }= request.params;
//       const book = await Book.findById(id);// becarfull to choose the corect database which you want to use
//       return response.status(200).json(book)
//     }catch(error){
//         console.log(error.message);
//         response.status(500).send({message:error.message})
//      } 
//     });

// //Update the books information
// //most of the route is the same as each other expect on try{ }side 
// //in update you have to ensure that the information is found at the database
// //it is PUT !!
// app.put('/books/:id',async(request,response)=>{
//     try{
//         if(
//     !request.body.title||
//     !request.body.author||
//     !request.body.publishYear
// ){

//     return response.status(400).send({
//         massage:"Send all reqiured fileds: tiltle,author ,publishYear",  // after we ensure that the informations is founded 
//                                                                          //then we want to take the right info to update it 
//     })}
//     const {id}=request.params;
//     const result= await Book.findByIdAndUpdate(id,request.body)

//    if(!result){ 
//     return response.status(404).json({masssage:"book not found"})
//    }
//    else  {
//     return response.status(200).send({massage:"book updated sucessfully"})
//    }

//     }catch(error){
//         console.log(error.message);
//         response.status(500).send({message:error.message})
//      } 
//     });
// //Delet the book 
// app.delete('/books/:id',async(request,response)=>{
//     try{
//       const { id }= request.params;
//       const book = await Book.findByIdAndDelete(id);// becarfull to choose the corect database which you want to use
// if(!request){
// return response.status(404).json({masssage:"the data is not deleted"});
// }else{
//     return response.status(200).send({massage:"book deleted sucessfully"})
// }
//     }catch(error){
//         console.log(error.message);
//         response.status(500).send({message:error.message})
//      } 
//     });
// // Connect to the MongoDB database using the MongoDBURL from the config file
// If successful, log a message indicating the successful connection
// Start the Express server to listen on the specified PORT
// If there is an error during the database connection or server start-up, log the error
mongoose.connect(MongoDBURL)
    .then(() => {
        console.log("The database is connected");
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });