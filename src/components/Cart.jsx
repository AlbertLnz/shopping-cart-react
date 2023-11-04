import { useId } from "react";
import "./Cart.css";
import { CartIcon, RemoveFromCartIcon } from "./Icons";

export function Cart() {
  const cartCheckboxId = useId();

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden />

      <aside className="cart">
        <ul>
          <li>
            <img
              src="https://i.dummyjson.com/data/products/2/thumbnail.jpg"
              alt="iPhone"
            />
            <div>
              <strong>iPhone</strong> - $1499
            </div>
            <footer>
              <small>
                <button>+</button>
              </small>
            </footer>
          </li>
        </ul>
        <button>
          <RemoveFromCartIcon />
        </button>
      </aside>
    </>
  );
}
