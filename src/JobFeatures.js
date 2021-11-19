import React from "react";

const JobFeatures =(props) =>{
    return (
      <ul className="JobInfo">
        <li className="CompanyName">{props.job.company}</li>
        {props.job.new === true ? <li className="JobNew">NEW!</li> : <li></li>}
        {props.job.featured === true ? (
          <li className="JobFeatured">FEATURED</li>
        ) : (
          <li></li>
        )}
      </ul>
    )
}

export default JobFeatures;