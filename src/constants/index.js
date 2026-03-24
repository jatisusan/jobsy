export const navLinks = [
  { name: "Home", path: "/" },
  { name: "Jobs", path: "/jobs" },
  { name: "Saved", path: "/saved" },
  { name: "Applications", path: "/applications" },
];

export const features = [
  {
    title: "Smart Search",
    description:
      "Quickly find jobs that match your skills using powerful search and filters.",
    icon: "/search.webp",
  },
  {
    title: "Save Jobs",
    description:
      "Bookmark interesting opportunities and keep them in one place for later.",
    icon: "/bookmark.webp",
  },
  {
    title: "Easy Apply",
    description:
      "Apply to jobs in seconds with a simple and streamlined application process.",
    icon: "/send.webp",
  },
];

export const footerLinks = [
  {
    title: "Company",
    links: [
      { name: "About Us", path: "/" },
      { name: "Careers", path: "/" },
      { name: "Contact", path: "/" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Privacy Policy", path: "/" },
      { name: "Help Center", path: "/" },
      { name: "Our Blog", path: "/" },
    ],
  },
  {
    title: "Follow Us",
    links: [
      { name: "Facebook", path: "/" },
      { name: "LinkedIn", path: "/" },
      { name: "Twitter", path: "/" },
    ],
  },
];

export const filterOptions = [
  {
    title: "Experience",
    options: [
      { name: "Internship", value: "intern" },
      { name: "Entry Level", value: "entry" },
      { name: "Mid Level", value: "mid" },
      { name: "Senior Level", value: "senior" },
    ],
  },
  {
    title: "Location",
    options: [
      { name: "Remote", value: "remote" },
      { name: "On-site", value: "onsite" },
    ],
  },
  {
    title: "Posted Within",
    options: [
      { name: "24 hours", value: "1d" },
      { name: "3 days", value: "3d" },
      { name: "7 days", value: "7d" },
      { name: "30 days", value: "30d" },
    ],
  },
];
