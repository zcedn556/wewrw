import React, { useState } from "react";
import ProductCard from "./ProductCard";
import Form from "./form";
import "./App.css";

export default function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Кросівки Nike",
      price: 5000,
      image: "https://i.ebayimg.com/images/g/NrcAAOSwY21lOC1r/s-l1200.jpg",
      description: "Круті амортизуючі кросівки"
    },
    {
      id: 2,
      name: "Викрутка",
      price: 99,
      image: "https://oberon.com.ua/image/cachewebp/catalog/baseimg/Work/00000000-0000-0000-0000-000000000000/59143095-7ffb-11ee-bc9a-000c2906f772-1200x900.webp",
      description: "Звичайна металева викрутка"
    },
    {
      id: 3,
      name: "Молоток",
      price: 5299,
      image: "https://vitals.ua/image/cache/catalog/demo/generators/ruchnoj_instrument/181815/mltok-gvzd-fb-450-g-2-1000x1000.jpg",
      description: "Молоток з націнкою в декілька тисяч"
    },
  ]);

  const addProduct = (newProduct) => {
    setProducts([
      ...products,
      {
        ...newProduct,
        id: products.length + 1
      }
    ]);
  };

  return (
    <div className="app">
      <Form onAdd={addProduct} />

      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}


