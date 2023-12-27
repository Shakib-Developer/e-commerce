const SearchBar = () => {
  return (
    <>
      <div className="search-bar mx-auto pt-4">
        <div className="text-search">
          <i className="bi bi-geo-alt-fill"></i>
          <span className="ps-2">all of bangladesh</span>
        </div>
        <div className="input-group">
          <input
            type="text"
            className="form-control py-2"
            placeholder="What are you looking for ?"
          />
          <button className="btn btn-light" type="button">
            <i className="bi bi-search text-dark"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
