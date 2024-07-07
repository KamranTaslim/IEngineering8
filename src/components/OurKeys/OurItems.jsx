import React from "react";
import "./OurItems.css";

function OurItems({ titles }) {
  return (
    <div className="ouritem">
      {/* <img src={img} alt={title} className="ouritem-img" /> */}
      <h3 className="ouritem_title">{titles}</h3>
      {/* <p className="ouritem_description">{description}</p> */}
    </div>
  );
}

export default OurItems;
