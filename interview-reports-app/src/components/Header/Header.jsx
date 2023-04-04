import React, { Fragment } from "react";
import { useNavigate } from "react-router";

import "./Header.css";

export const Header = () => {
  
  const navigate = useNavigate();

  return (
    <Fragment>
      <header className="container-fluid d-flex align-items-center p-4  flex-wrap justify-content-sm-center justify-content-md-between justify-content-center">
        <h1>Interview Reports</h1>

        <div className="d-flex flex-wrap justify-content-sm-center">
          <button
            type="button"
            className="btn button active-route"
            onClick={() => navigate("/")}
          >
            Candidates
          </button>

          <button
            type="button"
            className="btn button active-route"
            onClick={() => navigate("/reports")}
          >
            Reports
          </button>
        </div>
      </header>
    </Fragment>
  );
};
