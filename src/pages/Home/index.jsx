import { useEffect, useState } from "react";
import api from "../../services/api";
import Header from "../../components/Header";
import { Container, ContainerItems } from "./styles";
import Cards from "../../components/Cards";

function Home() {
    const [movies, setMovies] = useState();
    const [Filter, setFilter] = useState();

    useEffect(() => {
        async function loadData() {
            const {
                data: { docs },
            } = await api.get("movie");

            setFilter(docs);
            setMovies(docs);
            console.log(docs);
        }

        loadData();
    }, []);

    return (
        <Container>
            <Header movies={movies} setFilter={setFilter} />

            <ContainerItems>
                {Filter &&
                    Filter.map((movie) => (
                        <Cards movieData={movie} key={movie._id} />
                    ))}
            </ContainerItems>
        </Container>
    );
}

export default Home;
