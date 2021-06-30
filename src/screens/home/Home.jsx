import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";

import "./home.css";

const Home = () => {
  return (
    <div className="home">
      {/* <div className="homeWidgets"> */}
      <Sidebar />
      <Feed />
      <Rightbar />
      {/* </div> */}
    </div>
  );
};

export default Home;
