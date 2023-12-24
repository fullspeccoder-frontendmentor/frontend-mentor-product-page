import CartItem from "../CartItem/CartItem";

const Cart = ({ cartItems, onDeleteItem }) => {
  const hasItems = cartItems.length > 0;

  return (
    <aside className="Cart">
      <h4>Cart</h4>
      <ul className="CartItems">
        {cartItems.map((cartItem) => (
          <CartItem
            key={cartItem.id}
            {...cartItem}
            onDeleteItem={onDeleteItem}
          />
        ))}
      </ul>
      {hasItems && (
        <div>
          <button>Checkout</button>
        </div>
      )}
      {!hasItems && (
        <div className="no-items-message">
          <p>You have no items in cart!</p>
        </div>
      )}
    </aside>
  );
};

export default Cart;
