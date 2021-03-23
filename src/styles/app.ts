import styled from 'styled-components';



export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;    
    width: 100%;
    min-height: 100vh;
    padding: 30px 0;
    
    > h1 {
        width: min(100%, 465px);
        font-size: 36px;
        font-weight: 700;
        text-align: left;
        text-transform: uppercase;
        margin-bottom: 10px;
    }

    > p {
        font-weight: 400;
        font-size: 14px;
        color: var(--white); 
        margin-top: 30px; 
        text-align: center;
        line-height: 30px;
    }

    @media (max-width: 465px) {

        padding: 24px 0;

        > h1 {
            font-size: 33px;
            text-align: center;
        }
    }
`;