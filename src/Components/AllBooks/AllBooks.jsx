import PropTypes from 'prop-types';
import { IoLocation } from "react-icons/io5";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { MdOutlineFindInPage } from "react-icons/md";
import { Link } from 'react-router-dom';

const AllBooks = ({ book }) => {
    const { bookId, bookName, author, image, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;

    return (
        <div>
            <div className='container mx-auto border p-6 my-10 rounded-lg '>
                <div className='lg:flex gap-10'>
                    <div className='bg-slate-200 p-5'>
                        <img src={image} alt="" />
                    </div>
                    <div>
                        <h1 className='text-3xl font-bold font-playFair'>{bookName}</h1>
                        <h3 className='text-xl'>By: {author}</h3>
                        <div className='lg:flex gap-3 my-2'>
                            <p>Tag</p>
                            {tags && tags.map((tag, index) => ( 
                                <span key={index} className=" border bg-green-50 text-green-600 px-2 py-1 rounded-full mr-2 mb-2 text-sm">
                                    {tag}
                                </span>
                            ))}
                            <div className='flex items-center gap-1'>
                                <IoLocation />
                                <p>Year of Publishing:{yearOfPublishing}</p>
                            </div>
                        </div>
                        <div className='lg:flex gap-14'>
                            <div className='flex items-center gap-3'>
                                <LiaUserFriendsSolid />
                                <p>Publisher: {publisher}</p>
                            </div>
                            <div className='flex items-center gap-3'>
                                <MdOutlineFindInPage />
                                <p>Page {totalPages}</p>
                            </div>
                        </div>
                        <hr className='mt-2' />
                        <div className='lg:flex gap-5 mt-2'>
                            <div className='bg-[#328EFF] text-center px-5 py-2 text-white rounded-full'><p>Category : {category}</p></div>
                            <div className='bg-[#FFAC33] text-center px-5 py-2 text-white rounded-full'><p>Rating: {rating}</p></div>
                            <Link to={`/book/${bookId}`}>
                                <button className='bg-[#23BE0A] px-5 py-2 text-white font-bold rounded-full'>View Details</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

AllBooks.propTypes = {
    book: PropTypes.object.isRequired,
};

export default AllBooks;
