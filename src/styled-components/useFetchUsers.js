import { useEffect, useState } from "react";

export const useFetchUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await fetch("http://localhost:8000/users").then((res) =>
        res.json()
      );
      setUsers(data);
    })();
  }, []);

  return { users };
};
