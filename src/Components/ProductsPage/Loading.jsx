import loading from "./Loading_Ani.svg";
export default function Loading() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <img src={loading} alt="Loading" />
    </div>
  );
}
