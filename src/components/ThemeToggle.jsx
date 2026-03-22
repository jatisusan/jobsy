import useTheme from "../hooks/useTheme";

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="relative inline-flex h-8 w-14 items-center rounded-full border border-dark-100/20 p-1 transition-colors duration-300 dark:border-white/25 bg-dark-100/55 cursor-pointer"
    >
      <span
        className={`relative z-10 flex h-6 w-6 items-center justify-center rounded-full shadow-sm transition-transform duration-300 ${
          isDark ? "bg-slate-500" : "bg-slate-50"
        } ${isDark ? "translate-x-6" : "translate-x-0"}`}
      >
        <span
          className={`h-3.5 w-3.5 rounded-full transition-colors duration-300 ${
            isDark ? "bg-white" : "bg-amber-300"
          }`}
        />
        <span
          className={`absolute h-3.5 w-3.5 rounded-full transition-all duration-300 ${
            isDark
              ? "bg-slate-500 translate-x-0.75 -translate-y-px"
              : "opacity-0"
          }`}
        />
      </span>
    </button>
  );
};

export default ThemeToggle;
