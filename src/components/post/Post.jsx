import { useState, useEffect } from "react";
import { format } from "timeago.js";

import "./post.css";
import { Users } from "../../dummyData";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const [like, setLike] = useState(5);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});

  // console.log(post);

  useEffect(() => {
    const userInfo = Users.find((u) => u.id === post.userId);
    setUser(userInfo);
  }, [post.userId]);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`/profile/${user.username}`}>
              <img
                className="postProfileImg"
                src={
                  user.profilePicture
                    ? "assets/" + user.profilePicture
                    : "assets/person/" + "noAvatar.png"
                }
                alt=""
              />
            </Link>
            <span className="postUsername">{user.username}</span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          {/* <div className="postTopRight">
            <MoreVert />
          </div> */}
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={"assets/" + post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src={"assets/like.png"}
              onClick={likeHandler}
              alt=""
            />
            <img
              className="likeIcon"
              src={"assets/heart.png"}
              onClick={likeHandler}
              alt=""
            />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
