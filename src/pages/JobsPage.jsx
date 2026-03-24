import { useState } from "react";
import Filters from "../components/Filters";
import JobsList from "../components/JobsList";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";
import { fetchJobs } from "../utils/api";
import { useDebounce } from "use-debounce";
import Loading from "../components/Loading";
import NoJobsFound from "../components/NoJobsFound";
import { useFetch } from "../hooks/useFetch";
import ErrorMessage from "../components/ErrorMessage";

const JobsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

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

  const { data, isLoading, error } = useFetch(
    fetchJobs,
    { page: currentPage, filters: selectedFilters },
    [currentPage, selectedFilters],
  );

  const jobs = data?.results || [];
  const totalPages = data?.totalPages || 1;

  const normalizedQuery = debouncedQuery.trim().toLowerCase();
  const filteredJobs = normalizedQuery
    ? jobs.filter((job) => job.name.toLowerCase().includes(normalizedQuery))
    : jobs;

  return (
    <div className="mt-4 flex w-full flex-col gap-4 lg:flex-row lg:gap-6">
      <div className="w-full rounded-2xl bg-bg-300 p-3 sm:p-4 lg:w-1/4">
        <Filters
          selectedFilters={selectedFilters}
          toggleFilter={toggleFilter}
          clearAll={clearAll}
        />
      </div>

      <div className="w-full lg:w-3/4">
        <SearchBar query={query} setQuery={setQuery} />
        <h2 className="my-4 ml-1 text-lg font-bold sm:ml-2 sm:text-xl">
          Job Listings
        </h2>
        <div className="w-full rounded-xl bg-bg-300 p-3 sm:p-4">
          {isLoading ? (
            <Loading
              title="Loading jobs..."
              message="Please wait while we fetch the latest job listings for you."
            />
          ) : error ? (
            <ErrorMessage message="Failed to load jobs. Please try again later." />
          ) : filteredJobs.length > 0 ? (
            <JobsList jobs={filteredJobs} />
          ) : (
            <NoJobsFound />
          )}
          {!debouncedQuery && !isLoading && filteredJobs.length > 0 && (
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
