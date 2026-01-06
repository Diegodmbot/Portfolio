import experienceData from "../data/experience.json";
import PropTypes from "prop-types";
import { formatExperienceData } from "../services/formatExperienceData.js";
import "./Experience.css";

function ListOfJobs({ jobList }) {
  return (
    <ul>
      {jobList.map((job, index) => (
        <li key={index} className="Job">
          <div className="Title">
            <h2>{job.company}</h2>
            <time>{`${job.startDate} - ${job.endDate}`}</time>
          </div>
          <h3>{job.position}</h3>
          <p>{job.description}</p>
        </li>
      ))}
    </ul>
  );
}

ListOfJobs.propTypes = {
  jobList: PropTypes.arrayOf(
    PropTypes.shape({
      company: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
      startDate: PropTypes.string.isRequired,
      endDate: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export function Experience() {
  const { jobs } = formatExperienceData(experienceData);

  return (
    <div id="experience" className="Experience">
      <h1>Experience</h1>
      <ListOfJobs jobList={jobs} />
    </div>
  );
}
