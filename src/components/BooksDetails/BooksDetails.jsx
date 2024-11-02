import { useLoaderData, useParams } from "react-router-dom";
import { addStoreReadList, addwishlist } from "../../utility/addToDB";


const BooksDetails = () => {


    const {booksId} = useParams();
    const id = parseInt(booksId);
    const data = useLoaderData();


   const book =  data.find(book => book.bookId === id);

   const {image, bookId: currentbookId, bookName} = book;


  const handleMarkAsRead = (id) =>{

    addStoreReadList(id)
    console.log(id)
  }

  const handleWishList = (id) =>{

    addwishlist(id)
  }

    return (
        <div>
            <h1> BookId:{currentbookId}</h1>
            <div className="hero bg-base-200 min-h-screen">
           
            
           <div className="hero-content flex-col lg:flex-row">
               
           <img
               src={image}
               className="max-w-[300px] rounded-lg shadow-2xl" />
           <div>
               <h1 className="text-5xl font-bold">Box Office News!</h1>
               <p className="py-6">
               Provident cupiditate voluptatem et in. Quaerat fugiat<br/> ut assumenda excepturi exercitationem
               quasi. In deleniti eaque aut repudiandae et a id nisi.
               </p>
               <button onClick={()=>handleWishList(booksId)} className="btn btn-primary"> Add to Wish List</button>
               <button onClick={()=> handleMarkAsRead(booksId)} className="btn btn-primary btn-outline ml-3">Mark as Read</button>
           </div>
           </div>
       </div>
        </div>
       
    );
};

export default BooksDetails;