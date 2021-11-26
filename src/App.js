import React,{useState} from "react";
import './App.css';
import JobCard from "./JobCard";
import jobsList from "./data.json";
import Jumbotron from "./Jumbotron";
import FilterCard from "./FilterCard";


//creating a list with all the categories.
let categoriesList = [];
jobsList.forEach((job) => {
  job.languages.forEach((language) => {
    if (!categoriesList.includes(language)) {
      categoriesList.push(language);
    }
  });

  job.tools.forEach((tool) => {
    if (!categoriesList.includes(tool)) {
      categoriesList.push(tool);
    }
  });

  if (!categoriesList.includes(job.role)) {
    categoriesList.push(job.role);
  }

  if (!categoriesList.includes(job.level)) {
    categoriesList.push(job.level);
  }
});

function App() {
  const [categories, setCategories] = useState(categoriesList);
  const [jobs, setJobs] = useState(jobsList);

  //handles  on click event for categories
  function filterCategories(e) {

    const clickedValue = e.target.parentElement.firstChild.innerHTML;
    const filteredCategories = categories.filter((category) => category !== clickedValue);
    setCategories(filteredCategories);

    let filteredJobs = jobs.filter((job) => job.role !== clickedValue && job.level !== clickedValue && !job.languages.includes(clickedValue) && !job.role.includes(clickedValue));
    setJobs(filteredJobs)
  }

  //handles on click event for clear button
  function handleClear() {
    setCategories(categoriesList);
    setJobs(jobsList);
  }

  return (
    <div className="App">
      <Jumbotron />
      <div className="Categories">
        <div className="CategoriesFilterList">
          {categories.map((category, index) => {
            return (
              <FilterCard
                erase={filterCategories}
                categories={category}
                key={index}
              />
            );
          })}
        </div>
        <p className="ResetCategories" onClick={handleClear}>Clear</p>
      </div>
      {jobs.map((job, index) => {
        return <JobCard job={job} key={index} />;
      })}
    </div>
  );
}

export default App;
