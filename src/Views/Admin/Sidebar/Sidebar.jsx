import "./Sidebar.css";
import { auth } from "../../../firebase";
import { Link, useNavigate } from "react-router-dom";

const SideBar = ({ sidebarOpen, closeSidebar }) => {
  const navigate = useNavigate();
  return (
    <div className={`sidebar ${sidebarOpen ? "sidebar-responsive" : ""}`}>
      <div className="sidebar__nav">
        <div className="sidebar__title__container">
          <p className="sidebar__title">Munasabti Admin</p>
        </div>
        <i onClick={() => closeSidebar()} className="fa fa-times"></i>
      </div>
      <div className="sidebar__menu">
        <div className="sidebar__link ">
          <i className="fa fa-home"></i>
          <Link to="/admin">Dashboard</Link>
        </div>
        <h2>Management</h2>
        <div className="sidebar__link">
          <i className="fa fa-user"></i>
          <Link to="/admin/users">Users Management</Link>
        </div>
        <div className="sidebar__link">
          <i class="fa-solid fa-building"></i>
          <Link to="/admin/vendors">Vendors Management</Link>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-user-secret"></i>
          <Link to="/admin/managment">Admin Management</Link>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-wrench"></i>
          <Link to="/admin/events">Events</Link>
        </div>
        <h2>Website Configuration</h2>
        <div className="sidebar__link">
          <i class="fa-solid fa-image"></i>
          <Link to="/admin/edit-images">Display Images</Link>
        </div>
        <div className="sidebar__link">
          <i class="fa-solid fa-toolbox"></i>
          <Link to="/admin/reviews">Vendor Section Configuration</Link>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-sign-out"></i>
          <Link to="/admin/website-config">Website Configuration</Link>
        </div>
        <h2>Feedback</h2>
        <div className="sidebar__link">
          <i className="fa fa-question"></i>
          <Link to="/admin/requests">Requests</Link>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-archive"></i>
          <Link to="/admin/reviews">Reviews and Feedback</Link>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-sign-out"></i>
          <Link to="/admin/terms">Edit Terms and Services</Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
