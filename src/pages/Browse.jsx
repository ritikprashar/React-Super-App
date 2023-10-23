import Movies from "../components/Browse/Movies";
import ProfilePic from "../assets/dpSmall.png";
const Browse = () => {
  const browse = JSON.parse(window.localStorage.getItem("type"));
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
    </>
  );
};

export default Browse;
