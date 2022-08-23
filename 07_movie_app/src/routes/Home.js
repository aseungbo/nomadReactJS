import { useState, useEffect } from "react";
import Movie from "../components/Movie";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    // 기존에 사용하던 fetch를 async-await를 사용해 구현해보자.
    const getMovies = async () => {
        const json = await (
        await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)
        ).json();
        setMovies(json.data.movies);
        setLoading(false);
    }
    useEffect(() => {
        getMovies();
    }, []);
    return (
        <div>
        <h1> Movies </h1>
        <hr />
        {loading ? (
            <strong>Loading...</strong>
            ) : (
            <div>
                {movies.map((movie) => (
                <Movie
                    key={movie.id}
                    coverImg={movie.medium_cover_image} 
                    title={movie.title}
                    summary={movie.summary}
                    genres={movie.genres}
                />
                ))}
            </div>
            )
        }
        </div>
    );
}

export default Home;