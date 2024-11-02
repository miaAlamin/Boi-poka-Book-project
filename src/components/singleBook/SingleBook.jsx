import { Link } from "react-router-dom";


const SingleBook = ({book}) => {
    
    const {bookName,bookId, category, tags, author, image} = book;

    return (
        <Link to={`book/${bookId}`}>

            <div className="card bg-base-100 w-96 shadow-xl py-6 border-2 border-gray-200 px-6 rounded-lg ">
                <figure className="bg-blue-50 py-6 border-2 border-gray-200 rounded-lg">
                    <img
                    className="w-[136px] h-[200px]"
                    src={image}
                    alt={bookName} />
                </figure>
                <div className="card-body">

                    <div className="flex justify-center gap-3">
                        {
                            tags.map((tag, index) => <button key={index} className="btn btn-xs bg-green-200 rounded-full text-green-600">{tag}</button>)
                        }
                    </div>
                    <h2 className="card-title">
                    {bookName}
                    <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{author}</p>
                    <div className=" border-t-2 border-dashed"></div>
                    <div className="card-actions justify-between">
                    
                    <div className="badge badge-outline">{category}</div>
                    <div className="rating">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                        defaultChecked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-100" />
                    </div>
                    </div>
                </div>
                </div>
                        
                </Link>
    );
};

export default SingleBook;