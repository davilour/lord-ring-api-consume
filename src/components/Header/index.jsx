import IconSVG from "../../assets/IconSVG.svg";
import { TopHeader, Container } from "./styles";

function Header() {
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
                        <p>Ave. movie runtime: xxx min</p>
                        <p>Ave. movie budget: $XXM</p>
                    </div>
                    <input
                        type="placeholder"
                        placeholder="Filter movies by name"
                    />
                </div>
            </Container>
        </>
    );
}

export default Header;
