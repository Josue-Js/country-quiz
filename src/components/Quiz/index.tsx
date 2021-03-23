import React, { ReactNode, useState, useEffect } from 'react';
import { MdDone, MdClose } from 'react-icons/md';

import Svg from '../../assets/undraw-adventure.svg';
import { numberRepeat, randomNumber } from '../../utils';
import { Container, Next, Options, Question } from './styles';


type countryProps = {
  flag: string;
  name: string;
  capital: string;
}

interface QuizProps {
  children?: ReactNode;
  countriesData: countryProps[];
  handleWinner: () => void;
  handleResetQuiz: () => void;
}

const Quiz: React.FC<QuizProps> = ({ countriesData, handleWinner, handleResetQuiz }) => {


  
  const [typeQuestion, setTypeQuestion] = useState({ type: 'flag' }); //object with types of questions 
  const [optionsAnswers, setOptionsAnswers] = useState<countryProps[]>([]);
  const [rightAnswerIndex, setRightAnswerIndex] = useState(0);

  const [next, setNext] = useState(false);// show button next
  const [alreadyAnswered, setAlreadyAnswered] = useState(false); //if user already Answered
  const [userResponse, setUserResponse] = useState<number | undefined>(); // user Response





  // get four objects and the  right Answer Index
  useEffect(() => {

    const numbers: number[] = [];
    const randomCountries: countryProps[] = [];
    const countriesDataLength = countriesData.length - 1


    // get four different numbers
    while (true) {
      for (let i = 0; i < 4; i++) {
        const randomNum = randomNumber(countriesDataLength);
        numbers.push(randomNum);
        randomCountries.push(countriesData[randomNum]);
      }

      if (numberRepeat(numbers)) {
        numbers.splice(0, 4);
        console.log('repeat')
        randomCountries.splice(0, 4);
        continue
      }
      break
    }


    const index = randomNumber(4); // get index of the right answer
    setOptionsAnswers(randomCountries); // set options answer
    setRightAnswerIndex(index); // set index right answer

  }, [typeQuestion, countriesData])



  // check if the user got it right or wrong
  const handleClick = (index: number) => {

    if (rightAnswerIndex === index) {
      handleWinner(); // set the right number of answers
    }
    setUserResponse(index) // set the index of the user's response
    setNext(true); // show button next
    setAlreadyAnswered(true); //if user already Answered
  }



  const handleNextAnswer = () => {

    if (rightAnswerIndex !== userResponse) {
      handleResetQuiz(); // reset quiz if user Answered wrong
    }

    //re-render to go to the next question
    const typeQuestions = ['flag', 'capital'];
    const typeQuestion = typeQuestions[randomNumber(2)];
    setTypeQuestion({ type: typeQuestion }); // set type question

    setAlreadyAnswered(false); // if user already answered
    setUserResponse(undefined) // reset user response 
    setNext(false); // hidden button next
  }



  return (
    <Container>
      <img src={Svg} alt="icon" />

      {optionsAnswers.length &&
        <>
          <Question>
            {typeQuestion.type === 'flag' &&
              <img src={optionsAnswers[rightAnswerIndex].flag} alt="flag" draggable="false" />
            }
            <h2>
              {typeQuestion.type === 'flag'
                ? 'Which country does this flag belong to?  '
                : `${optionsAnswers[rightAnswerIndex].capital} is the capital of `
              }
            </h2>
          </Question>

          <Options alreadyAnswered={alreadyAnswered}>
            {optionsAnswers.map((country, index) => (
              <li
                key={country.name}
                onClick={() => handleClick(index)}
                className={`option${
                    alreadyAnswered && rightAnswerIndex === index
                    ? ' correct'
                    :  userResponse === index ? ' wrong' : ''
                  }`

                }>
                <span>{String.fromCharCode(65 + index)}</span>
                <p>{country.name}</p>
                {alreadyAnswered && rightAnswerIndex === index
                  ? (
                    <div>
                      <MdDone size={16} color="whte" />
                    </div>
                  ) : userResponse === index && (
                    <div>
                      <MdClose size={16} color="white" />
                    </div>
                  )
                }
              </li>
            ))}
          </Options>
        </>
      }
      {next &&
        <Next onClick={handleNextAnswer}>
          <button>
            Next
          </button>
        </Next>
      }

    </Container>
  );
};

export default Quiz;
