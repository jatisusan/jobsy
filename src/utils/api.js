const BASE_URL = "https://www.themuse.com/api/public/jobs";

export const fetchJobs = async (page = 1) => {
  try {
    const response = await fetch(`${BASE_URL}?page=${page}&category=Computer%20and%20IT&category=Education`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching jobs:", error);
  }
};
