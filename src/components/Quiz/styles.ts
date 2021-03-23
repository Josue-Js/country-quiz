import styled from 'styled-components';

interface styledProps {
    alreadyAnswered: boolean;
}



export const Container = styled.div`
    position: relative; 
    width: min(100%, 465px);
    background: var(--white);
    border-radius: 24px;
    padding: 68px 32px;

    > img {
        position: absolute;
        top: -75px;
        right: 0;
    }

    @media (max-width: 465px) {
        padding: 45px 10px 37px;
        margin-top: 53px;
    }
`;

export const Question = styled.div`

    img {
        width: 84px;
        height: 54px;
        margin-bottom: 28px;
    }

    h2 {
        color: var(--blue-1);
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 32px;
    }


    @media (max-width: 465px) {

        h2 {
            font-size: 22px;
        }
    }

`;

export const Options = styled.ul<styledProps>`
    width: 100%;

    .option {
        display: flex;
        align-items: center;
        padding: 10px 19px; 
        width: 100%;
        margin-bottom: 25px;
        color: var(--light-purple);
        transition: 400ms ease;
        outline: none;
        border: 2px solid var(--light-purple);
        border-radius: 12px;
        cursor: pointer;
        pointer-events: ${({ alreadyAnswered }) => alreadyAnswered ? 'none' : 'visible'};
        transition: background 500ms ease;

        span {
            font-size: 24px;
            margin-right: 46px;
            text-transform: uppercase;
        }

        p {
            width: 100%;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            font-size: 18px;
        }

        div {
            display: flex;
            align-items: center;
            justify-content: center; 
            width: 20px;
            height: 20px;
            border: 2px solid #fff;
            border-radius: 50%;
        }

        &:hover {
            color: var(--white);
            background: var(--orange);
        
        }
    }

    .option:last-child {
        margin-bottom: 0;
    }

    .correct {
        color: var(--white); 
        background: var(--green) !important; // disable hover on devices
    }

    .wrong {
        color: var(--white) ;
        background: var(--pink) !important; // disable hover on devices
    }


    @media (max-width: 465px) {

        .option {
            padding: 10px 15px; 
            margin-bottom: 18px;

            p {
                font-size: 16px;
            }
       }

       
    }
`;

export const Next = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    margin-top: 25px;

    button {
        width: 116px;
        height: 56px;
        color: var(--white);
        outline: none;
        border: none;
        border-radius: 12px;
        background: var(--orange);
        cursor: pointer;
        transition: 500ms ease-in-out;
    }
`;