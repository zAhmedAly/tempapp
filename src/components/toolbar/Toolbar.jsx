import { Link } from "react-router-dom";
import "./toolbar.css";

const Toolbar = () => {
  return (
    <header className="toolbarContainer">
      <span className="toolbarBrand">
        <div className="toolbarBrandLogo">
          {/* <i className="fas fa-toolbox fa-lg center"></i> */}
          <i className="fab fa-500px fa-lg center"></i>
          {/* <i className="fab fa-dev fa-lg center"></i> */}
        </div>
        <div className="toolbarBrandName">Social Connect</div>
      </span>
      <div className="toolbarIcons">
        {/* <div className='toolbarIconsWrapper'> */}
        <div className="toolbarIconWrapper">
          <div className="toolbarIconContainer">
            <Link to="/">
              <i className="fas fa-home fa-lg center"></i>
            </Link>
          </div>
          <span className="tooltiptext">Home</span>
        </div>

        <div className="toolbarIconWrapper">
          <div className="toolbarIconContainer">
            <i className="fas fa-users fa-lg center"></i>
          </div>
          <span className="tooltiptext">Friends</span>
        </div>
        <div className="toolbarIconWrapper">
          <div className="toolbarIconContainer">
            <i className="fas fa-edit fa-lg center"></i>
          </div>
          <span className="tooltiptext">Add Post</span>
        </div>
        <div className="toolbarIconWrapper">
          <div className="toolbarIconContainer">
            <i className="fas fa-bell fa-lg center"></i>
            <span className="toobarIconBadge">2</span>
          </div>
          <span className="tooltiptext">Notifications</span>
        </div>
        <div className="toolbarIconWrapper">
          <div className="toolbarIconContainer">
            <i className="fas fa-comment fa-lg center"></i>
            <span className="toobarIconBadge">10</span>
          </div>
          <span className="tooltiptext">Messages</span>
        </div>

        <div className="toolbarIconWrapper">
          <div className="toolbarIconContainer">
            <i className="fas fa-cog fa-lg center"></i>
          </div>
          <span className="tooltiptext">Settings</span>
        </div>

        {/* </div> */}
        <Link to="/profile">
          <div className="toolbarAvatar">
            <img
              src="https://media.vanityfair.com/photos/5ec1656e5af441fe3976daf4/master/pass/barack-obama.jpg"
              alt=""
              className="toolbarAvatarImg"
            />
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Toolbar;
