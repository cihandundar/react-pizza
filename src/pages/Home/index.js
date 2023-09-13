import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import Kopernik from "../../assets/images/kopernik.gif";
import { PizzaItem } from "components";
const Home = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <main className="main">
      <section className="section">
        {/* <div className="section__img">
          <img src={Kopernik} alt="" />
        </div> */}
        <div className="section__content">
          <PizzaItem />
        </div>
      </section>
    </main>
  );
};

export default Home;
