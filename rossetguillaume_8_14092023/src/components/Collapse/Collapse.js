import React from "react";
import { useState } from "react";
import faAngleUp from "../../assets/images/arrowTop.png";
import faAngleDown from "../../assets/images/arrowBottom.png";

const angleDown = faAngleDown;
const angleUp = faAngleUp;

const Collapse = (props) => {
  const [openTab, setOpenTab] = useState(false);

  const openTabHandler = () => {
    setOpenTab((openTab) => !openTab);
  };

  return (
    <>
      <div onClick={openTabHandler} className="collapse_header">
        <h2 className="collapse_header_title">{props.title}</h2>
        {!openTab ? (
          <i className="collapse_header_icon">{faAngleDown}</i>
        ) : (
          <i className="collapse_header_icon">{faAngleUp}</i>
        )}
      </div>
      {openTab && <div className="collapse_content">{props.content}</div>}
    </>
  );
};

export default Collapse;
