import React from "react";

function Details(props) {
  return (
    <div className="box">
      <div>
        <img
          src={props.image}
          className="show-title-image"
          alt="cartoon-show powerpuff girls"
        />
      </div>
      <div className="show-details">
        <div
          dangerouslySetInnerHTML={{
            __html: props.summary,
          }}
        ></div>
      </div>
    </div>
  );
}

export default Details;
