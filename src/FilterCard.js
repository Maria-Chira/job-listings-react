import React from "react";

const FilterCard = (props) => {
    return (
        <div className="FilterCard">
          <h3 className="JobSkills Category">{props.categories}</h3>
          <div className="EraseCategory" onClick={props.erase}>
            x
          </div>
        </div>
    );
}

export default FilterCard;