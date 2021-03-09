import React from "react";
import "./Focus.css";
const FocusBanner = () => {
  return (
    <>
      <div className="d-flex p-5">
        {/* <div className="col-12 col-sm-4 col-md-3 col-lg-2">Hello</div> */}
        <img
          className="img--focusBanner mx-3"
          src="https://cdn.coiven.com/static/banner/res-banner-1.png"
        />
        <img
          className="img--focusBanner mx-3"
          src="https://cdn.coiven.com/static/banner/res-banner-2.png"
        />
        <img
          className="img--focusBanner mx-3"
          src="https://cdn.coiven.com/static/banner/res-banner-3.png"
        />
      </div>
    </>
  );
};

export default FocusBanner;
