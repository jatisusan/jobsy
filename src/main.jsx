import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./globals.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage.jsx";
import JobsPage from "./pages/JobsPage.jsx";
import SavedPage from "./pages/SavedPage.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import JobDetailsPage from "./pages/JobDetailsPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="/jobs" element={<JobsPage />} />
            <Route path="/saved" element={<SavedPage />} />
            <Route path="/jobs/:id" element={<JobDetailsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
);
