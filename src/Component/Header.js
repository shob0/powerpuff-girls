import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <header className="App-header">
        <div>
          <Link to="/" className="Header-link">
            TV App
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Header;
