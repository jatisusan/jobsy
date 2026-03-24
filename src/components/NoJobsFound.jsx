import { CiFaceFrown, CiSearch } from "react-icons/ci";

const NoJobsFound = () => {
  return (
    <div className="flex min-h-56 items-center justify-center px-3 py-6">
      <div className="w-full max-w-md text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-200/15 text-primary-200">
          <CiFaceFrown className="text-2xl" />
        </div>

        <h3 className="text-lg font-extrabold text-text-primary">
          No jobs found
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-text-secondary">
          We couldn't find any jobs matching your criteria.
        </p>

        <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-primary-100/35 bg-bg-300 px-3 py-1.5 text-xs font-semibold text-text-secondary">
          <CiSearch className="text-sm text-primary-200" />
          Tip: Clear filters to widen results
        </div>
      </div>
    </div>
  );
};

export default NoJobsFound;
