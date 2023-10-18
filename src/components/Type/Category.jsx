import React, { useState, useEffect } from "react";
import styles from "./Category.module.css";
import Selected from "../ItemsSelect/Selected";
import action from "../../assets/action.png";
import drama from "../../assets/drama.png";
import fantasy from "../../assets/fantasy.png";
import fiction from "../../assets/fiction.png";
import horror from "../../assets/horror.png";
import music from "../../assets/music.png";
import romance from "../../assets/romance.png";
import thriller from "../../assets/thriller.png";
import western from "../../assets/western.png";
import errorIcon from "../../assets/error.svg";
import { useNavigate } from "react-router-dom";

const types = [
  {
    id: "Action",
    color: "#FF5209",
    image: (
      <img
        style={{ width: "140px", height: "75px" }}
        src={action}
        alt="Action"
      />
    ),
  },
  {
    id: "Drama",
    color: "#D7A4FF",
    image: (
      <img style={{ width: "140px", height: "75px" }} src={drama} alt="Drama" />
    ),
  },
  {
    id: "Romance",
    color: "#11B750",
    image: (
      <img
        style={{ width: "140px", height: "75px" }}
        src={romance}
        alt="Romance"
      />
    ),
  },
  {
    id: "Thriller",
    color: "#84C2FF",
    image: (
      <img
        style={{ width: "140px", height: "75px" }}
        src={thriller}
        alt="Thriller"
      />
    ),
  },
  {
    id: "Western",
    color: "#912500",
    image: (
      <img
        style={{ width: "140px", height: "75px" }}
        src={western}
        alt="Western"
      />
    ),
  },
  {
    id: "Horror",
    color: "#7358FF",
    image: (
      <img
        style={{ width: "140px", height: "75px" }}
        src={horror}
        alt="Horror"
      />
    ),
  },
  {
    id: "Fantasy",
    color: " #FF4ADE",
    image: (
      <img
        style={{ width: "140px", height: "75px" }}
        src={fantasy}
        alt="Fantasy"
      />
    ),
  },
  {
    id: "Music",
    color: "#E61E32",
    image: (
      <img style={{ width: "140px", height: "75px" }} src={music} alt="Music" />
    ),
  },
  {
    id: "Fiction",
    color: "#6CD061",
    image: (
      <img
        style={{ width: "140px", height: "75px" }}
        src={fiction}
        alt="Fiction"
      />
    ),
  },
];

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleNext = () => {
    if (categories.length < 3) {
      setError(true);
      return;
    } else {
      setError(false);
      window.localStorage.setItem("type", JSON.stringify([...categories]));
      navigate("/mainpage");
    }
  };

  return (
    <div className={styles.body}>
      <div className={styles.left}>
        <p className={styles.heading}>Super app</p>
        <p className={styles.subHeading}>
          Choose your entertainment
          <br />
          category
        </p>
        <div style={{ marginTop: "5vh", textAlign: "left"}}>
          <Selected
            categories={categories}
            color={"#148A08"}
            setCategories={setCategories}
          />
          {error ? (
            <p className={styles.error}>
              <img
                src={errorIcon}
                style={{ width: "20px", height: "14px" }}
                alt="Error"
              />{" "}
              Minimum 3 category required
            </p>
          ) : (
            <></>
          )}
        </div>
      </div>

      <div className={styles.right}>
        {types.map((data, idx) => (
          <IsSelected
            data={data}
            idx={idx}
            categories={categories}
            setCategories={setCategories}
          />
        ))}
      </div>

      <button className={styles.nextPage} onClick={handleNext}>
        Next Page
      </button>
    </div>
  );
};

const IsSelected = ({ data, idx, setCategories, categories }) => {
  const [selected, setSelected] = useState();
  const handleClick = (e) => {
    const index = categories.indexOf(data.id);
    if (categories.includes(data.id)) {
      categories.splice(index, 1);
      setCategories([...categories]);
    } else {
      setCategories([...categories, data.id]);
    }
    setSelected(!selected);
  };
  useEffect(() => {
    setSelected(categories.includes(data.id) === true);
  });
  return (
    <div
      data={data}
      onClick={(e) => handleClick(e)}
      key={idx}
      style={{
        background: data["color"],
        color: "#FFF",
        padding: "11px",
        borderRadius: "12px",
        height: "140px",
        width: "180px",
        fontFamily: "DM Sans",
        fontWeight: "500",
        boxSizing: "border-box",
        border: `${selected ? "4px solid green" : "4px solid transparent"}`,
      }}
    >
      <p
        style={{
          marginBottom: "14px",
          fontSize: "20px",
          color: "#FFF",
          fontFamily: "DM Sans",
          fontWeight: 500,
        }}
      >
        {data.id}
      </p>
      {data.image}
    </div>
  );
};
export default Category;
