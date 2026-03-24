import { useEffect, useState } from "react";
import Filters from "../components/Filters";
import JobsList from "../components/JobsList";
import SearchBar from "../components/SearchBar";
import { fetchJobs } from "../utils/api";
import { useDebounce } from "use-debounce";

const JobsPage = () => {
  const [jobs, setJobs] = useState([]);

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
  };

  const clearAll = () =>
    setSelectedFilters({
      level: [],
      category: [],
      location: [],
    });

  useEffect(() => {
    const loadJobs = async () => {
      const data = await fetchJobs({
        filters: selectedFilters,
      });

      setJobs(data);
    };

    loadJobs();
  }, [selectedFilters]);

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
        </div>
      </div>
    </div>
  );
};

export default JobsPage;
