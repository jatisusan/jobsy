import { useState } from "react";
import { CiFilter, CiRedo } from "react-icons/ci";
import { filterOptions } from "../constants";

const Filters = () => {
  const [selectedFilters, setSelectedFilters] = useState({});

  const activeCount = Object.values(selectedFilters).filter(Boolean).length;

  const toggleFilter = (key) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const clearAll = () => setSelectedFilters({});

  return (
    <div className="rounded-2xl  p-5">
      <div className="flex items-center justify-between gap-3 border-b border-primary-100/20 pb-4">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-200/15">
            <CiFilter className="text-xl text-primary-200" />
          </span>
          <h3 className="text-lg font-extrabold tracking-wide text-text-primary">
            Filters
          </h3>
        </div>

        <span className="rounded-full bg-accent-200/10 px-3 py-1 text-xs font-semibold text-accent-200">
          {activeCount} active
        </span>
      </div>

      <button
        type="button"
        onClick={clearAll}
        disabled={activeCount === 0}
        className="btn-ghost mt-4 flex items-center justify-center gap-2"
      >
        <CiRedo className="text-lg" />
        Clear all
      </button>

      <div className="mt-5 space-y-5">
        {filterOptions.map((filter) => (
          <section
            key={filter.title}
            className="rounded-xl border border-primary-100/15 bg-bg-300/60 p-4"
          >
            <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-text-secondary">
              {filter.title}
            </h4>

            <div className="space-y-2">
              {filter.options.map((option) => {
                const filterKey = `${filter.title}-${option.value}`;
                const isChecked = Boolean(selectedFilters[filterKey]);

                return (
                  <label
                    key={option.value}
                    htmlFor={filterKey}
                    className="flex cursor-pointer items-center justify-between rounded-lg px-2 py-2 transition-colors duration-300 hover:bg-bg-400"
                  >
                    <span className="text-sm text-text-primary">
                      {option.name}
                    </span>

                    <span className="relative inline-flex h-4 w-4 items-center justify-center">
                      <input
                        id={filterKey}
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggleFilter(filterKey)}
                        className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-primary-100/40 bg-bg-300 transition-all duration-300 checked:border-primary-200 checked:bg-primary-200"
                      />
                      <span className="absolute inset-0 flex items-center justify-center scale-0 text-[10px] font-bold text-white transition-transform duration-200 peer-checked:scale-100">
                        ✓
                      </span>
                    </span>
                  </label>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      <p className="mt-4 text-xs leading-relaxed text-text-muted">
        Fine-tune results by combining experience, location, job type, and
        recency.
      </p>
    </div>
  );
};

export default Filters;
