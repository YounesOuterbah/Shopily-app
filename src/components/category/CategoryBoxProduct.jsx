export const CategoryBoxProduct = ({ title, pic }) => {
  return (
    <>
      <div className="category-box-product">
        <img src={pic} alt="" />
        <span>{title}</span>
      </div>
    </>
  );
};
