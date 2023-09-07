import { useState } from "react";
import axios from "axios";

const Home = () => {
  const [search, setSearch] = useState("");
  const [gifs, setGifs] = useState();
  console.log(search);
  console.log(gifs);

  const baseUrl = "https://api.giphy.com/v1/gifs/search";
  const getGifs = async () => {
    try {
      const response = await axios.get(baseUrl, {
        params: {
          api_key: "pLURtkhVrUXr3KG25Gy5IvzziV5OrZGa",
          q: search,
        },
      });
      setGifs(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSearch = () => {
    getGifs();
  };

  return (
    <div>
      <h1>Search Giphy</h1>
      <form>
        <input value={search} onChange={handleChange} />
      </form>
      <button onClick={handleSearch}>Search</button>
      <br />
      {gifs &&
        gifs.data &&
        gifs.data.map((eachGif) => {
          return (
            <div key={eachGif.id}>
              <img src={eachGif.images.preview_gif.url} alt="gif" />
            </div>
          );
        })}
    </div>
  );
};

export default Home;
