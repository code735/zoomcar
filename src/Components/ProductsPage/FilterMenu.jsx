import FilterCSS from "./FilterMenu.module.css";
import { IoCarOutline } from "@react-icons/all-files/io5/IoCarOutline";
import { IoCarSportOutline } from "@react-icons/all-files/io5/IoCarSportOutline";

export default function FilterMenu() {
  return (
    <div className={`p-3 mt-3 border border-success rounded`}>
      <div className="d-flex justify-content-between">
        <p className="fs-5 fw-bold">Sort & Filter</p>
        <p className="fw-bold" style={{ color: "#10a310", cursor: "pointer" }}>
          RESET
        </p>
      </div>
      <p>Sort By</p>
      <div className="sortMenu mb-1">
        <div className={`row mb-2 ${FilterCSS.gapGrid}`}>
          <div className="border border-secondary rounded text-center col">
            <i class="bi bi-check-circle"></i>
            <div className={FilterCSS["fs_11px"]}>Relevance</div>
          </div>
          <div className="border border-secondary rounded text-center col">
            <i class="bi bi-arrow-down-circle"></i>
            <div className={FilterCSS["fs_11px"]}>Low to High</div>
          </div>
          <div className="border border-secondary rounded text-center col">
            <i class="bi bi-arrow-up-circle"></i>
            <div className={FilterCSS["fs_11px"]}>High to Low</div>
          </div>
          <div className="border border-secondary rounded text-center col">
            <i class="bi bi-star"></i>
            <div className={FilterCSS["fs_11px"]}>Best Rated</div>
          </div>
        </div>

        <div className={`row mb-2 ${FilterCSS.gapGrid}`}>
          <div className="border border-secondary rounded text-center col">
            <i class="bi bi-geo-alt"></i>
            <div className={FilterCSS["fs_11px"]}>Distance</div>
          </div>
          <div className="border border-secondary rounded text-center col">
            <i class="bi bi-car-front"></i>
            <div className={FilterCSS["fs_11px"]}>Car Age</div>
          </div>
          <div className="border border-secondary rounded text-center col">
            <i class="bi bi-check-circle"></i>
            <div className={FilterCSS["fs_11px"]}>Kms Driven</div>
          </div>
          <div className="border border-secondary rounded text-center col">
            <i class="bi bi-check-circle"></i>
            <div className={FilterCSS["fs_11px"]}>Popularity</div>
          </div>
        </div>
      </div>
      <p className="mt-4">Car type</p>
      <div className="sortMenu mb-1 mx-2">
        <div className={`row ${FilterCSS.gapGrid}`}>
          <div className="border border-secondary rounded text-center col">
            <i style={{ fontSize: "18px", marginTop: "5px" }}>
              <IoCarOutline />
            </i>
            <div className={FilterCSS["fs_11px"]}>Hatchback</div>
          </div>
          <div className="border border-secondary rounded text-center col">
            <i style={{ fontSize: "18px", marginTop: "5px" }}>
              <IoCarSportOutline />
            </i>
            <div className={FilterCSS["fs_11px"]}>Sedan</div>
          </div>
          <div className="border border-secondary rounded text-center col">
            <img
              style={{ width: "24px" }}
              src="https://cdn-icons-png.flaticon.com/512/2207/2207521.png"
              alt=""
            />
            <div className={FilterCSS["fs_11px"]}>SUV</div>
          </div>
          <div className="border border-secondary rounded text-center col">
            <img
              style={{ width: "24px" }}
              src="https://cdn-icons-png.flaticon.com/512/3324/3324498.png"
              alt="car"
            />
            <div className={FilterCSS["fs_11px"]}>Best Rated</div>
          </div>
        </div>
      </div>

      <p className="mt-4">Setats</p>
      <div className="sortMenu mb-1 mx-2">
        <div className={`row ${FilterCSS.gapGrid}`}>
          <div className="border border-secondary rounded text-center col">
            <i style={{ fontSize: "18px", marginTop: "5px" }}>
              <IoCarOutline />
            </i>
            <div className={FilterCSS["fs_11px"]}>4 Seater</div>
          </div>
          <div className="border border-secondary rounded text-center col">
            <i style={{ fontSize: "18px", marginTop: "5px" }}>
              <IoCarSportOutline />
            </i>
            <div className={FilterCSS["fs_11px"]}>5 Seater</div>
          </div>
          <div className="border border-secondary rounded text-center col">
            <img
              style={{ width: "24px" }}
              src="https://cdn-icons-png.flaticon.com/512/2207/2207521.png"
              alt=""
            />
            <div className={FilterCSS["fs_11px"]}>7 Seater</div>
          </div>
        </div>
      </div>

      <p className="mt-4">Fuel type</p>
      <div className="sortMenu mb-1 mx-2">
        <div className={`row ${FilterCSS.gapGrid}`}>
          <div className="border border-secondary rounded text-center col">
            <img
              style={{ width: "24px" }}
              src="https://cdn-icons-png.flaticon.com/512/3012/3012041.png"
              alt=""
            />
            <div className={FilterCSS["fs_11px"]}>Petrol</div>
          </div>
          <div className="border border-secondary rounded text-center col">
            <img
              style={{ width: "24px" }}
              src="https://cdn-icons-png.flaticon.com/512/3012/3012041.png"
              alt=""
            />
            <div className={FilterCSS["fs_11px"]}>Diesel</div>
          </div>
          <div className="border border-secondary rounded text-center col">
            <img
              style={{ width: "24px" }}
              src="https://cdn-icons-png.flaticon.com/512/9618/9618735.png"
              alt=""
            />
            <div className={FilterCSS["fs_11px"]}>CNG</div>
          </div>
        </div>
      </div>
    </div>
  );
}
