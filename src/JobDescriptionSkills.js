import React from "react";

const JobDescriptionSkills = (props) => {
    return (
      <ul className="JobRequirements">
        <li className="JobSkills">{props.job.role}</li>
        <li className="JobSkills">{props.job.level}</li>
        {props.job.languages.map((language, index) => (
          <li className="JobSkills" key={index}>
            {language}
          </li>
        ))}
        {props.job.tools.map((tool, index) => (
          <li className="JobSkills" key={index}>
            {tool}
          </li>
        ))}
      </ul>
    )
}

export default JobDescriptionSkills;