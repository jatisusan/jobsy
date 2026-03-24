export const formatDate = (value) => {
  if (!value) return "Date unavailable";

  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return "Date unavailable";

  return parsed.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

const stripHtml = (html = "") => {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent.replace(/\s+/g, " ").trim();
};

export const extractJobInfo = (job) => {
  const name = job?.name || "Untitled Job";
  const companyName = job?.company?.name || "Confidential company";
  const locationName = job?.locations?.[0]?.name || "Remote / Flexible";
  const levelName = job?.levels?.[0]?.name || "Experience level not specified";
  const postedDate = formatDate(job?.publication_date);
  const categoryName = job?.categories?.[0]?.name || "Others";
  const description = stripHtml(job?.contents);
  const summary = description.slice(0, 180);
  const applyUrl = job?.refs?.landing_page;
  const contents =
    job?.contents ||
    "<p>No detailed description is available for this role.</p>";

  return {
    name,
    companyName,
    locationName,
    levelName,
    postedDate,
    categoryName,
    description,
    summary,
    applyUrl,
    contents,
  };
};

// toggle save/unsave job
export const handleSaveJob = (jobId) => {
  const savedJobs = JSON.parse(localStorage.getItem("savedJobs")) || [];

  if (savedJobs.includes(jobId)) {
    // remove job
    const updatedJobs = savedJobs.filter((id) => id !== jobId);
    localStorage.setItem("savedJobs", JSON.stringify(updatedJobs));
  } else {
    // add job
    const updatedJobs = [...savedJobs, jobId];
    localStorage.setItem("savedJobs", JSON.stringify(updatedJobs));
  }
};

// check if job is saved
export const isJobSaved = (jobId) => {
  const savedJobs = JSON.parse(localStorage.getItem("savedJobs")) || [];
  return savedJobs.includes(jobId);
};

export const getSavedJobs = () => {
  const savedJobs = JSON.parse(localStorage.getItem("savedJobs")) || [];
  return savedJobs;
}
