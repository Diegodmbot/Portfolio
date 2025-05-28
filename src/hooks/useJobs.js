import { useEffect, useState } from "react";
import { monthFromNumberToName } from "../services/dateFormatter";

export function useJobs(experienceData) {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const experience = experienceData;

    experience.sort((a, b) => {
      if (a.endDate === "present") return -1;
      const dateA = new Date(a.endDate);
      const dateB = new Date(b.endDate);
      console.log(dateB < dateA);
      return dateA > dateB ? -1 : 1;
    });
    setJobs(experience);
  }, [experienceData]);

  const formatedJobs = jobs.map((job) => {
    const formatDate = (date) => {
      if (date === null || typeof date !== "string" || date.trim() === "")
        return "";
      if (date === "present") return "Present";
      const [year, month] = date.split("-");
      return `${monthFromNumberToName(month)} ${year}`;
    };

    return {
      ...job,
      startDate: formatDate(job.startDate),
      endDate: formatDate(job.endDate),
    };
  });

  return { jobs: formatedJobs };
}
