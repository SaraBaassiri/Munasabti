import "./VendorSidebar.css";
import { Link } from "react-router-dom";
import { auth } from "../../../firebase";

const VendorSidebar = ({
  sidebarOpen,
  closeSidebar,
  sidebarSmaller,
  setSidebarSmaller,
}) => {
  return (
    <div
      className={`sidebarVendor ${
        sidebarOpen ? "sidebarVendor-responsive" : ""
      }`}
    >
      <div className="sidebarVendor__nav">
        <i onClick={() => closeSidebar()} className="fa fa-times"></i>
      </div>

      <div className="sidebarVendor__mini">
        <i
          onClick={() => setSidebarSmaller(!sidebarSmaller)}
          className={
            !sidebarSmaller
              ? "fa-solid fa-angle-left"
              : "fa-solid fa-angle-right"
          }
        ></i>
      </div>

      <div className="InnerSideNav">
        {auth.currentUser?.photoURL !== "" ? (
          <img
            src={auth.currentUser?.photoURL}
            alt="logo"
            className={
              !sidebarSmaller
                ? "ProfilePhotoSideNav"
                : "ProfilePhotoSideNavSmaller"
            }
          />
        ) : (
          <img
            src="/images/profile_default.jpg"
            alt="logo"
            className={
              !sidebarSmaller
                ? "ProfilePhotoSideNav"
                : "ProfilePhotoSideNavSmaller"
            }
          />
        )}

        <div className={!sidebarSmaller ? "SideNavVendorName" : "hidden"}>
          <p>{auth.currentUser.displayName}</p>
        </div>

        <div
          className="SideBarMenuVendor"
          style={{
            marginTop: sidebarSmaller ? "20%" : "0px",
          }}
        >
          <div className="MenuItemSideNavVendor">
            <Link to="/vendor/dashboard" className="SideItemVendor">
              <i class="fa-solid fa-gauge-high"></i>
              <p className={!sidebarSmaller ? "SideNavVendorName" : "hidden"}>
                Dashboard
              </p>
            </Link>
            <Link to="/vendor/dashboard" className="SideItemVendor">
              <i class="fa-solid fa-gauge-high"></i>
              <p className={!sidebarSmaller ? "SideNavVendorName" : "hidden"}>
                Profile
              </p>
            </Link>
            <Link to="/vendor/dashboard" className="SideItemVendor">
              <i class="fa-solid fa-gauge-high"></i>
              <p className={!sidebarSmaller ? "SideNavVendorName" : "hidden"}>
                Details
              </p>
            </Link>
            <Link to="/vendor/dashboard" className="SideItemVendor">
              <i class="fa-solid fa-gauge-high"></i>
              <p className={!sidebarSmaller ? "SideNavVendorName" : "hidden"}>
                Media
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorSidebar;
