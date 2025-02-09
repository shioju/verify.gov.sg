import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";
import govtechLogo from "./images/govtech-logo.svg";
import gdsLogo from "./images/logo-colored-dark-on-light.svg";

const GovtechLogoImage = styled.img`
  width: 160px;
`;

const GdsLogoImage = styled.img`
  width: 200px;
`;

export const Footer: React.FunctionComponent = () => (
  <footer className="container mx-auto max-w-lg items-center text-center py-6">
    <h6>verify.gov.sg is brought to you by Government Technology Agency:</h6>
    <div className="flex flex-wrap items-center justify-center my-6">
      <div className="w-full sm:w-auto">
        <a
          className="inline-block transition-opacity hover:opacity-75"
          href="https://www.tech.gov.sg/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GovtechLogoImage src={govtechLogo} alt="GovTech logo" />
        </a>
      </div>
      <div className="w-full sm:w-auto">
        <a
          className="inline-block transition-opacity hover:opacity-75"
          href="https://hive.tech.gov.sg/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GdsLogoImage src={gdsLogo} alt="Government Digital Services logo" />
        </a>
      </div>
    </div>
    <p className="small">©2020 Government Technology Agency | Last updated 6th Mar 2021</p>
    <p className="small">v1.0.0-{process.env.REACT_APP_COMMIT_REF?.substring(0, 6)}</p>
    <p className="small">
      <Link to="/terms" className="text-primary mx-3">
        Terms of use
      </Link>
      <Link to="/privacy-policy" className="text-primary mx-3">
        Privacy policy
      </Link>
      <a
        className="text-primary mx-3"
        href="https://www.tech.gov.sg/report_vulnerability"
        target="_blank"
        rel="noopener noreferrer"
      >
        Report Vulnerability
      </a>
    </p>
  </footer>
);
