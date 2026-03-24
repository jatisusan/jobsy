import { CiSearch } from "react-icons/ci";

const SearchBar = ({ query, setQuery }) => {
  return (
    <div className="relative w-full h-12 mb-6">
      <input
        type="text"
        placeholder="Search for jobs..."
        className="searchbar"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <CiSearch
        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
        size={20}
      />
    </div>
  );
};

export default SearchBar;
