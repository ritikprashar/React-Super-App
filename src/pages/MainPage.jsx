import Profile from "../components/MainPage/Profile";
import Weather from "../components/MainPage/Weather";
import Timer from "../components/MainPage/Timer";
import Notes from "../components/MainPage/Notes";
import News from "../components/MainPage/News";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/browse");
  };
  return (
    <div>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          background: "black",
          paddingLeft: "3vw",
          paddingTop: "5vh",
          boxSizing: "border-box",
        }}
      >
        <div style={{ display: "flex", gap: "46px" }}>
          <div>
            <Profile />
            <Weather />
            <Timer />
          </div>
          <div>
            <Notes />
          </div>
          <div>
            <News />
          </div>
        </div>
        <button
          style={{
            position: "absolute",
            bottom: "2vh",
            right: "7.2vw",
            background: "#148A08",
            border: "none",
            padding: "6px",
            borderRadius: "12px",
            color: "#FFF",
            textAlign: "center",
            fontFamily: "DM Sans",
            fontSize: "14px",
            fontWeight: 500,
            width: "100px",
            letterSpacing: "0.2px",
          }}
          onClick={handleClick}
        >
          Browse
        </button>
      </div>
    </div>
  );
};

export default MainPage;
