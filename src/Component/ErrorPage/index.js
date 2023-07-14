import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div>
        <h2 className="heading">404</h2>
        <h3 className="error">UH OH! You're lost.</h3>
        <p className="para">
          The page you are looking for does not exist.How you get here is a
          mistory .But you can click the button below to go back to the homepage
        </p>

        <button
          onClick={() => {
            navigate("/");
          }}
          className="btn btn-primary"
        >
          Go back to home page
        </button>
      </div>
    </div>
  );
}

export default ErrorPage;
