import { useEffect, useState } from "react";
import Filters from "../components/Filters";
import JobsList from "../components/JobsList";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";
import { fetchJobs } from "../utils/api";
import { useDebounce } from "use-debounce";

const JobsPage = () => {
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [query, setQuery] = useState("");

  const [debouncedQuery] = useDebounce(query, 500);

  const [selectedFilters, setSelectedFilters] = useState({
    level: [],
    category: [],
    location: [],
  });

  const toggleFilter = (groupKey, value) => {
    setSelectedFilters((prev) => {
      const currentValues = prev[groupKey];
      const hasValue = currentValues.includes(value);

      return {
        ...prev,
        [groupKey]: hasValue
          ? currentValues.filter((item) => item !== value)
          : [...currentValues, value],
      };
    });
    setCurrentPage(1);
  };

  const clearAll = () => {
    setSelectedFilters({
      level: [],
      category: [],
      location: [],
    });
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const loadJobs = async () => {
      const data = await fetchJobs({
        page: currentPage,
        filters: selectedFilters,
      });

      setJobs(data.results);
      setTotalPages(data.totalPages);
    };

    loadJobs();
  }, [selectedFilters, currentPage]);

  const normalizedQuery = debouncedQuery.trim().toLowerCase();
  const filteredJobs = normalizedQuery
    ? jobs.filter((job) => job.name.toLowerCase().includes(normalizedQuery))
    : jobs;

  return (
    <div className="w-full mt-4 flex gap-6">
      <div className="w-1/4 bg-bg-300 rounded-2xl p-4">
        <Filters
          selectedFilters={selectedFilters}
          toggleFilter={toggleFilter}
          clearAll={clearAll}
        />
      </div>

      <div className="w-3/4">
        <SearchBar query={query} setQuery={setQuery} />
        <h2 className="text-xl font-bold my-4 ml-2">Job Listings</h2>
        <div className=" w-full bg-bg-300 rounded-xl p-4">
          <JobsList jobs={filteredJobs} />
          {!debouncedQuery && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default JobsPage;
