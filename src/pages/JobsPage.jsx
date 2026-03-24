import { useEffect, useState } from "react";
import Filters from "../components/Filters";
import JobsList from "../components/JobsList";
import SearchBar from "../components/SearchBar";
import { fetchJobs } from "../utils/api";

// const isRemoteJob = (job) => {
//   const locationText = (job.locations || [])
//     .map((location) => location?.name || "")
//     .join(" ")
//     .toLowerCase();

//   return /(remote|work from home|anywhere|worldwide|flexible)/.test(
//     locationText,
//   );
// };

// const isWithinDays = (publicationDate, days) => {
//   if (!publicationDate) return false;

//   const postedAt = new Date(publicationDate);
//   if (Number.isNaN(postedAt.getTime())) return false;

//   const now = new Date();
//   const ageInMs = now.getTime() - postedAt.getTime();
//   const maxAgeInMs = days * 24 * 60 * 60 * 1000;

//   return ageInMs <= maxAgeInMs;
// };

const JobsPage = () => {
  const [jobs, setJobs] = useState([]);

  const [selectedFilters, setSelectedFilters] = useState({
    level: [],
    category: [],
    location: [],
    postedWithin: [],
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
      postedWithin: [],
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

  console.log(jobs);

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
        <SearchBar />
        <h2 className="text-xl font-bold my-4 ml-2">Job Listings</h2>
        <div className=" w-full bg-bg-300 rounded-xl p-4">
          <JobsList jobs={jobs} />
        </div>
      </div>
    </div>
  );
};

export default JobsPage;
