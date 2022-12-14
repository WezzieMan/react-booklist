import { createContext, useReducer, useEffect } from "react";
import { bookReducer } from "../reducers/bookReducer";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, dispatch] = useReducer(bookReducer, [ { title: "123", author: "io", id:2 }], () => {
    const localData = localStorage.getItem('books');
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books))
  }, [books])

  return (  
    <BookContext.Provider value={{books, dispatch}}>
      { props.children }
    </BookContext.Provider>
  )
}
 
export default BookContextProvider;


//USING USE STATE
// const BookContextProvider = (props) => {
//   const [books, setBooks] = useState([
//     {title: 'willy', author: 'you', id: 1},
//     {title: 'billy', author: 'me', id: 2}
//   ]);
//   const addBook = (title, author) => {
//     setBooks([...books, { title, author, id: uuid() }]);
//   };
//   const removeBook = (id) => {
//     setBooks(books.filter(book => book.id !== id));
//   };

//   return (  
//     <BookContext.Provider value={{books, addBook, removeBook}}>
//       { props.children }
//     </BookContext.Provider>
//   )
// }