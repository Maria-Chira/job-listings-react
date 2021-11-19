import React from "react";

const JobDetails = (props) => {
    return (
      <ul className="JobDetails">
        <li>{props.job.postedAt}</li>
        <li>{props.job.contract}</li>
        <li>{props.job.location}</li>
      </ul>
    )
}

export default JobDetails;