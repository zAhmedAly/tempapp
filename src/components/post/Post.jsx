import { useState } from "react";
import "./post.css";

const Post = ({ post }) => {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});

  return <div></div>;
};

export default Post;
