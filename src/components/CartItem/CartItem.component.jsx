import {
  CartItemContainer,
  CartItemImage,
  CartItemInfoContainer,
  DeleteCartButton,
  TotalContainer,
} from "./CartItem.styles";

const CartItem = ({ id, title, price, quantity, image, onDeleteItem }) => {
  return (
    <CartItemContainer>
      <CartItemImage src={image} alt={title} />

      <CartItemInfoContainer>
        <span>{title}</span>
        <span>
          {`$${price} x ${quantity}`}{" "}
          <TotalContainer>{`$${
            Number(price) * Number(quantity)
          }`}</TotalContainer>
        </span>
      </CartItemInfoContainer>
      <DeleteCartButton onClick={() => onDeleteItem(id)}>X</DeleteCartButton>
    </CartItemContainer>
  );
};

export default CartItem;
