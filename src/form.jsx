import { useState } from "react";

export default function Form({ onAdd }) {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    image: "",
    description: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.price && formData.image) {
      onAdd(formData);
      setFormData({
        name: "",
        price: "",
        image: "",
        description: ""
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Назва товару" />
      <input name="price" value={formData.price} onChange={handleChange} placeholder="Ціна" />
      <input name="image" value={formData.image} onChange={handleChange} placeholder="URL картинки" />
      <input name="description" value={formData.description} onChange={handleChange} placeholder="Опис" />
      <button type="submit">Додати</button>
    </form>
  );
}
