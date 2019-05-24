import React from "react";
import "./SuggestedItem.css";

export default props => {
  const {
    // flag,
    handleClick,
    image,
    name,
    pack,
    index
  } = props;
  const toBePacked = pack
    ? "item--font--packed"
    : "item--font--unpacked";
  return  (
    <div className={toBePacked+"  item p-0 m-1 border border-white rounded"} onClick={handleClick('bundle', index)}>
      <div className="container">
        <div className={"row align-items-center justify-content-center"}>
          <div className="col-12 px-1 pt-1  text-left div--icon--size">
            {/* ICONS */}
            {pack ? (
              <i className="far fa-check-circle align-top item--icon--bundled" />
            ) : (
              <i className="far fa-circle align-top item--icon--unbundled" />
            )}
          </div>

          <div>
            {/* ITEM IMAGE */}
            <img src={image} className="item--image--size rounded" alt={name} />
          </div>
        </div>
      </div>
      <div className="col-12">
        {/* Item Name */}
        <div className={"row align-items-center justify-content-center"}>
          <span className="item--title--font">{name}</span>
        </div>
      </div>
      <div className="col-12" onClick={handleClick("select", index)}>
        <div className={'row align-items-center justify-content-center mt-3'}>
          <span className="item--bundle--font">Pack</span>
        </div>
      </div>
    </div>
  );
};
