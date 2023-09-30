import { Container } from "./styles";

function Cards({ movieData }) {
    return (
        <>
            <Container>
                <p>{movieData.name}</p>
            </Container>
        </>
    );
}

export default Cards;
