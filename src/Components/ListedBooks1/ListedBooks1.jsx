import { useState } from "react";
// import AllBooks from "../AllBooks/AllBooks";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";
import { getStoredReadBooks, getStoredWishlistBooks } from "../../utility/localstorage";
const ListedBooks1 = () => {

    const readList=getStoredReadBooks();
    const wishList=getStoredWishlistBooks()
    const [tabIndex,setTabIndex]=useState(0)
    const [readListState,setReadListState]=useState([])
    const [wishListState,setWishListState]=useState([])

    const handleChange = (e) => {
        const v = e.target.value;
        if (readList !== null) {
          if (v === "Rating") {
            readList.sort((a, b) => (a.rating > b.rating ? -1 : 1));
          } else if (v === "Number of Page") {
            readList.sort((a, b) => (a.totalPages > b.totalPages ? -1 : 1));
          } else if (v === "Year of Publishing") {
            readList.sort((a, b) =>
              a.yearOfPublishing > b.yearOfPublishing ? -1 : 1,
            );
          }
          setReadListState([...readList]);
        } else {
          setReadListState([]);
        }
        if (wishList !== null) {
          if (v === "Rating") {
            wishList.sort((a, b) => (a.rating > b.rating ? -1 : 1));
          } else if (v === "Number of Page") {
            wishList.sort((a, b) => (a.totalPages > b.totalPages ? -1 : 1));
          } else if (v === "Year of Publishing") {
            wishList.sort((a, b) =>
              a.yearOfPublishing > b.yearOfPublishing ? -1 : 1,
            );
          }
          setWishListState([...wishList]);
        } else {
          setWishListState([]);
        }
      };
    

    return (
        <div>
            <div className="container mx-auto bg-slate-200 rounded-xl text-center py-8">
                <h1 className="text-2xl font-bold">Books</h1>
            </div>
            <div className="dropdown my-8 lg:ml-[700px]">
                <div tabIndex={0} role="button" className="bg-green-500 px-5 m-1 flex items-center text-xl gap-3 py-2 rounded-lg font-semibold text-white">Sort By <MdKeyboardArrowDown /></div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a></a></li>
                    <li ><a onClick={handleChange}>Rating</a></li>
                    <li><a onClick={handleChange}>Number of pages</a></li>
                    <li><a onClick={handleChange}>Publisher Year</a></li>
                </ul>
            </div>
            <div className="flex -mx-4 items-center overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:text-gray-800 my-10">
                <Link onClick={()=>setTabIndex(0)} to='' rel="noopener noreferrer" href="#"  className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex===0?'border border-b-0':'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <span>Read</span>
                </Link>
                <Link  onClick={()=>setTabIndex(1)} to='wishlist' rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex===1?'border border-b-0':'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                    <span>Wishlist</span> 
                </Link>
                
    
            </div>
            <Outlet></Outlet>
        </div>
        
        
    );
};

export default ListedBooks1;