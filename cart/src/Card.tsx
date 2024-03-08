import { useState } from "react";
import { useCartContext } from "./context/useContext";


interface Props {
  item: {
    id: number;
    title: string;
    image: string;
    desc: string;
    price: number;
  };
}

const Card = ({ item }: Props) => {
  const { count, setCount } = useCartContext();

  const [cart, setCart] = useState({
    id: item.id,
    itemCount: 0,
  });

  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={item.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">{item.desc}</p>
          <p>${item.price}</p>
          <div className="inputCart">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                if (count < 10) {
                  setCount(count + 1);
                  setCart((prevCart) => ({
                    ...prevCart,
                    itemCount: prevCart.itemCount + 1,
                  }));
                }
              }}
            >
              +
            </button>
            <div className="cartCount">{cart.itemCount}</div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                if (count > 0 && cart.itemCount > 0) {
                  setCount(count - 1);
                  setCart((prevCart) => ({
                    ...prevCart,
                    itemCount: prevCart.itemCount - 1,
                  }));
                }
              }}
            >
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
