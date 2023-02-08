import React from "react";

function Payment(props) {
  return (
    <div style={{ display: "flex" }}>
        <div>
        <h1>Select a Payment method</h1>
      <div className="Payment-page-Container" style={{ display: "flex" ,boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",width:"125%"}}>
        <section className="left-Section" style={{borderRight:"1px solid #cccccc",padding:"25px"}}>
          
          <div style={{display:"flex",flexDirection:"column",gap:"25px",}} className="payment-option-container">
            <div style={{background:"#f5f5f5",width:"100%",padding:"4px"}}><b>OTHER PAYMENT OPTION</b></div>
            <div style={{display:"flex",gap:"25px",borderBottom:"1px solid #cccccc",paddingBottom:"10px",alignItems:"center"}}>
              <div style={{ width: "35px" }}>
                <img
                  src="https://zoomcar-assets.zoomcar.com/images/original/9fcb8335a89265849f23225858489f2a9ce8e121.png?1584453574"
                  alt=""
                />
              </div>
              <div>
                <div>UPI</div>
                <div style={{color:"#666666"}}>Google Pay, PhonePe, BHIM UPI</div>
              </div>
            </div>
            <div style={{display:"flex",gap:"25px" ,borderBottom:"1px solid #cccccc" ,paddingBottom:"10px",alignItems:"center"}}>
              <div style={{ width: "35px" }}>
                <img
                  src="https://zoomcar-assets.zoomcar.com/images/original/97f051d76793fffe5ab182ffa58b8eb47c5ba0cf.png?1584453494"
                  alt=""
                />
              </div>
              <div>
                <div>Credit / Debit / ATM Card</div>
                <div style={{color:"#666666"}}>All major card providers are supported</div>
              </div>
            </div>
            <div style={{display:"flex",gap:"25px", borderBottom:"1px solid #cccccc",paddingBottom:"10px",alignItems:"center"}}>
              <div style={{ width: "35px" }}>
                <img
                  src="https://zoomcar-assets.zoomcar.com/images/original/1317404625e385185d23ea43a0c34569d6432d09.png?1632130014"
                  alt=""
                />
              </div>
              <div>
                <div>Mobile Wallet</div>
                <div style={{color:"#666666"}}>All major wallets are supported</div>
              </div>
            </div>
            <div style={{display:"flex",gap:"25px" ,alignItems:"center"}}>
              <div style={{ width: "35px" }}>
                <img
                  src="https://zoomcar-assets.zoomcar.com/images/original/4dd051886e5403aafb9725b7d2ab42c80f9b1df6.png?1584453529"
                  alt=""
                />
              </div>
              <div>
                <div>Net Banking</div>
                <div style={{color:"#666666"}}>All major banks are supported</div>
              </div>
            </div>
          </div>
        </section>
        <section className="Right-Section" style={{padding:"25px",width:"50%"}}>
          <div className="payment-method-And-Scan"style={{width:"100%"}}>
            <div className="payment-method">
              <div className="header" style={{display:"flex",justifyContent:"space-between"}}>
                <div className="content">
                  <div className="head-payment"><b>Select a UPI App</b></div>
                  <div style={{color:"#666666"}} className="Head-Amount">Amount:₹3014.0</div>
                </div>
                <div className="logo" style={{ width: "40px" }}>
                  <img
                    src="https://www.zoomcar.com/build/760ee3019ff287f2caed7e40c92b1ca5.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="Preffered-payment">
                <div className="heading" style={{background:"#f5f5f5",width:"100%",padding:"4px",marginTop:"25px"}}><b>PREFERRED PAYMENT OPTIONS</b></div>
                <div>
                  <div style={{display:"flex",gap:"20px",padding:"20px 20px 20px 0px",borderBottom:"1px solid #cccccc"}}>
                    <div style={{ width: "30px",background: "#f5f5f5" }}>
                      <img
                        src="https://zoomcar-assets.zoomcar.com/images/original/4aef7198237a74ac187c75d270f8d516cfaa5e9b.png?1584453889"
                        alt=""
                      />
                    </div>
                    <div style={{color:"#666666"}}  className="text">Google Pay</div>
                    <div className="sub-text"></div>
                  </div>
                </div>
                <div>
                <div style={{display:"flex",gap:"20px",padding:"20px 20px 20px 0px",borderBottom:"1px solid #cccccc"}}>
                    <div style={{ width: "30px",background: "#f5f5f5" }}>
                      <img
                        src="https://zoomcar-assets.zoomcar.com/images/original/2f05f4e5f91bf2f481569c3a3c4345b2cf447ff7.png?1584453837"
                        alt=""
                      />
                    </div>
                    <div style={{color:"#666666"}} className="text">
          PhonePe
        </div>
                    <div className="sub-text"></div>
                  </div>
                </div>
                <div>
                <div style={{display:"flex",gap:"20px",padding:"20px 20px 20px 0px",}}>
                    <div style={{ width: "30px" ,background: "#f5f5f5"}}>
                      <img
                        src="https://zoomcar-assets.zoomcar.com/images/original/91871c2e202fd271724063a4a38033612d37c219.png?1584602070"
                        alt=""
                      />
                    </div>
                    <div style={{color:"#666666"}} className="text">Paytm UPI</div>
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
        <div><h1> Booking Details </h1></div>
        
      </div>
    </div>
  );
}

export default Payment;
