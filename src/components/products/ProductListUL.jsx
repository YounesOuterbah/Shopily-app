export const ProductListUL = ({ toggled, setToggled, setApiControl }) => {
  return (
    <>
      <ul className="product-list">
        <li
          className={toggled === "All" ? "active" : ""}
          onClick={() => (setApiControl(""), setToggled("All"))}
        >
          All
        </li>
        <li
          className={toggled === "Electronics" ? "active" : ""}
          onClick={() => (
            setApiControl("/category/electronics"), setToggled("Electronics")
          )}
        >
          Electronics
        </li>
        <li
          className={toggled === "Jewelry" ? "active" : ""}
          onClick={() => (
            setApiControl("/category/jewelery"), setToggled("Jewelry")
          )}
        >
          Jewelry
        </li>
        <li
          className={toggled === "Men's clothing" ? "active" : ""}
          onClick={() => (
            setApiControl("/category/men's clothing"),
            setToggled("Men's clothing")
          )}
        >
          Men's clothing
        </li>
        <li
          className={toggled === "Women's clothing" ? "active" : ""}
          onClick={() => (
            setApiControl("/category/women's clothing"),
            setToggled("Women's clothing")
          )}
        >
          Women's clothing
        </li>
      </ul>
    </>
  );
};
