import { Container } from "./styles";

import MovieIcon from "../../assets/MovieIcon.svg";
import AwardIcon from "../../assets/AwardIcon.svg";

function Cards({ movieData }) {
    return (
        <>
            <Container>
                <div className="ImageLogo">
                    <img src={MovieIcon} alt="movie-logo" />
                </div>
                <div className="container-box">
                    <div className="wrapper-items">
                        <h3>{movieData.name}</h3>
                        <p>{movieData.runtimeInMinutes} min</p>
                    </div>

                    <div className="Award-bundle">
                        <img src={AwardIcon} alt="award-logo" />
                        <p>
                            {movieData.academyAwardWins} Wins &{" "}
                            {movieData.academyAwardNominations} Nominations
                        </p>
                    </div>

                    <div className="wrapper-budget">
                        <div className="budget">
                            <h4>Budget</h4>
                            <p>${movieData.budgetInMillions}M</p>
                        </div>
                        <div className="revenue">
                            <h4>Revenue</h4>
                            <p>${movieData.boxOfficeRevenueInMillions}M</p>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}

export default Cards;
