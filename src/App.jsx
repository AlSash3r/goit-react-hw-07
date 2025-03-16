import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectLoading } from "./redux/selectors"; 
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import Loading from "./components/Loading/Loading";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading); 
  const error = useSelector(selectError); 

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {error && <ErrorMessage>Error!</ErrorMessage>} {}
      {loading && !error && <Loading />} {}
      <ContactList />
    </div>
  );
}

export default App;
