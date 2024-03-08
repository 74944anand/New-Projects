import Card from "./Card";
import { data } from "./data";

const Cards = () => {
  return (
    <div id="data">
      {data.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Cards;
