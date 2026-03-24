const BASE_URL = "https://www.themuse.com/api/public/jobs";


export const fetchJobs = async ({ page = 1, filters = {} } = {}) => {
  try {
    const params = new URLSearchParams();
    params.set("page", String(page));

    Object.entries(filters).forEach(([groupKey, values]) => {
      if (values.length === 0) return;

      values.forEach((value) => {
        if (value) params.append(groupKey, value);
      });
    });

    const response = await fetch(`${BASE_URL}?${params.toString()}&descending=true`);
    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return [];
  }
};
