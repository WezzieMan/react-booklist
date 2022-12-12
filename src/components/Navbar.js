import { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const Navbar = () => {
  const { books } = useContext(BookContext);
  
  return (  
    <div className="py-[0.7rem] px-[1.6rem] text-center bg-[#663399] rounded-t-[2rem]">
      <h1 className="my-[0.7rem] font-bold text-[2rem]">Daniel's reading list</h1>
      <p>Currently you have {books.length} books to get through...</p>
    </div>
  );
}
 
export default Navbar;