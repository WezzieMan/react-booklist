import { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const BookDetails = ({book}) => {
  const { dispatch } = useContext(BookContext);

  return (  
    <li className="hover:opacity-[0.7] hover:line-through bg-[#0094C6] p-[0.6rem] 
    cursor-pointer rounded-md my-[0.6rem] mx-0" 
    onClick={() => dispatch({type: 'REMOVE_BOOK', id:book.id})}
    >
      <div className="font-bold text-[#fff] text-[1.2rem]">{book.title}</div>
      <div className="text-[#eee] text-[0.925rem]">{book.author}</div>
    </li>
  );
}
 
export default BookDetails;