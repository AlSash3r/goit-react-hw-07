import PropTypes from "prop-types";
import s from "./ErrorMessage.module.css";

export default function ErrorMessage({ children }) {
  return <p className={s.error}>{children}</p>;
}

ErrorMessage.propTypes = {
  children: PropTypes.node.isRequired,
};
