import React from "react";
import { Link } from "react-router-dom";

function Title(props) {
  const rating = props.rating;
  var key = rating === "none" ? "none" : Object.keys(rating)[0];

  return (
    <>
      <div className="title">
        <h1>
          {props.name}
          {props.showTitle && (
            <>
              <span>: </span>
              <Link to="/" style={{ color: "slateblue" }}>
                {props.showTitle}
              </Link>
            </>
          )}
        </h1>
        {rating !== "none" && (
          <p>
            Rating:&nbsp;
            <span>
              {key}({rating[key]})
            </span>
          </p>
        )}
      </div>
    </>
  );
}
export default Title;
