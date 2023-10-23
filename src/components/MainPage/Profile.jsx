import Info from "../../assets/dp.png";
const Profile = () => {
  const info = JSON.parse(window.localStorage.getItem("userData"));
  const type = JSON.parse(window.localStorage.getItem("type"));
  return (
    <div
      style={{
        width: "31vw",
        height: "33vh",
        background: "#5746EA",
        borderRadius: "14px",
        padding: "0 5px",
        display: "flex",
        marginLeft: "27px",
        gap: "8px",
        marginBottom: "7px",
      }}
    >
      <div>
        <img
          src={Info}
          alt="User Profile"
          style={{
            height: "30vh",
            width: "6.4vw",
            position: "relative",
            marginRight: "29px",
            top: "2vh",
            left: "1vw",
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "4px 18px",
          marginTop: "20px",
          width: "19w",
          gap: "4px",
        }}
      >
        <p
          style={{
            fontSize: "1rem",
            color: "#FFF",
            fontFamily: "Roboto",
            fontWeight: "300",
            letterSpacing: "0.5px",
          }}
        >
          {info.name}
        </p>
        <p
          style={{
            fontSize: "1.1rem",
            color: "#FFF",
            fontFamily: "Roboto",
            fontWeight: "300",
            letterSpacing: "0.5px",
          }}
        >
          {info.mail}
        </p>
        <p
          style={{
            fontSize: "1.7rem",
            color: "#FFF",
            fontFamily: "Roboto",
            fontWeight: "400",
            letterSpacing: "1px",
          }}
        >
          {info.username}
        </p>
        <SelectedItem categories={type} color={"#9F94FF"} />
      </div>
    </div>
  );
};

const SelectedItem = ({ color, categories }) => {
  return (
    <div
      style={{
        width: "19vw",
        height: "12vh",
        overflow: "auto",
        outline: "none",
        border: "none",
        marginTop: "14px",
      }}
    >
      {categories.map((category) => (
        <button
          style={{
            background: `${color}`,
            borderRadius: "12px",
            width: "110px",
            color: "white",
            border: "none",
            padding: "6px",
            height: "24px",
            margin: "4px",
          }}
        >
          {category}{" "}
        </button>
      ))}
    </div>
  );
};

export default Profile;
