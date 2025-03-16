import s from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import { selectFilter } from "../../redux/selectors";

export default function SearchBox() {
  const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={s.searchContainer}>
      <label className={s.label}>
        Find contacts by name
            <input type="text"
            value={filterValue}
            onChange={handleChange}
            placeholder="Search..."/>
      </label>
    </div>
  );
}