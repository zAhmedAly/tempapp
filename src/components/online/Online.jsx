import { Link } from "react-router-dom";
import "./online.css";

export default function Online({ user }) {
  return (
    <Link to={`/profile/${user.username}`}>
      <li className="rightbarFriend">
        <div className="rightbarProfileImgContainer">
          <img
            className="rightbarProfileImg"
            src={"assets/" + user.profilePicture}
            alt=""
          />
          <span className="rightbarOnline"></span>
        </div>
        <span className="rightbarUsername">{user.username}</span>
      </li>
    </Link>
  );
}
