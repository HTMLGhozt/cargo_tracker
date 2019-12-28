import React from "react";

const Tracker = () => {
  var headingStyle = {
    textAlign: "center"
  };

  return (
    <div className="container" style={{ marginTop: "100px" }}>
      <h2 style={headingStyle}>Track your shipment</h2>
      <div
        className="input-group mb-3"
        style={{
          // width: "600px",
          // height: "135px"
          justify: "center",
          align: "center"
        }}
      >
        <input
          type="text"
          className="form-control"
          placeholder="Tracking Number"
          aria-label="Tracking Number"
          aria-describedby="button-addon2"
          style={{ width: "300px", height: "50px" }}
        />
        <div className="input-group-append">
          <button
            className="btn btn-primary"
            type="submit"
            id="button-addon2"
            style={{ width: "150px", height: "50px" }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tracker;
