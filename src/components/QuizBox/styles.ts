import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: min(100%, 464px);
    color: var(--blue-2);
    background: var(--white);
    border-radius: 24px;
    padding: 47px 10px;

    img {
        max-width: 238px;
        height: 136px;
    }

    h1 {
        font-size: 48px;
        font-weight: 700;
        margin: 72px 0 10px;
        text-align: center;
    }

    p {
        font-size: 24px;
        font-weight: 400;
        margin-bottom: 71px;
        text-align: center;

        span {
            font-size: 36px;
            color: var(--green);
        }
    }

    button {
        width: min(100%, 209px);
        height: 62px;
        font-size: 18px;
        font-weight: 600;
        outline: none;
        color: var(--blue-2);
        border: 2px solid var(--blue-2);
        border-radius: 12px;
        cursor: pointer;

        &:hover {
            background: var(--green);
            color: var(--white);
        }
    }

    @media (max-width: 465px) {

        img {
            max-width: 218px;
            height: 116px;
        }

        p {
            margin-bottom: 40px;
        }

        h1 {
            font-size: 37px; 
            margin: 50px 0 10px;
        }

        button {
            height: 50px;
        }

    }
`;
