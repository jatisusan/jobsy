import { useEffect, useState } from "react";

import { fetchJobById } from "../utils/api";
import JobsList from "../components/JobsList";
import NoJobsFound from "../components/NoJobsFound";
import ErrorMessage from "../components/ErrorMessage";
import Loading from "../components/Loading";

const SavedPage = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

useEffect(() => {
  const loadSavedJobs = async () => {
    try {
      setIsLoading(true);

      const savedIds =
        JSON.parse(localStorage.getItem("savedJobs")) || [];

      if (savedIds.length === 0) {
        setJobs([]);
        return;
      }

      const requests = savedIds.map((id) => fetchJobById(id));

      const results = await Promise.all(requests);

      setJobs(results.filter(Boolean));
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  loadSavedJobs();
}, []);


  return (
    <section className="py-4 sm:py-6">
      <h2 className="mb-4 text-xl font-bold text-text-primary sm:mb-6">
        Saved Jobs
      </h2>

      <div className="w-full rounded-xl bg-bg-300 p-3 sm:p-4">
        {isLoading ? (
          <Loading
            title="Loading saved jobs..."
            message="Fetching your bookmarked opportunities."
          />
        ) : error ? (
          <ErrorMessage message="Failed to load your saved jobs. Please try again." />
        ) : jobs.length > 0 ? (
          <JobsList jobs={jobs} />
        ) : (
          <NoJobsFound 
            title="No saved jobs"
            message="You haven't saved any jobs yet."
          />
        )}
      </div>
    </section>
  );
};

export default SavedPage;
