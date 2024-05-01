import "../assets/css/style.scss";
import Banner from "./banner";
import Works from "./works";

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
