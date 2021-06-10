import "./feed.css";
import { Posts } from "../../dummyData";
import Post from "../post/Post";
import Share from "../share/Share";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {/* {(!username || username === user.username) && <Share />} */}
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
