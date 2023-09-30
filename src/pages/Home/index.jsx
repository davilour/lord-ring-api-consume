import { useEffect, useState } from "react";
import api from "../../services/api";
import Header from "../../components/Header";
import { Container } from "./styles";
import Cards from "../../components/Cards";

function Home() {
    const [movies, setMovies] = useState();

    useEffect(() => {
        async function loadData() {
            const {
                data: { docs },
            } = await api.get("movie");

            setMovies(docs);
            console.log(docs);
        }

        loadData();
    }, []);

    return (
        <Container>
            <Header />

            {movies &&
                movies.map((movie) => (
                    <Cards movieData={movie} key={movie._id} />
                ))}

            <div></div>
        </Container>
    );
}

export default Home;
