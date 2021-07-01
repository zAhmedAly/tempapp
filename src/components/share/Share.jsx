import { useEffect, useRef, useState } from "react";
import "./share.css";
import { Users } from "../../dummyData";

const Share = () => {
  const desc = useRef();
  const [user, setUser] = useState({});
  const [file, setFile] = useState("");

  useEffect(() => {
    const userInfo = Users.find((u) => u.id === 1);
    setUser(userInfo);
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfileImg"
            src={
              user.profilePicture
                ? "assets/" + user.profilePicture
                : "assets/person/noAvatar.png"
            }
            alt=""
          />
          <input
            placeholder={"What's in your mind " + user.username + "?"}
            className="shareInput"
            ref={desc}
          />
        </div>
        <hr className="shareHr" />
        {file && (
          <div className="shareImgContainer">
            <img className="shareImg" src={URL.createObjectURL(file)} alt="" />
            <i
              className="far fa-window-close fa-2x shareCancelImg"
              onClick={() => setFile(null)}
            ></i>
            {/* <Cancel className="shareCancelImg" onClick={() => setFile(null)} /> */}
          </div>
        )}
        <form className="shareBottom" onSubmit={submitHandler}>
          <div className="shareOptions">
            <label htmlFor="file" className="shareOption">
              <i className="fas fa-images shareIcon"></i>
              <span className="shareOptionText">Photo/Video</span>
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
            <div className="shareOption">
              <i className="fas fa-tag shareIcon"></i>
              {/* <Label htmlColor="blue" className="shareIcon" /> */}
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <i className="fas fa-map-marker-alt shareIcon"></i>
              {/* <Room htmlColor="green" className="shareIcon" /> */}
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <i className="fas fa-grin shareIcon"></i>
              {/* <EmojiEmotions htmlColor="goldenrod" className="shareIcon" /> */}
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton" type="submit">
            Share
          </button>
        </form>
      </div>
    </div>
  );
};

export default Share;
