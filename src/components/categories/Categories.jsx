import "./categories.scss";
import {
  gamingCard,
  categoryCard,
  healthCard,
  dressesCard,
} from "../../constants/constants";
import Gaming from "../categoryCards/gaming/Gaming";

const Categories = () => {
  return (
    <div>
      <div className="categories">
        <Gaming />
      </div>
    </div>
  );
};

export default Categories;
