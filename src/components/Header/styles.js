import styled from "styled-components";

export const TopHeader = styled.div`
    background: #4c16c9;
    height: 56px;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 18px;

    p {
        color: white;
    }
`;

export const Container = styled.div`
    width: 100%;
    max-width: 1008px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin: 40px 0;
    border-bottom: 2px solid #c3c3c3;
    padding-bottom: 32px;

    .ave-value {
        display: flex;
        justify-content: space-between;

        input {
            height: 40px;
            width: 200px;
            border-radius: 5px;
            border: 2px solid #b7b7b7;
            padding-left: 5px;
        }
    }
`;
