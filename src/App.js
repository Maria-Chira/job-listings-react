import React from "react";
import './App.css';
import JobCard from "./JobCard";
import jobsList from "./data.json";
import Jumbotron from "./Jumbotron";

function App() {
  return (
    <div className="App">
      <Jumbotron />
      {jobsList.map((job, index) => {
        return <JobCard job={job} key={index} />;
      })}
    </div>
  );
}

export default App;
