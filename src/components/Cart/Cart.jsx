import {
  CartContainer,
  CartItemsContainer,
  CartButtonContainer,
  MessageContainer,
} from "./Cart";
import CartItem from "../CartItem/CartItem.component";

const Cart = ({ cartItems, onDeleteItem }) => {
  const hasItems = cartItems.length > 0;

  return (
    <CartContainer>
      <h4>Cart</h4>
      <CartItemsContainer>
        {cartItems.map((cartItem) => (
          <CartItem
            key={cartItem.id}
            {...cartItem}
            onDeleteItem={onDeleteItem}
          />
        ))}
      </CartItemsContainer>
      {hasItems && (
        <CartButtonContainer>
          <button>Checkout</button>
        </CartButtonContainer>
      )}
      {!hasItems && (
        <MessageContainer>
          <p>You have no items in cart!</p>
        </MessageContainer>
      )}
    </CartContainer>
  );
};

export default Cart;
