import { useState } from "react";
import { useContext } from "react";
import { FormContext } from "../context/context";
import { ProductInterface } from "../interfaces/interface";

export default function ProductForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const { products, setProducts, setIsShow, isShow } = useContext(FormContext);

  const handleImageChange = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    const newProduct: ProductInterface = {
      title,
      description,
      price,
      image, // Assuming image is part of ProductInterface
    };

    setProducts([newProduct, ...products]); // Corrected order to add new product first
    setIsShow(false);
  };

  return (
    <>
      {" "}
      {/* Wrap everything in a fragment */}
      <div
        className="form-overlay"
        style={{ display: isShow ? "block" : "none" }}
      >
        {" "}
        {/* Overlay with conditional display */}
        <div className="product-form-container">
          <form className="product-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="title">عنوان:</label>
              <input
                type="text"
                name="title"
                id="title"
                placeholder="عنوان را وارد کنید..."
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">توضیحات:</label>
              <textarea
                name="description"
                id="description"
                placeholder="توضیحات..."
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                required
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="price">قیمت:</label>
              <input
                type="number"
                name="price"
                id="price"
                value={price}
                onChange={(event) => setPrice(Number(event.target.value))}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="image">عکس:</label>
              <input
                type="file"
                name="image"
                id="image"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
            <button type="submit" className="submit-button">
              ثبت آگهی جدید
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
