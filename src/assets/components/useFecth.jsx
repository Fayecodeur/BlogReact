import { useEffect, useState } from "react";

export default function useFecth(url) {
  const [data, setData] = useState(false);
  const [error, setError] = useState(false);

  async function fetchArticle(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Une erreur s'est produite...");
      }
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
      setError(error);
    }
  }

  useEffect(() => {
    fetchArticle(url);
  }, [url]);

  return { data, error };
}
