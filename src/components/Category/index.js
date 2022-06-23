import "./style.css";
const Category = ({ category }) => {
  return (
    <dl className="category">
      <dt className="a11y-hidden">Category</dt>
      {category.map((name, index) => (
        <dd key={index}>{name}</dd>
      ))}
    </dl>
  );
};

export default Category;
