import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 6px;

    .ImageLogo {
        background-color: #abbbcc;
        height: 160px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 6px 6px 0 0;
    }

    .container-box {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 100%;
        padding: 20px;

        .wrapper-items {
            h3 {
                font-size: 18px;
                font-weight: 600;
                margin-bottom: 8px;
                height: 54px;
            }

            p {
                color: #808080;
                font-weight: 100;
            }
        }

        .Award-bundle {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 14px 0;

            p {
                font-size: 14px;
            }
        }

        .wrapper-budget {
            display: flex;
            justify-content: flex-start;
            gap: 40px;
        }
    }
`;
