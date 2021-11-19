import React from "react";

const Logo = (props) => {
    return (
     <img
       className="CompanyLogo"
       src={require(`${props.job.logo}`).default}
       alt={`${props.job.company} logo`}
     />
     )
}

export default Logo;