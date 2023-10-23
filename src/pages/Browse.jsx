import Movies from "../components/Browse/Movies";
import ProfilePic from "../assets/dpSmall.png";
import { useNavigate } from "react-router-dom";
const Browse = () => {
  const browse = JSON.parse(window.localStorage.getItem("type"));
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/mainPage");
  };
  return (
    <>
      <div
        style={{
          width: "100vw",
          minHeight: "100vh",
          background: "black",
          overflowY: "scroll",
          maxHeight: "100vh",
        }}
      >
        <img
          src={ProfilePic}
          style={{
            position: "absolute",
            top: "6vh",
            right: "4vw",
            height: "60px",
            width: "60px",
          }}
          alt=""
        />
        <p
          style={{
            fontSize: "2.3rem",
            margin: "2.2vw",
            color: "#72DB73",
            fontFamily: "Single Day",
            fontWeight: 400,
          }}
        >
          Super app
        </p>
        <p
          style={{
            fontSize: "1.6rem",
            margin: "2vw 4vw",
            color: "#FFF",
            fontFamily: "Roboto",
            fontWeight: 600,
            letterSpacing: "0.608px",
          }}
        >
          Entertainment according to your choice
        </p>
        {browse.map((movie) => (
          <Movies type={movie} />
        ))}
      </div>
      <button
        style={{
          color: "#FFF",
          position: "absolute",
          bottom: "1vh",
          right: "4vw",
          background: "#148A08",
          border: "none",
          borderRadius: "12px",
          textAlign: "center",
          fontFamily: "DM Sans",
          fontSize: "14px",
          height: "22px",
          fontWeight: 500,
          width: "80px",
          letterSpacing: "0.2px",
        }}
        onClick={handleClick}
      >
        Home
      </button>
    </>
  );
};

export default Browse;
