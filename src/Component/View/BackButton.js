import React from "react";
import { useHistory } from "react-router-dom";

function BackButton() {
  let useHistory = useHistory();
  return (
    <button
      type="button"
      aria-label="go back button"
      onClick={() => {
        console.log("something");
      }}
    >
      Back
    </button>
  );
}

export default BackButton;
