import React from "react";

const JobPositionHeading = (props) => {
    return <h2 className="JobPosition">{props.job.position}</h2>;
}

export default JobPositionHeading;