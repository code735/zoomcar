import ProductDetailsCSS from "./ProductDetails.module.css";

export default function RightContainer() {
  return (
    <>
      <div className={ProductDetailsCSS.otherCharges}>
        <h6>Other Charges</h6>
        <div className={ProductDetailsCSS.otherCharges_Div}>
          <img
            style={{ width: "24px" }}
            src="https://zoomcar-assets.zoomcar.com/images/original/8b49713465c5c33330880cfe739ef06348b2c0f0.png?1659443762"
            alt="icon"
          />
          <p style={{ fontSize: "14px" }}>
            Convenience Fee{" "}
            <span style={{ textDecoration: "line-through", fontSize: "14px" }}>
              (₹149)
            </span>{" "}
            ₹99
          </p>
        </div>

        <h6>TRIP PROTECTION PACKAGE</h6>
        <div>
          <div className={ProductDetailsCSS.TPP_Div}>
            <img
              style={{ width: "24px" }}
              src="https://zoomcar-assets.zoomcar.com/images/original/f6b01d4ca15bc999a8a0bbe2bb64710cf71f9b75.png?1633967237"
              alt="icon"
            />
            <div>
              <p style={{ fontSize: "14px" }}>Basic (₹199)</p>
              <p style={{ fontSize: "12px", color: "#a8a8a8" }}>
                You pay up to INR 3499 in case of any damage
              </p>
            </div>
            <input type="radio" />
          </div>
          <div className={ProductDetailsCSS.TPP_Div}>
            <img
              style={{ width: "24px" }}
              src="https://zoomcar-assets.zoomcar.com/images/original/97e7b92d185271d80fa2e7638a3eead238f9a0ed.png?1633967297"
              alt="icon"
            />
            <div>
              <p style={{ fontSize: "14px" }}>Standard (₹279)</p>
              <p style={{ fontSize: "12px", color: "#a8a8a8" }}>
                You pay up to INR 999 in case of any damage
              </p>
              <p
                style={{
                  color: "#10a310",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                Most Opted
              </p>
            </div>
            <input type="radio" />
          </div>
          <div className={ProductDetailsCSS.TPP_Div}>
            <img
              style={{ width: "24px" }}
              src="https://zoomcar-assets.zoomcar.com/images/original/ec5e27493f742df5f714ee0830d2b623a4ba91fe.png?1667486639"
              alt="icon"
            />
            <div>
              <p style={{ fontSize: "14px" }}>Peace of Mind (₹339)</p>
              <p style={{ fontSize: "12px", color: "#a8a8a8" }}>
                You pay up to INR 99 in case of any damage
              </p>
              <p
                style={{
                  color: "#10a310",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                Value for Money
              </p>
            </div>
            <input type="radio" />
          </div>
        </div>
      </div>
      <div className={ProductDetailsCSS.detailsContainer}>
        <div>
          <p>How Trip Protection Works?</p>
          <p>
            • Zoomcar will assist in damage repair costs up to the amount as per
            the maximum deductible limit. • Does not cover any third-party
            liability or any intentional damage or damage that occurred due to
            intoxication or high speed, rash, or negligent driving. • Please
            read Zoomcar policy to know more.
          </p>
        </div>
      </div>
      <div className={ProductDetailsCSS.productTotalContainer}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h5>₹4,953</h5>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              style={{ width: "36px" }}
              src="https://images2.imgbox.com/27/78/LRP9uzlW_o.png"
              alt="coupon icon"
            />
            <p>Apply Coupon</p>
          </div>
        </div>
        <button className={ProductDetailsCSS.Totalbtn}>
          PROCEED TO PAY ₹4,953
        </button>
      </div>
    </>
  );
}
