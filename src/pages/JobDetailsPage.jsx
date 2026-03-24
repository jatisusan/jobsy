import { useEffect } from "react";
import { CiCalendarDate, CiLocationOn } from "react-icons/ci";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { Link, useParams } from "react-router";
import Loading from "../components/Loading";
import NoJobsFound from "../components/NoJobsFound";
import { useFetch } from "../hooks/useFetch";
import { fetchJobById } from "../utils/api";
import { extractJobInfo } from "../utils/utils";
import ErrorMessage from "../components/ErrorMessage";
import SaveToggle from "../components/SaveToggle";

const JobDetailsPage = () => {
  const { id } = useParams();
  const { data: job, isLoading, error } = useFetch(fetchJobById, id, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const jobInfo = job ? extractJobInfo(job) : null;
  const {
    name,
    companyName,
    locationName,
    levelName,
    postedDate,
    categoryName,
    contents,
    applyUrl,
  } = jobInfo || {};

  return (
    <section className="py-4 sm:py-6">
      <div className="mb-4 sm:mb-6">
        <Link to="/jobs" className="btn-ghost">
          Back to jobs
        </Link>
      </div>

      {isLoading ? (
        <Loading
          title="Loading details..."
          message="Please wait while we fetch the job information for you."
        />
      ) : error ? (
        <ErrorMessage
          message="We couldn't load the job details. Please refresh the page and try
          again."
        />
      ) : !jobInfo ? (
        <NoJobsFound
          title="Job not found"
          message="The job you are looking for does not exist or has been removed."
        />
      ) : (
        <div className="space-y-6">
          <header className="rounded-2xl border border-primary-100/25 bg-linear-to-br from-bg-400 to-bg-300 p-5 shadow-sm sm:p-7">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary-200">
                  Job details
                </p>
                <h1 className="mt-2 text-2xl font-extrabold leading-tight text-text-primary sm:text-3xl">
                  {name}
                </h1>
                <p className="mt-2 text-sm font-medium text-text-secondary sm:text-base">
                  {companyName}
                </p>
              </div>

              <SaveToggle jobId={job.id} />
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-primary-100/20 bg-bg-300 px-3 py-2.5">
                <p className="flex items-center gap-2 text-sm text-text-secondary">
                  <HiOutlineOfficeBuilding className="text-base text-primary-200" />
                  {companyName}
                </p>
              </div>
              <div className="rounded-xl border border-primary-100/20 bg-bg-300 px-3 py-2.5">
                <p className="flex items-center gap-2 text-sm text-text-secondary">
                  <CiLocationOn className="text-base text-primary-200" />
                  {locationName}
                </p>
              </div>
              <div className="rounded-xl border border-primary-100/20 bg-bg-300 px-3 py-2.5">
                <p className="flex items-center gap-2 text-sm text-text-secondary">
                  <CiCalendarDate className="text-base text-primary-200" />
                  Posted: {postedDate}
                </p>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <span
                key={levelName}
                className="rounded-lg border border-primary-100/30 bg-bg-300 px-3 py-1 text-xs font-semibold text-text-secondary"
              >
                {levelName}
              </span>

              <span
                key={categoryName}
                className="rounded-full bg-primary-200/15 px-3 py-1 text-xs font-semibold text-primary-200"
              >
                {categoryName}
              </span>
            </div>
          </header>

          <div className="grid gap-6 lg:grid-cols-3">
            <article className="rounded-2xl border border-primary-100/20 bg-bg-300 p-5 shadow-sm lg:col-span-2 sm:p-6">
              <h2 className="text-lg font-bold text-text-primary sm:text-xl">
                Job description
              </h2>

              <div
                className="mt-4 space-y-4 text-sm leading-7 text-text-secondary"
                dangerouslySetInnerHTML={{
                  __html: contents,
                }}
              />
            </article>

            <aside className="rounded-2xl border border-primary-100/20 bg-bg-300 p-5 shadow-sm sm:p-6 lg:sticky lg:top-24 lg:h-fit">
              <h3 className="text-base font-bold text-text-primary sm:text-lg">
                Quick overview
              </h3>

              <div className="mt-4 space-y-4 text-sm">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">
                    Company
                  </p>
                  <p className="mt-1 text-text-secondary">{companyName}</p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">
                    Location
                  </p>
                  <p className="mt-1 text-text-secondary">{locationName}</p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">
                    Experience
                  </p>
                  <p className="mt-1 text-text-secondary">{levelName}</p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">
                    Posted on
                  </p>
                  <p className="mt-1 text-text-secondary">{postedDate}</p>
                </div>
              </div>

              {applyUrl && (
                <Link to={applyUrl} target="_blank">
                  <button className="btn-secondary mt-6 w-full py-2.5">
                    Apply Now
                  </button>
                </Link>
              )}
            </aside>
          </div>
        </div>
      )}
    </section>
  );
};

export default JobDetailsPage;
