import React from "react";

const JobCard = (props) => {
    return (
      <div className="CardContainer">
        <div className="ContainerLeft">
          <img
            className="CompanyLogo"
            src={require(`${props.job.logo}`).default}
            alt={`${props.job.company} logo`}
          />
          <div className="JobFeatures">
            <ul className="JobInfo">
              <li className="CompanyName">{props.job.company}</li>
              {props.job.new === true ? (
                <li className="JobNew">NEW!</li>
              ) : (
                <li></li>
              )}
              {props.job.featured === true ? (
                <li className="JobFeatured">FEATURED</li>
              ) : (
                <li></li>
              )}
            </ul>
            <h2 className="JobPosition">{props.job.position}</h2>
            <ul className="JobDetails">
              <li>{props.job.postedAt}</li>
              <li>{props.job.contract}</li>
              <li>{props.job.location}</li>
            </ul>
          </div>
        </div>
        <div>
          <ul className="JobRequirements">
            <li className="JobSkills">{props.job.role}</li>
            <li className="JobSkills">{props.job.level}</li>
            {props.job.languages.map((language, index) => (
              <li className="JobSkills" key={index}>
                {language}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
}

export default JobCard;