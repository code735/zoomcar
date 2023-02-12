import React from "react";

function OTP({ toggle, setToggle, OTP }) {
  setTimeout(() => {
    toggle ? alert(OTP) : console.log(OTP);
  }, 1000);
  return (
    <div>
      <div
        className="EmailPopUpcontainer"
        style={{
          display: toggle ? "block" : "none"
        }}//
      >
        <div
          className="backArrow"
          onClick={() => {
            setToggle(false);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            class="bi bi-arrow-left"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
            />
          </svg>
        </div>
        <div className="Enter-email-id">Enter 6-digit OTP</div>
        <div className="email-input">
          <div className="input-box-email">
            <input
              style={{
                width: "40%",
                height: "100%",
                padding: "10px",
                border: "none",
                outline: "none",
                fontSize: "15px"
              }}
              type="text"
              placeholder="OTP"
            />
          </div>
        </div>
        <div className="submit-login-with-email">
          <button
            style={{
              padding: "15px 200px",
              fontWeight: "bold",
              boxShadow:
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
              border: "none",
              background: "#e0e0e0",
              color: "white"
            }}
          >
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
}

export default OTP;
