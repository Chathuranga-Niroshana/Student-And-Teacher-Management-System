import "./Home.css";
import homeImg from "./homeImg.jpg";

function Home() {
  return (
    <div className="homeContainer">
      <div className="homeH">
        <h1>Welcome To The Website.</h1>
      </div>
      <div className="contentHome">
        <img src={homeImg} alt="photo" />
        <p className="homeP">
          This is a website created for an Education Institution to save student
          and teacher details. We can create, update, view, delete these
          information.
        </p>
        <p className="homeP">
          Enter Students & Teachers Information for better handling and keeping thier records with minimal effets. 
        </p>
      </div>
    </div>
  );
}

export default Home;
