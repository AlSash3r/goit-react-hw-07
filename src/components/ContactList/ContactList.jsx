import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import Loading from "../Loading/Loading"; 
import s from "./ContactList.module.css";
import { selectError, selectFilteredContacts, selectLoading } from "../../redux/selectors";

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectLoading);

  return (
    <div>
      {isLoading && !error && <Loading />} {}
      {filteredContacts.length > 0 && (
        <ul className={s.containerList}>
          {filteredContacts.map(({ id, name, number }) => (
            <Contact id={id} name={name} number={number} key={id} />
          ))}
        </ul>
      )}
      {error && <h2>error</h2>}
    </div>
  );
}
