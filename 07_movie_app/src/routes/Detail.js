import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const getDetail = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(id);
    console.log(json);
  };
  useEffect(() => {
    getDetail();
  }, []);
  return <h1> Build Complete </h1>;
}

export default Detail;
