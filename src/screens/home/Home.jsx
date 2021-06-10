import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="homeWidgets">
        <Feed />
        <Rightbar />
      </div>
    </div>
  );
};

export default Home;
