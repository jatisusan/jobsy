import { CiCalendarDate, CiLocationOn } from "react-icons/ci";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { Link } from "react-router";

// const stripHtml = (html = "") =>
//   html
//     .replace(/<[^>]*>/g, "")
//     .replace(/\s+/g, " ")
//     .trim();

const stripHtml = (html = "") => {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent.replace(/\s+/g, " ").trim();
};

const formatDate = (value) => {
  if (!value) return "Date unavailable";

  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return "Date unavailable";

  return parsed.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

const JobCard = ({ job }) => {
  const companyName = job.company?.name || "Confidential company";
  const locationName = job.locations?.[0]?.name || "Remote / Flexible";
  const levelName = job.levels?.[0]?.name || "Experience level not specified";
  const postedDate = formatDate(job.publication_date);
  const categoryName = job.categories?.[0]?.name;
  const description = stripHtml(job.contents);
  const summary = description.slice(0, 180);
  const applyUrl = job.refs?.landing_page;

  return (
    <article className="group rounded-2xl border border-primary-100/20 bg-bg-400 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-extrabold leading-snug text-text-primary sm:text-xl">
          {job.name}
        </h3>
        {categoryName && (
          <span className="shrink-0 rounded-full bg-primary-200/15 px-3 py-1 text-xs font-semibold text-primary-200">
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
        <Link
          to={applyUrl || "#"}
          className="rounded-xl bg-primary-200 px-4 py-2 text-sm font-semibold text-white transition-colors duration-300 hover:bg-primary-100"
        >
          View Details
        </Link>
      </div>
    </article>
  );
};

export default JobCard;
