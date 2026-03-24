import { CiFaceFrown, CiSearch } from "react-icons/ci";

const NoJobsFound = ({ title, message }) => {
  return (
    <div className="flex min-h-56 items-center justify-center px-3 py-6">
      <div className="w-full max-w-md text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-200/15 text-primary-200">
          <CiFaceFrown className="text-2xl" />
        </div>

        <h3 className="text-lg font-extrabold text-text-primary">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-text-secondary">
          {message}
        </p>
      </div>
    </div>
  );
};

export default NoJobsFound;
