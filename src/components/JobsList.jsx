import JobCard from "./JobCard";

const JobsList = ({jobs}) => {
  return (
    <div>
      <div className="flex flex-col gap-4">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default JobsList;
