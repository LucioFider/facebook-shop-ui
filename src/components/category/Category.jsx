import "./category.scss";

const Category = ({ category }) => {
  return (
    <div className="category">
      <div className="container">
        <div className="icon">{category.icon}</div>
        <div className="title">
          <span className="heading">{category.title}</span>
          <span>{category.desc}</span>
          <p>{category.stars}</p>
        </div>
        <div className="btn">
          <button>{category.button}</button>
        </div>
      </div>
    </div>
  );
};
export default Category;
