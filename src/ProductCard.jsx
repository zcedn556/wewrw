
import { useState } from "react";


export default function ProductCard({ product }) {
  const [inCart, setInCart] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="card">
      <img src={product.image} alt={product.name} className="card-image" />
      <div className="card-content">
        <h3>{product.name}</h3>
        <p>{product.price} ₴</p>
        <div className="buttons">
          <button
            className={inCart ? "cart active" : "cart"}
            onClick={() => setInCart(!inCart)}
          >
            🛒
          </button>
          <button
            className={isFavorite ? "fav active" : "fav"}
            onClick={() => setIsFavorite(!isFavorite)}
          >
            {isFavorite ? "❤️" : "🤍"}
          </button>
        </div>
      </div>
    </div>
  );
}
