import { useRef, useState, useEffect } from "react";
import IconSVG from "../../assets/IconSVG.svg";
import { TopHeader, Container } from "./styles";

function Header({ movies, setFilter }) {
    const [aveValues, setAveValues] = useState({
        runtime: 0,
        budget: 0,
    });

    const inputValue = useRef();

    function aveMovies(movies) {
        const runtime =
            movies.reduce((acc, cur) => cur.runtimeInMinutes + acc, 0) /
            movies.length;

        const budget =
            movies.reduce((acc, cur) => cur.budgetInMillions + acc, 0) /
            movies.length;

        setAveValues({
            runtime,
            budget,
        });
    }

    useEffect(() => {
        if (movies && movies.length > 0) {
            aveMovies(movies);
        }
    }, [movies]);

    function inputBusca() {
        const newMovies = movies.filter((movie) =>
            movie.name
                .toLowerCase()
                .includes(inputValue.current.value.toLowerCase())
        );

        aveMovies(newMovies);
        setFilter(newMovies);
    }
    return (
        <>
            <TopHeader>
                <img src={IconSVG} alt="Icon" />
                <p>Davi Lourenço</p>
            </TopHeader>
            <Container>
                <h1>Lord of the Rings Movies</h1>
                <div className="ave-value">
                    <div>
                        <p>Ave. movie runtime: {aveValues.runtime} min</p>
                        <p>Ave. movie budget: ${aveValues.budget}M</p>
                    </div>
                    <input
                        type="placeholder"
                        placeholder="Filter movies by name"
                        ref={inputValue}
                        onChange={inputBusca}
                    />
                </div>
            </Container>
        </>
    );
}

export default Header;
