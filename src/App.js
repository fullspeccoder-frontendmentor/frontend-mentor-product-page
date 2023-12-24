import { useState } from "react";

import "./App.css";
import AvatarImageUrl from "./images/avatars/image-avatar.png";
import ProductImage1 from "./images/products/image-product-1.jpg";
import ProductImage2 from "./images/products/image-product-2.jpg";
import ProductImage3 from "./images/products/image-product-3.jpg";
import ProductImage4 from "./images/products/image-product-4.jpg";
import ProductThumbnail1 from "./images/products/image-product-1-thumbnail.jpg";
import ProductThumbnail2 from "./images/products/image-product-2-thumbnail.jpg";
import ProductThumbnail3 from "./images/products/image-product-3-thumbnail.jpg";
import ProductThumbnail4 from "./images/products/image-product-4-thumbnail.jpg";
import { ReactComponent as CartIcon } from "./images/icons/icon-cart.svg";
import Nav from "./components/Nav/Nav.jsx";

const PRODUCT = {
  id: 4,
  title: "Fall Limited Edition Sneakers",
  description:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
  discountedPrice: 125.0,
  discountedRate: 0.5,
  originalPrice: 250.0,
  image: ProductImage1,
  price: 125.0,
  quantity: 5,
};

function App() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Adidas Limited Edition Sneakers",
      price: "125.00",
      quantity: 1,
      image: ProductImage1,
    },
    {
      id: 2,
      title: "First Limited Edition Sneakers",
      price: "375.00",
      quantity: 3,
      image: ProductImage2,
    },
    {
      id: 3,
      title: "New Balance Limited Edition Sneakers",
      price: "145.00",
      quantity: 1,
      image: ProductImage3,
    },
  ]);
  const [carouselSelected, setcarouselSelected] = useState(true);

  const handleAddItem = (newCartItem) => {
    if (!newCartItem) return alert("Item not in inventory!");
    setCartItems((cartItems) => [
      ...cartItems.filter((cartItem) => cartItem.id !== newCartItem.id),
      newCartItem,
    ]);
  };

  const handleDeleteItem = (id) => {
    setCartItems((cartItems) =>
      cartItems.filter((cartItem) => cartItem.id !== id)
    );
  };

  const handleCarouselSelected = () => {
    setcarouselSelected((selected) => !selected);
  };

  return (
    <div className="App">
      <Nav cartItems={cartItems} onDeleteItem={handleDeleteItem} />
      <Main
        item={PRODUCT}
        onAddItem={handleAddItem}
        onCarouselSelected={handleCarouselSelected}
      />
      {carouselSelected && (
        <ProductModal onCarouselSelected={handleCarouselSelected} />
      )}
    </div>
  );
}

const Main = ({ item, onAddItem, onCarouselSelected }) => {
  return (
    <main className="Main">
      <ProductCarousel onCarouselSelected={onCarouselSelected} />
      <ProductDetails item={item} onAddItem={onAddItem} />
    </main>
  );
};

const CartItem = ({ id, title, price, quantity, image, onDeleteItem }) => {
  return (
    <li className="CartItem">
      <img src={image} alt={title} />

      <div>
        <span>{title}</span>
        <span>
          {`$${price} x ${quantity}`}{" "}
          <span className="multiplied-quantity">{`$${
            Number(price) * Number(quantity)
          }`}</span>
        </span>
      </div>
      <span className="delete-cart-item-btn" onClick={() => onDeleteItem(id)}>
        X
      </span>
    </li>
  );
};

const ProductCarousel = ({ onCarouselSelected }) => {
  const [activePhoto, setActivePhoto] = useState(1);

  const handlePhotoChange = (id) => {
    setActivePhoto(id);
  };

  const handleDecrement = () => {
    if (activePhoto === 1) setActivePhoto(4);
    else setActivePhoto(activePhoto - 1);
  };

  const handleIncrement = () => {
    if (activePhoto === 4) setActivePhoto(1);
    else setActivePhoto(activePhoto + 1);
  };

  return (
    <div className="Product">
      <button className="carousel-btn-left" onClick={handleDecrement}>
        {"<"}
      </button>
      {activePhoto === 1 && (
        <img src={ProductImage1} alt="product" onClick={onCarouselSelected} />
      )}
      {activePhoto === 2 && (
        <img src={ProductImage2} alt="product" onClick={onCarouselSelected} />
      )}
      {activePhoto === 3 && (
        <img src={ProductImage3} alt="product" onClick={onCarouselSelected} />
      )}
      {activePhoto === 4 && (
        <img src={ProductImage4} alt="product" onClick={onCarouselSelected} />
      )}
      <button className="carousel-btn-right" onClick={handleIncrement}>
        {">"}
      </button>
      <div>
        <img
          id="1"
          className={activePhoto === 1 ? "active" : ""}
          src={ProductThumbnail1}
          alt="product thumbnail 1"
          onClick={() => handlePhotoChange(1)}
        />
        <img
          id="2"
          className={activePhoto === 2 ? "active" : ""}
          src={ProductThumbnail2}
          alt="product thumbnail 2"
          onClick={() => handlePhotoChange(2)}
        />
        <img
          id="3"
          className={activePhoto === 3 ? "active" : ""}
          src={ProductThumbnail3}
          alt="product thumbnail 3"
          onClick={() => handlePhotoChange(3)}
        />
        <img
          id="4"
          className={activePhoto === 4 ? "active" : ""}
          src={ProductThumbnail4}
          alt="product thumbnail 4"
          onClick={() => handlePhotoChange(4)}
        />
      </div>
    </div>
  );
};

const ProductDetails = ({ item, onAddItem }) => {
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = () => {
    onAddItem({ ...item, quantity });
    setQuantity(0);
  };

  return (
    <div className="ProductDetails">
      <p className="sneaker-company">SNEAKER COMPANY</p>
      <h3 className="product-name">{item.title}</h3>

      <p className="product-description">{item.description}</p>

      <div className="discounted-price">
        <span>${item.discountedPrice}.00</span>
        <span>{item.discountedRate * 100}%</span>
      </div>

      <strike className="original-price">${item.originalPrice}.00</strike>

      <div className="product-footer">
        <div className="product-quantity">
          <span onClick={() => setQuantity((q) => (q > 0 ? q - 1 : 0))}>-</span>
          <span>{quantity}</span>
          <span onClick={() => setQuantity((q) => q + 1)}>+</span>
        </div>
        <button onClick={handleAddToCart}>
          <CartIcon /> Add to cart
        </button>
      </div>
    </div>
  );
};

const ProductModal = ({ onCarouselSelected }) => {
  return (
    <div className="Modal">
      <button>
        <span onClick={onCarouselSelected}>&#9747;</span>
      </button>
      <ProductCarousel onCarouselSelected={onCarouselSelected} />
    </div>
  );
};

export default App;
