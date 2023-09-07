import { useContext } from "react";
import { Link } from "react-router-dom";
import { AnyContext } from "../context/AnyContext";

const Home = () => {
  const { text, setText } = useContext(AnyContext);

  return (
    <div>
      <h1>{text}</h1>
      <button onClick={() => setText("Hello, world!")}>Click</button>
      <button>
        <Link to="/home">Go home</Link>
      </button>
      <button>
        <Link to="/">Go back</Link>
      </button>
    </div>
  );
};

export default Home;
