import { monthFromNumberToName } from "./dateFormatter";

export function formatExperienceData(experienceData) {
  const jobs = experienceData.sort((a, b) => {
    if (a.endDate === "present") return -1;
    const dateA = new Date(a.endDate);
    const dateB = new Date(b.endDate);
    return dateA > dateB ? -1 : 1;
  });

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
