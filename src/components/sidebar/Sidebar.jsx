import { Link } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <i class="fas fa-home sidebarIcon"></i>
                Home
              </li>
            </Link>
            <li className="sidebarListItem">
              <i class="fas fa-rss-square sidebarIcon"></i>
              Feed
            </li>
            {/* <li className="sidebarListItem">
              <i class="fas fa-chart-line sidebarIcon"></i>
              Sales
            </li> */}
            {/* </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList"> */}
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <i class="fas fa-users sidebarIcon"></i>
                Developers
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <i class="fab fa-product-hunt sidebarIcon"></i>
                Posts
              </li>
            </Link>
            <li className="sidebarListItem">
              <i class="fab fa-monero sidebarIcon"></i>
              Transactions
            </li>
            <li className="sidebarListItem">
              <i class="fas fa-chart-bar sidebarIcon"></i>
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <i class="fas fa-envelope sidebarIcon"></i>
              Mail
            </li>
            <li className="sidebarListItem">
              <i class="fas fa-comments sidebarIcon"></i>
              Feedback
            </li>
            <li className="sidebarListItem">
              <i class="fas fa-comment-dots sidebarIcon"></i>
              Messages
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
