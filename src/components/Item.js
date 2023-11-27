import React, {useState} from "react";

function Item({ name, category }) {
const [ isInCart, setIsInCart ] = useState(false)

const handleAddToCart = () => {
  setIsInCart((previousIsInCart) => !previousIsInCart)
}

const itemClass = `item ${category} ${isInCart ? "in-cart" : ""}`

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddToCart}>
        {isInCart ? "Remove From Cart" : "Add To Cart"}
      </button>
    </li>
  );
}

export default Item;
