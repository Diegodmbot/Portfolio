import { useEffect, useState } from "react";
import { monthFromNumberToName } from "../services/dateFormatter";

export function useJobs(experienceData) {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const experience = experienceData;

    experience.sort((a, b) => {
      if (a.endDate === "current") return -1;
      const dateA = new Date(a.endDate);
      const dateB = new Date(b.endDate);
      return dateB - dateA;
    });
    setJobs(experience);
  }, [experienceData]);

  const formatedJobs = jobs.map((job) => {
    const formatDate = (date) => {
      if (date === "current") return "Current";
      const [month, year] = date.split("-");
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
