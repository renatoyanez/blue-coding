import { useContext } from "react";
import { AnyContext } from "../context/AnyContext";

const Home = () => {
  const { text, setText } = useContext(AnyContext);

  return (
    <div>
      <h1>{text}</h1>
      <button onClick={() => setText("Hello, world!")}>Click</button>
    </div>
  );
};

export default Home;
