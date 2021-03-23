import { ReactNode } from 'react';

import { Container } from './styles';
import undrawWinners from '../../assets/undraw-winners.svg'

interface QuizBoxProps {
  children?: ReactNode;
  correctAnswers: number;
  setCorrectAnswers: (num: number) => void;
  handleResetQuiz: () => void;
}

const  QuizBox: React.FC<QuizBoxProps> = ({ correctAnswers, setCorrectAnswers, handleResetQuiz}) => {


  const handleClick = () => {
    setCorrectAnswers(0); // if user wrong answer reset number of correct answers
    handleResetQuiz(); // start the quiz again
  }


  return (
    <Container>
      <img src={undrawWinners} alt="icon" />

      <h1>Results</h1>
      <p>You got <span>{correctAnswers}</span> correct answers </p>

      <button onClick={handleClick}>
        try again
      </button>

    </Container>
  );
};

export default QuizBox;
