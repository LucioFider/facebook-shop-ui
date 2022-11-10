import "./bannerCard.scss";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

const BannerCard = ({ card }) => {
  return (
    <div className="bannerCard">
      <div className="container">
        <div className="product">
          <ShoppingBagOutlinedIcon style={{ color: "#007fff" }} size="small" />

          <div className="details">
            <span>{card.product}</span>
            <img src={card.img} alt="cardBanner" />
            <span>{card.desc}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerCard;
