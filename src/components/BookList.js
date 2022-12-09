import { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import BookDetails from './BookDetails'

const BookList = () => {
  const { books } = useContext(BookContext);
  
  return books.length ? (  
    <div className="m-[1.25rem]">
      <ul className="p-0 list-none ">
        { books.map((book) => {
          return( <BookDetails book={book} key={book.id} />)
        })}
      </ul>
    </div>
  ) : (
    <div className="text-center m-[1.25rem]">No books to read :)</div>
  )
}
 
export default BookList;