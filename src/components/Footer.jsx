import { useFilters } from "../hooks/useFilters";
import "./Footer.css";

export function Footer() {
  const { filters } = useFilters();
  return (
    <footer className="footer">{JSON.stringify(filters, null, 2)}</footer>

    // <footer>
    //   <h4>Practicando React</h4>
    //   <span>Albert Lanza</span>
    //   <h5>Shopping Cart con useContext & useReducer</h5>
    // </footer>
  );
}
