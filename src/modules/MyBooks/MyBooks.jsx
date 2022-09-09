import { useSelector, useDispatch } from "react-redux";
import Container from "./Container";
import FormAddBook from "./FormAddBook";
import BookList from "./BookList";
import { addBook } from "redux/actions";

// import { addBook, removeBook, setFilter } from "../../redux/actions";
// import { getFilteredBooks, getFilter } from "../../redux/selectors";

import styles from "./my-books.module.css";
 

const MyBooks = () => {
    const books = useSelector(store => store.books)
    const dispatch = useDispatch()
    const onAddBook = (payload) => {
        const  action = addBook(payload)
        dispatch(action)
        // console.log(action)
    }
     
 
    return (
        <div className={styles.books}>
            <Container title="Добавить книгу">
                <FormAddBook onSubmit={onAddBook}/>
            </Container>
            <Container title="Список книг">
                <input   name="filter" type="text" placeholder="Введите название " />
                <BookList   books={books} />
            </Container>
        </div>
    )

}

export default MyBooks;