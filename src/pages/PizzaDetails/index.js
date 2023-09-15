import { fetchPizzaDetailsComments } from "features/pizza/pizzaSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Recep from "../../assets/images/recep.gif";
const PizzaDetails = () => {
  const comments = useSelector((state) => state?.pizza?.comments);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchPizzaDetailsComments(id));
  }, [dispatch, id]);

  return (
    <div className="comments">
      <h1>Recipe</h1>
      <img src={Recep} alt="" />
      {comments?.map((comment) => (
        <div className="comments__item" key={comment?.id}>
          <h3>{comment?.description}</h3>
        </div>
      ))}
    </div>
  );
};

export default PizzaDetails;
