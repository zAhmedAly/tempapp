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
              {/* <i class="fas fa-rss-square sidebarIcon"></i> */}
              <div className="sidebarAvatar">
                <img
                  src="https://media.vanityfair.com/photos/5ec1656e5af441fe3976daf4/master/pass/barack-obama.jpg"
                  alt=""
                  className="sidebarAvatarImg"
                />
              </div>
              Barak Obama
            </li>
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <i class="fas fa-users sidebarIcon"></i>
                Freinds
              </li>
            </Link>

            <li className="sidebarListItem">
              <i class="fas fa-bell sidebarIcon"></i>
              Notifications
            </li>
            <li className="sidebarListItem">
              <i class="fas fa-comment sidebarIcon"></i>
              Messages
            </li>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <i class="fas fa-cog sidebarIcon"></i>
                Settings
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Online Friends</h3>
          <ul className="sidebarList">
            <li className="sidebarFriend">
              <div className="sidebarProfileImgContainer">
                <img
                  className="sidebarProfileImg"
                  src="https://www.pngfind.com/pngs/m/149-1497143_free-png-download-happy-person-png-images-background.png"
                  alt=""
                />
                <span className="sidebarOnline"></span>
              </div>
              <span className="sidebarUsername">Ahmed Aly</span>
            </li>
            <li className="sidebarFriend">
              <div className="sidebarProfileImgContainer">
                <img
                  className="sidebarProfileImg"
                  src="https://thumbs.dreamstime.com/b/smart-person-eyewear-man-official-clothes-stands-against-white-background-studio-165962936.jpg"
                  alt=""
                />
                <span className="sidebarOnline"></span>
              </div>
              <span className="sidebarUsername">John Adams</span>
            </li>
            <li className="sidebarFriend">
              <div className="sidebarProfileImgContainer">
                <img
                  className="sidebarProfileImg"
                  src="https://thumbs.dreamstime.com/b/close-up-portrait-rejoicing-surprised-asian-woman-glasses-happy-person-hear-great-awesome-news-realise-something-close-178164807.jpg"
                  alt=""
                />
                <span className="sidebarOnline"></span>
              </div>
              <span className="sidebarUsername">Sara Smith</span>
            </li>
            <li className="sidebarFriend">
              <div className="sidebarProfileImgContainer">
                <img
                  className="sidebarProfileImg"
                  src="https://www.pngfind.com/pngs/m/149-1497143_free-png-download-happy-person-png-images-background.png"
                  alt=""
                />
                <span className="sidebarOnline"></span>
              </div>
              <span className="sidebarUsername">Ahmed Aly</span>
            </li>
            <li className="sidebarFriend">
              <div className="sidebarProfileImgContainer">
                <img
                  className="sidebarProfileImg"
                  src="https://thumbs.dreamstime.com/b/smart-person-eyewear-man-official-clothes-stands-against-white-background-studio-165962936.jpg"
                  alt=""
                />
                <span className="sidebarOnline"></span>
              </div>
              <span className="sidebarUsername">John Adams</span>
            </li>
            <li className="sidebarFriend">
              <div className="sidebarProfileImgContainer">
                <img
                  className="sidebarProfileImg"
                  src="https://thumbs.dreamstime.com/b/close-up-portrait-rejoicing-surprised-asian-woman-glasses-happy-person-hear-great-awesome-news-realise-something-close-178164807.jpg"
                  alt=""
                />
                <span className="sidebarOnline"></span>
              </div>
              <span className="sidebarUsername">Sara Smith</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
