import React, { Fragment } from "react";

import "./Footer.css";

export const Footer = () => {
  return (
    <Fragment>
      <footer className="d-flex justify-content-center align-items-center footer__copy">
        <p className="text-center">
          Copyright &copy; BiT Students 2023 | Final Project
        </p>
      </footer>
    </Fragment>
  );
};

