const SelectedItem = ({ color, id, setCategories, categories }) => {
  const handleClick = () => {
    const index = categories.indexOf(id);
    categories.splice(index, 1);
    setCategories([...categories]);
  };
  return (
    <div style={{ width: "30vw" }}>
      {categories.map((category) => (
        <button
          style={{
            background: `${color}`,
            borderRadius: "12px",
            width: "110px",
            color: "#FFF",
            border: "none",
            height: "30px",
            flexShrink: 0,
            margin: "8px",
            fontFamily: "Roboto",
            fontSize: "16px",
            fontWeight: "400",
            letterSpacing: "0.503px ",
          }}
          onClick={handleClick}
        >
          {category}{" "}
          <span
            style={{
              color: "#085C00",
              marginLeft: "13px",
              width: "10px",
              fontFamily: "Roboto",
              fontWeight: 400,
              fontSize: "15px",
              letterSpacing: "0.527px",
            }}
          >
            X
          </span>
        </button>
      ))}
    </div>
  );
};

export default SelectedItem;
