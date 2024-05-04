import "../assets/css/style.scss";
import Banner from "./Banner/banner";
import Works from "./Works/work";

function Home() {
  return (
    <div className="wrapper">
      <div className="main">
        <Banner />
        <Works />
      </div>
    </div>
  );
}

export default Home;
