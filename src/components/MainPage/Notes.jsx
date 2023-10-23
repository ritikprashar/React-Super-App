import { useState } from "react";

const Notes = () => {
  const [text, setText] = useState(
    JSON.parse(window.localStorage.getItem("text"))
  );
  const handleChange = (e) => {
    setText(e.target.value);
    window.localStorage.setItem("text", JSON.stringify(text));
  };
  return (
    <div
      style={{
        color: "white",
        background: "#F1C75B",
        borderRadius: "14px",
        height: "52.5vh",
        width: "24vw",
        position: "relative",
        border: "none",
        padding: "30px",
      }}
    >
      <p
        style={{
          fontSize: "1.8rem",
          marginBottom: "20px",
          color: "#000",
          fontFamily: "Roboto",
          fontWeight: "600",
          letterSpacing: "0.76px",
        }}
      >
        All notes
      </p>
      <textarea
        style={{
          width: "19vw",
          height: "37vh",
          margin: "auto",
          borderColor: "Transparent",
          overflow: "auto",
          outline: "none",
          border: "none",
          color: "#000",
          fontFamily: " Roboto",
          fontSize: "1rem",
          fontWeight: "400",
          letterSpacing: "0.4px",
          background: "transparent",
        }}
        value={text}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default Notes;
