import React from "react";
import "./Search.css";

export const Search = ({ className, placeHolder, onChangeHandler }) => {
  return (
    <div className="container-fluid navBar">
      <nav className="container navbar-container">
        <div className="w-100  py-4">
          <div className="row w-100 mx-0">
            <div className="col-sm-6 col-md-8 px-3 title">
              <h2>Candidate</h2>
            </div>
            <div className="col-sm-6 col-md-4 px-3">
              <input
                className={`ms-auto form-control me-0 rounded searchInput ${className}`}
                type="search"
                aria-label="Search"
                placeholder={placeHolder}
                onChange={onChangeHandler}
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
