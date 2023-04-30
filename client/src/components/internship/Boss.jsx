import React from "react";
import InternshipList from "./InternshipList";
import InternshipForm from "../forms/internshipForm/InternshipForm";
import "./css/Boss.css";

function Boss() {
  return (
    <div className="Boss">
      <InternshipForm />
      <div className="boss-content">
      <InternshipList />
      </div>
    </div>
  );
}
export default Boss;
