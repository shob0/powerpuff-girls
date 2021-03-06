import React from "react";

function Details(props) {
  const imageUrl = props.image ? props.image.medium : "./temp";
  return (
    <div className="box">
      <div>
        <img src={imageUrl} className="show-title-image" alt={props.imgAlt} />
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
