import React from "react";
import { useState } from "react";
function Payment(props) {
    let [payment, setPayment] = useState(true);
    let aStyle ={
        display: "flex",
    }
  return (
    <div style={{ display: "flex", gap: "200px", margin: "50px" }}>
      <div>
        <h1 style={{ fontSize: "22px" }}>Select a Payment method</h1>
        <div
          className="Payment-page-Container"
          style={{
            display: "flex",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            width: "125%",
          }}
        >
          <section
            className="left-Section"
            style={{ borderRight: "1px solid #cccccc", padding: "25px" }}
          >
            <div
              style={{ display: "flex", flexDirection: "column", gap: "25px" }}
              className="payment-option-container"
            >
              <div
                style={{ background: "#f5f5f5", width: "100%", padding: "4px" }}
              >
                <b>OTHER PAYMENT OPTION</b>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "25px",
                  borderBottom: "1px solid #cccccc",
                  paddingBottom: "10px",
                  alignItems: "center",
                }}
              >
                <div style={{ width: "35px" }}>
                  <img
                    src="https://zoomcar-assets.zoomcar.com/images/original/9fcb8335a89265849f23225858489f2a9ce8e121.png?1584453574"
                    alt=""
                  />
                </div>
                <div>
                  <div>UPI</div>
                  <div style={{ color: "#666666" }}>
                    Google Pay, PhonePe, BHIM UPI
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "25px",
                  borderBottom: "1px solid #cccccc",
                  paddingBottom: "10px",
                  alignItems: "center",
                }}
              >
                <div style={{ width: "35px" }}>
                  <img
                    src="https://zoomcar-assets.zoomcar.com/images/original/97f051d76793fffe5ab182ffa58b8eb47c5ba0cf.png?1584453494"
                    alt=""
                  />
                </div>
                <div>
                  <div>Credit / Debit / ATM Card</div>
                  <div style={{ color: "#666666" }}>
                    All major card providers are supported
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "25px",
                  borderBottom: "1px solid #cccccc",
                  paddingBottom: "10px",
                  alignItems: "center",
                }}
              >
                <div style={{ width: "35px" }}>
                  <img
                    src="https://zoomcar-assets.zoomcar.com/images/original/1317404625e385185d23ea43a0c34569d6432d09.png?1632130014"
                    alt=""
                  />
                </div>
                <div>
                  <div>Mobile Wallet</div>
                  <div style={{ color: "#666666" }}>
                    All major wallets are supported
                  </div>
                </div>
              </div>
              <div
                style={{ display: "flex", gap: "25px", alignItems: "center" }}
              >
                <div style={{ width: "35px" }}>
                  <img
                    src="https://zoomcar-assets.zoomcar.com/images/original/4dd051886e5403aafb9725b7d2ab42c80f9b1df6.png?1584453529"
                    alt=""
                  />
                </div>
                <div>
                  <div>Net Banking</div>
                  <div style={{ color: "#666666" }}>
                    All major banks are supported
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="Right-Section"
            style={{ padding: "25px", width: "50%" }}
          >
            <div className="payment-method-And-Scan" style={{ width: "100%" }}>
              <div className="payment-method">
                <div
                  className="header"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div className="content">
                    <div className="head-payment">
                      <b>Select a UPI App</b>
                    </div>
                    <div style={{ color: "#666666" }} className="Head-Amount">
                      Amount:₹3014.0
                    </div>
                  </div>
                  <div className="logo" style={{ width: "40px" }}>
                    <img
                      src="https://www.zoomcar.com/build/760ee3019ff287f2caed7e40c92b1ca5.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="Preffered-payment">
                  <div
                    className="heading"
                    style={{
                      background: "#f5f5f5",
                      width: "100%",
                      padding: "4px",
                      marginTop: "25px",
                    }}
                  >
                    <b>PREFERRED PAYMENT OPTIONS</b>
                  </div>
                  <div>
                    <div
                      style={{
                        display: "flex",
                        gap: "20px",
                        padding: "20px 20px 20px 0px",
                        borderBottom: "1px solid #cccccc",
                      }}
                    >
                      <div style={{ width: "30px", background: "#f5f5f5" }}>
                        <img
                          src="https://zoomcar-assets.zoomcar.com/images/original/4aef7198237a74ac187c75d270f8d516cfaa5e9b.png?1584453889"
                          alt=""
                        />
                      </div>
                      <div style={{ color: "#666666" }} className="text"onClick={()=>{
                        { if(payment){
                          document.querySelector(".sub-text").style.display="flex"
                          setPayment(false)
                        }
                        else{
                          document.querySelector(".sub-text").style.display="none"
                          setPayment(true);
                        }
                          }
                      }}>
                        Google Pay
                      </div>
                      
                    </div>
                    <div className="sub-text" style={{display:"none"}} >
                        <input type="text" />
                        <button>VERIFY & PAY</button>
                      </div>
                  </div>
                  <div>
                    <div
                      style={{
                        display: "flex",
                        gap: "20px",
                        padding: "20px 20px 20px 0px",
                        borderBottom: "1px solid #cccccc",
                      }}
                    >
                      <div style={{ width: "30px", background: "#f5f5f5" }}>
                        <img
                          src="https://zoomcar-assets.zoomcar.com/images/original/2f05f4e5f91bf2f481569c3a3c4345b2cf447ff7.png?1584453837"
                          alt=""
                        />
                      </div>
                      <div style={{ color: "#666666" }} className="text">
                        PhonePe
                      </div>
                      <div className="sub-text"></div>
                    </div>
                  </div>
                  <div>
                    <div
                      style={{
                        display: "flex",
                        gap: "20px",
                        padding: "20px 20px 20px 0px",
                      }}
                    >
                      <div style={{ width: "30px", background: "#f5f5f5" }}>
                        <img
                          src="https://zoomcar-assets.zoomcar.com/images/original/91871c2e202fd271724063a4a38033612d37c219.png?1584602070"
                          alt=""
                        />
                      </div>
                      <div style={{ color: "#666666" }} className="text">
                        Paytm UPI
                      </div>
                      <div className="sub-text"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div>
        <div>
          <h1 style={{ fontSize: "22px" }}> Booking Details </h1>
          <div
            className="Section-Container"
            style={{
              boxShadow:
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
            }}
          >
            <div
              className="Car-info-Container"
              style={{
                background: "#f5f5f5",
                padding: "10px",
                paddingBottom: "40px",
              }}
            >
              <div className="Car-Name" style={{ marginBottom: "5px" }}>
                <b>Suzuki Ignis MT Petrol</b>
              </div>
              <div
                className="Info-container"
                style={{ display: "flex", gap: "25px", alignItems: "start" }}
              >
                <div className="Car-info">
                  <img
                    style={{ width: "20px" }}
                    src="https://zoomcar-assets.zoomcar.com/images/original/2aceee9e84a7bf79ae8928ace92944abbac907d4.png?1584455088"
                    alt=""
                  />
                  <span>Manual</span>
                </div>
                <div className="Car-info">
                  <img
                    style={{ width: "20px" }}
                    src="https://zoomcar-assets.zoomcar.com/images/original/4c611ba1fb54d1e42553020d9022e5ab2dac14ea.png?1584455110"
                    alt=""
                  />
                  <span>Petrol</span>
                </div>
                <div
                  className="car-img"
                  style={{
                    width: "200px",
                    position: "absolute",
                    right: "50px",
                    top: "185px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src="https://zoomcar-assets.zoomcar.com/photographs/original/13284dce101cd7020c977103e2cb5f33bee3b0e9.png?1663874479"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="Car-trip-Detail" style={{ padding: "25px" }}>
              <div className="trip-info-container">
                <div
                  className="car-trip-info"
                  style={{ display: "flex", gap: "15px", marginBottom: "25px" }}
                >
                  <div
                    className="icon-start"
                    style={{
                      background: "#e6ffea",
                      width: "25px",
                      height: "25px",
                      borderRadius: "15px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        background: "#10a310",
                        width: "8px",
                        height: "8px",
                        borderRadius: "5px",
                      }}
                    ></div>
                  </div>
                  <div className="time-and-date-containt">
                    <div className="time-date">Wed, 08 Feb, 08:30 PM</div>
                    <div className="place-city" style={{ color: "#666666" }}>
                      Janakpuri , Delhi
                    </div>
                  </div>
                </div>
                <div
                  className="connecter"
                  style={{
                    position: "absolute",
                    width: "2px",
                    height: "62px",
                    backgroundImage:
                      " linear-gradient(to bottom, #e6ffea, #fff3f0)",
                    top: "324px",
                    right: "470px",
                    overflow: "hidden",
                  }}
                ></div>
                <div
                  className="car-trip-info"
                  style={{ display: "flex", gap: "15px", marginBottom: "25px" }}
                >
                  <div
                    className="icon-end"
                    style={{
                      background: "#fff3f0",
                      width: "25px",
                      height: "25px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        background: "#e02d2d",
                        width: "8px",
                        height: "8px",
                      }}
                    ></div>
                  </div>
                  <div className="time-and-date-containt">
                    <div className="time-date">Thu, 09 Feb, 04:30 AM</div>
                    <div className="place-city" style={{ color: "#666666" }}>
                      Janakpuri , Delhi
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="location-disclamer"
                style={{
                  color: "#5160c2",
                  background: "#f0f4ff",
                  padding: "12px 10px 12px 10px",
                }}
              >
                <div>Free cancellation up to 08 February 2023, 02:30 PM</div>
              </div>
              <div
                className="fare-container"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "25px",
                  borderTop: "1px solid #e0e0e0",
                  padding: "7px 0 5px 0",
                  fontSize: "20px",
                }}
              >
                <div className="fare-head">
                  <b>Final Fare</b>
                </div>
                <div className="final-fare">
                  <b>₹2,620</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
