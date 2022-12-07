import { useContext, useState } from 'react'
import { BookContext } from '../contexts/BookContext';

const BookForm = () => {
  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const handleSubmit = (e) => {
    e.preventDefault(); //prevent the reload of page
    dispatch({type: 'ADD_BOOK', book: { title, author }});
    setTitle("");
    setAuthor("")
  }

  return (  
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder='book title' 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} //be able to write inside the input + save dynamically the state of variable
        required
      />
      <input 
        type="text" 
        placeholder='book author' 
        value={author} 
        onChange={(e) => setAuthor(e.target.value)}
        required
      />

      <input type="submit" value='Add book..' className='btnSubmit'/>
    </form>
  );
}
 
export default BookForm;