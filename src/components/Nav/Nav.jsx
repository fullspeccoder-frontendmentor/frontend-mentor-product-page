import Cart from "../Cart/Cart.jsx";

import { ReactComponent as CartIcon } from "../../images/icons/icon-cart.svg";
import { useState } from "react";

import AvatarImageUrl from "../../images/avatars/image-avatar.png";
import {
  NavbarContainer,
  NavHeadContainer,
  UserContainer,
  Avatar,
  NotificationBanner,
} from "./Nav";

const Nav = ({ cartItems, onDeleteItem }) => {
  const [cartIsOpen, setCartIsOpen] = useState(false);

  const numOfCartItems = cartItems.reduce(
    (acc, currItem) => acc + currItem.quantity,
    0
  );

  return (
    <NavbarContainer>
      <NavHeadContainer>
        <h1>sneakers</h1>
        <ul>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </NavHeadContainer>
      <UserContainer>
        <CartIcon
          className="cart-icon"
          onClick={() => {
            setCartIsOpen((isOpen) => !isOpen);
          }}
        />
        {numOfCartItems > 0 && (
          <NotificationBanner>{numOfCartItems}</NotificationBanner>
        )}
        <Avatar src={AvatarImageUrl} alt="profile" />
        {cartIsOpen && (
          <Cart cartItems={cartItems} onDeleteItem={onDeleteItem} />
        )}
      </UserContainer>
    </NavbarContainer>
  );
};

export default Nav;
