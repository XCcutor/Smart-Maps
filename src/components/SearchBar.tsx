function SearchBar() {
  return (
    <div className="search-section">
      <h1>Explore smarter.</h1>
      <p>Find places, services and destinations around you.</p>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search for a place..."
        />
        <button>Search</button>
      </div>
    </div>
  );
}

export default SearchBar;