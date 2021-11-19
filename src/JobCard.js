import React from "react";
import Logo from "./Logo";
import JobFeatures from "./JobFeatures";
import JobPositionHeading from "./JobPositionHeading";
import JobDetails from "./JobDetails";
import JobDescriptionSkills from "./JobDescriptionSkills";

const JobCard = (props) => {
    return (
      <div className="CardContainer">
        <div className="ContainerLeft">
          <Logo job={props.job} />
          <div className="JobFeatures">
            <JobFeatures job={props.job} />
            <JobPositionHeading job={props.job} />
            <JobDetails job={props.job} />
          </div>
        </div>
        <div>
          <JobDescriptionSkills job={props.job} />
        </div>
      </div>
    );
}

export default JobCard;