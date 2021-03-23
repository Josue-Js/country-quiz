import { useEffect, useState } from 'react';

import Quiz from './components/Quiz';
import QuizBox from './components/QuizBox';

import { Container } from './styles/app';
import { GlobalStyles } from './styles/global';


interface countryProps {
  flag: string;
  name: string;
  capital: string;
}


function App() {

  const [countries, setCountries] = useState<countryProps[]>([]);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [resetQuiz, setResetQuiz] = useState(false) 
  const [isLoading, setIsLoading] = useState(true);


  const handleWinner = () => setCorrectAnswers(correctAnswers + 1); // add number correct answers
  const handleResetQuiz = () => setResetQuiz(!resetQuiz); // if user wrong answer reset quiz


  // get API data
  useEffect(() => {
    async function fetchData() {
      const request = await fetch('https://restcountries.eu/rest/v2/all?fields=name;capital;flag');
      const data = await request.json();
      setCountries(data)
      setIsLoading(false);
    }
    fetchData();

  }, [])


  if(isLoading) 
      return null
  


  return (
    <Container>
      <GlobalStyles />
      <h1>Country quiz</h1>

      {!resetQuiz ? (
        <Quiz
          countriesData={countries}
          handleWinner={handleWinner}
          handleResetQuiz={handleResetQuiz}
        />
      )
        : (
          <QuizBox 
            correctAnswers={correctAnswers}
            setCorrectAnswers={setCorrectAnswers}
            handleResetQuiz={handleResetQuiz}
          />
        )
      }

      <p>created by <strong>Josué</strong> - devChallenges.io</p>
    </Container>

  );
}

export default App;
