import BannerCard from "../bannerCard/BannerCard";
import "./bannerCards.scss";

const BannerCards = () => {
  //TEMPORARY
  const cards = [
    {
      id: 1,
      product: "Shirts",
      userId: 1,
      profilePic:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Lorem ipsum dolor sit",
      img: "https://images.pexels.com/photos/1381565/pexels-photo-1381565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      product: "Jerseys",
      userId: 2,
      profilePic:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Tenetur iste voluptates.",
      img: "https://images.pexels.com/photos/7303482/pexels-photo-7303482.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      product: "Hardware",
      userId: 3,
      profilePic:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Tenetur iste voluptates.",
      img: "https://images.pexels.com/photos/14048216/pexels-photo-14048216.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      product: "Gadgets",
      userId: 4,
      profilePic:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Tenetur iste voluptates.",
      img: "https://images.pexels.com/photos/13902165/pexels-photo-13902165.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <div className="bannerCards">
      {cards.map((card) => (
        <BannerCard card={card} key={card.id} />
      ))}
    </div>
  );
};

export default BannerCards;
