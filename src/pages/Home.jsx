import SignUpForm from "../components/Home/SignUp";
import HomeImage from "../components/Home/HomeImg";

const Home = () => {
  return (
    <div style={{ display: "flex" }}>
      <HomeImage />
      <SignUpForm />
    </div>
  );
};

export default Home;
