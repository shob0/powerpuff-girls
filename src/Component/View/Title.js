import React from "react";

function Title(props) {
  return (
    <>
      <div className="title">
        <h1>{props.name}</h1>
        <p>
          Rating:
          <span>{/* {rating}({show.rating[rating]}) */}</span>
        </p>
      </div>
    </>
  );
}
export default Title;
