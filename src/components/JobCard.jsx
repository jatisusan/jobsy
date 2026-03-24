import { CiCalendarDate, CiLocationOn } from "react-icons/ci";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { Link } from "react-router";
import { extractJobInfo } from "../utils/utils";

const JobCard = ({ job }) => {
  const {
    name,
    companyName,
    locationName,
    levelName,
    postedDate,
    categoryName,
    description,
    summary,
  } = extractJobInfo(job);

  return (
    <article className="group rounded-2xl border border-primary-100/20 bg-bg-400 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-start justify-between gap-3">
        <h3 className="flex-1 text-lg font-extrabold leading-snug text-text-primary sm:text-xl">
          {name}
        </h3>
        {categoryName && (
          <span
            title={categoryName}
            className="max-w-42 truncate rounded-full bg-primary-200/15 px-3 py-1 text-xs font-semibold text-primary-200 sm:max-w-56"
          >
            {categoryName}
          </span>
        )}
      </div>

      <div className="mt-3 space-y-2 text-sm text-text-secondary">
        <p className="flex items-center gap-2">
          <HiOutlineOfficeBuilding className="text-base text-primary-200" />
          <span>{companyName}</span>
        </p>

        <p className="flex items-center gap-2">
          <CiLocationOn className="text-base text-primary-200" />
          <span>{locationName}</span>
        </p>

        <p className="flex items-center gap-2">
          <CiCalendarDate className="text-base text-primary-200" />
          <span>Posted {postedDate}</span>
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <span className="rounded-lg bg-bg-300 border border-primary-100/30 px-3 py-1 text-xs font-medium text-text-secondary">
          {levelName}
        </span>
      </div>

      {summary && (
        <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-text-secondary">
          {summary}
          {description.length > 180 ? "..." : ""}
        </p>
      )}

      <div className="mt-5 flex items-center justify-end">
        <Link to={`/jobs/${job.id}`} className="btn-secondary">
          View Details
        </Link>
      </div>
    </article>
  );
};

export default JobCard;
