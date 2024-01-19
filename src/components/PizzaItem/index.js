import { addToCart } from "features/cart/cartSlice";
import { fetchPizza, searchPizza } from "features/pizza/pizzaSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const PizzaItem = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const item = useSelector((state) => state?.pizza?.item);
  const isLoading = useSelector((state) => state?.pizza?.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPizza());
  }, [dispatch]);

  const handleAdd = (item) => {
    dispatch(addToCart(item));
  };

  const handleSearch = () => {
    if (searchTerm) {
      dispatch(searchPizza(searchTerm));
    } else {
      dispatch(fetchPizza());
    }
  };

  return (
    <section>
      <div className="filter">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {isLoading ? (
        <p className="loading">Loading...</p>
      ) : (
        <ul className="wrapper">
          {item?.map((content) => (
            <li className="card" key={content.id}>
              <div className="card__img">
                <img src={content.image_url} alt="" />
              </div>
              <div className="card__title">
                <h4>{content?.title}</h4>
              </div>
              <Link to={`item/${content?.id}`}>
                <button className="card__btn mr">Recipe</button>
              </Link>
              <button className="card__btn" onClick={() => handleAdd(content)}>
                Add to Cart
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default PizzaItem;
