import { useState, useEffect } from 'react';
import AnimeCard from "./components/AnimeCard";

function App() {
  const [animes, setAnimes] = useState([]);
  const [term, setTerm] = useState("");

  const getAnime = async (name) => {
    try {
      const response = await fetch(`https://api.jikan.moe/v4/anime?q=${name}`);
      const data = await response.json();
      console.log(data.data);
      setAnimes(data.data);
    } catch (error) {
      console.error("Error fetching the anime data: ", error);
    }
  };

  useEffect(() => {
    getAnime("");
  }, []);

  return (
    <div className=''>
      <h1 className='pb-6'>Anime Search</h1>
      <div className='container'>
        <input
          className=''
          type="text"
          placeholder='Search for anime e.g Naruto'
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button onClick={() => getAnime(term)}>Search</button>
      </div>

      <div className='container'>
        {animes?.length > 0 ? (
          animes.map((anime, index) => (
            <AnimeCard key={index} anime={anime} />
          ))
        ) : (
          <div>Not found</div>
        )}
      </div>
    </div>
  );
}

export default App;
