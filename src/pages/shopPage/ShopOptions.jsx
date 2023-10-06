export const ShopOptions = ({
  filterdProducts,
  setFilterItem,
  setPriceSorted,
  setSortingOption
}) => {
  return (
    <>
      <div className="shop-box-options">
        <div className="options">
          <select onChange={(e) => setFilterItem(e.target.value)}>
            <option disabled>Select Category</option>
            <option value="All">All</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelry</option>
            <option value="men's clothing">Men's clothing</option>
            <option value="women's clothing">Women's clothing</option>
          </select>
          <select onChange={(e) => setPriceSorted(e.target.value)}>
            <option disabled>Select Price</option>
            <option value="All">All</option>
            <option value="Lth">Low to High</option>
            <option value="Htl">High to Low</option>
          </select>
          <select onChange={(e)=>setSortingOption(e.target.value)}>
            <option disabled>Select Rating</option>
            <option value="All">All</option>
            <option value="Mp">Most Popular</option>
            <option value="Mr">Most Rated</option>
          </select>
        </div>
        <p>{filterdProducts.length} results found</p>
      </div>
    </>
  );
};
