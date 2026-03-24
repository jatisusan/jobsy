import { useEffect, useState } from "react";
import { handleSaveJob, isJobSaved } from "../utils/utils";
import { GoBookmark, GoBookmarkFill } from "react-icons/go";

const SaveToggle = ({ jobId }) => {
  const [saved, setSaved] = useState(false);
  const toggleSave = () => {
    handleSaveJob(jobId);
    setSaved((prev) => !prev);
  };

  useEffect(() => {
    setSaved(isJobSaved(jobId));
  }, [jobId]);
  return (
    <button onClick={toggleSave} className="cursor-pointer">
      {saved ? (
        <GoBookmarkFill size={30} className="text-primary-200" />
      ) : (
        <GoBookmark
          size={30}
          className="text-primary-200 hover:scale-120 transition-all duration-300"
        />
      )}
    </button>
  );
};

export default SaveToggle;
