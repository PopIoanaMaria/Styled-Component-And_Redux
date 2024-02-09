import { useEffect, useState } from "react";

export const useFetchGames = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await fetch("http://localhost:8000/games").then((res) =>
        res.json()
      );
      setGames(data);
    })();
  }, []);

  return { games };
};
