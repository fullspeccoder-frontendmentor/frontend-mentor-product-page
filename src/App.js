import "./App.css";
import Image from "./images/avatars/image-avatar.png";
import { ReactComponent as CartIcon } from "./images/icons/icon-cart.svg";

function App() {
  return (
    <div className="App">
      <Nav />
    </div>
  );
}

const Nav = () => {
  return (
    <nav className="Nav">
      <div className="navigation">
        <h1>sneakers</h1>
        <ul>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="user-container">
        <CartIcon className="cart-icon" />
        <img src={Image} alt="profile" />
      </div>
    </nav>
  );
};

export default App;
