import './Sidebar.css';
import { auth } from '../../../firebase';

const SideBar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div className={`sidebar ${sidebarOpen ? 'sidebar-responsive' : ''}`}>
      <div className="sidebar__nav">
        <div className="sidebar__title__container">
          <p className="sidebar__title">Munasabti Admin</p>
        </div>
        <i
          onClick={() => closeSidebar()}
          className="fa fa-times"
        ></i>
      </div>
      <div className="sidebar__menu">
        <div className="sidebar__link ">
          <i className="fa fa-home"></i>
          <a href="/admin">Dashboard</a>
        </div>
        <h2>Management</h2>
        <div className="sidebar__link">
          <i className="fa fa-user"></i>
          <a href="/admin/users">Users Management</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-building-o"></i>
          <a href="/admin/vendors">Vendors Management</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-user-secret"></i>
          <a href="/admin/vendors">Admin Management</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-wrench"></i>
          <a href="/admin/events">Events</a>
        </div>
        <h2>Feedback</h2>
        <div className="sidebar__link">
          <i className="fa fa-question"></i>
          <a href="#">Requests</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-archive"></i>
          <a href="/admin/reviews">Reviews and Feedback</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-sign-out"></i>
          <a href="#">Policy</a>
        </div>
        <div className="sidebar__logout"
          onClick={() => {
            auth.signOut().then(() => {
              document.location.href = "/";
            });
          }}>
          <i className="fa fa-power-off"></i>
          <p >Log out</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;