import { useEffect, useState } from "react";
import Filters from "../components/Filters";
import JobsList from "../components/JobsList";
import SearchBar from "../components/SearchBar";
import { fetchJobs } from "../utils/api";

const JobsPage = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const loadJobs = async () => {
      const data = await fetchJobs();
      setJobs(data);
    };
    loadJobs();
  }, []);

  console.log(jobs);

  return (
    <div className="w-full mt-4 flex gap-6">
      <div className="w-1/4 bg-bg-300 rounded-2xl p-4">
        <Filters />
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
