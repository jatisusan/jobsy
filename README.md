# Jobsy - Job Finder App

![Screenshot](/public//banner.webp)

Jobsy is a modern job discovery app built with React and Vite. It lets users browse opportunities from The Muse API, filter by experience/location/category, view full job details, and save interesting jobs for later.

## Features

- Browse job listings fetched from The Muse Jobs API.
- View detailed job information including description, company, location, experience level, posting date, etc.
- Multi-select filters for experience level, location, and category.
- Optimized job search with debounced input.
- Pagination to navigate through multiple pages of job listings.
- Save and unsave jobs with persistence in local storage.
- Light and dark theme support with user preference persistence.
- Clean and modern UI built with Tailwind CSS.
- Responsive UI optimized for desktop and mobile devices.

## Tech Stack

- React 19
- Vite
- React Router
- Tailwind CSS 4
- react-icons

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Clone the Repository

```bash
git clone https://github.com/jatisusan/jobsy.git
```

### Installation

```bash
cd jobsy
npm install
```

### Run in Development

```bash
npm run dev
```

Open the local URL shown in your terminal (typically `http://localhost:5173`).

## Data Source

This app uses The Muse public jobs API:

- List endpoint: `https://www.themuse.com/api/public/jobs`
- Details endpoint: `https://www.themuse.com/api/public/jobs/:id`

Filtering is applied via query params (`level`, `location`, `category`).

## State and Persistence

- Theme preference is saved under `appTheme` in local storage.
- Saved jobs are stored under `savedJobs` in local storage.

## Notes

- The app currently uses local storage for bookmarks (no backend auth or sync).
