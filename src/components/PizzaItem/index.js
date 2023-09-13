import { fetchPizza } from "features/pizza/pizzaSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const PizzaItem = () => {
  const [filteredItems, setFilteredItems] = useState([]);
  const item = useSelector((state) => state?.pizza?.item);
  const isLoading = useSelector((state) => state?.pizza?.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPizza());
  }, [dispatch]);

  // Verileri "publisher" değerine göre filtrele
  const filterByPublisher = (publisher) => {
    const filteredData = item.filter(
      (content) => content.publisher === publisher
    );
    setFilteredItems(filteredData);
  };

  const uniquePublishers = [
    ...new Set(item?.map((content) => content.publisher)),
  ];
  uniquePublishers.unshift("All");

  return (
    <section>
      <div className="filter">
        {uniquePublishers.map((publisher) => (
          <button key={publisher} onClick={() => filterByPublisher(publisher)}>
            {publisher}
          </button>
        ))}
      </div>
      {isLoading ? (
        <p className="loading">Loading...</p>
      ) : (
        <ul className="wrapper">
          {filteredItems.length > 0
            ? filteredItems.map((content) => (
                <li className="card" key={content.id}>
                  <div className="card__img">
                    <img src={content.image_url} alt="" />
                  </div>
                  <div className="card__title">
                    <h4>{content?.title}</h4>
                  </div>
                </li>
              ))
            : item?.map((content) => (
                <li className="card" key={content.id}>
                  <div className="card__img">
                    <img src={content.image_url} alt="" />
                  </div>
                  <div className="card__title">
                    <h4>{content?.title}</h4>
                  </div>
                </li>
              ))}
        </ul>
      )}
    </section>
  );
};

export default PizzaItem;
