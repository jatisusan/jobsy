import { CiSearch } from "react-icons/ci";

const Loading = ({title, message}) => {
  return (
    <div className="flex min-h-56 items-center justify-center px-3 py-6">
      <div className="w-full max-w-md">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-200/15 text-primary-200">
          <CiSearch className="text-2xl animate-pulse" />
        </div>

        <p className="text-center text-base font-bold text-text-primary">
          {title}
        </p>
        <p className="mt-1 text-center text-sm text-text-secondary">
          {message}
        </p>

        <div className="mt-5 space-y-2 flex flex-col items-center justify-center">
          <div className="h-2 w-full animate-pulse rounded-full bg-primary-200/20" />
          <div className="h-2 w-10/12 animate-pulse rounded-full bg-primary-200/15" />
          <div className="h-2 w-8/12 animate-pulse rounded-full bg-primary-200/10" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
