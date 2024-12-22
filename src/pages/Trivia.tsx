import { useEffect, useState } from "react";
import { DB, Question } from "../data-providers/Server";
import "./trivia.css";

const Trivia = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchQuestions = async () => {
      setIsLoading(true);
      const fetchedQuestions = await DB.getQuestions();
      setQuestions(fetchedQuestions);
      setIsLoading(false);
    };

    fetchQuestions();
  }, []);

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleSubmitAnswer = () => {
    if (!selectedAnswer) return;

    const currentQuestion = questions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore((prev) => prev + 1);
    }

    if (currentQuestionIndex === questions.length - 1) {
      setIsFinished(true);
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isFinished) {
    return (
      <div className="trivia-container">
        <h1>Trivia Game</h1>
        <div className="result">
          <h2>Game Over!</h2>
          <p>Your Score: {score} / {questions.length}</p>
        </div>
        <button onClick={() => window.location.reload()}>Play Again</button>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="trivia-container">
      <h1>Trivia Game</h1>
      <div className="question-box">
        <h2>Question {currentQuestionIndex + 1} / {questions.length}</h2>
        <p>{currentQuestion.question}</p>
        <div className="answers">
          {currentQuestion.options.map((option, idx) => (
            <button
              key={idx}
              className={`answer-btn ${selectedAnswer === option ? "selected" : ""}`}
              onClick={() => handleAnswerSelect(option)}
            >
              {option}
            </button>
          ))}
        </div>
        <button
          onClick={handleSubmitAnswer}
          className="submit-btn"
          disabled={!selectedAnswer}
        >
          Submit Answer
        </button>
      </div>
    </div>
  );
};

export default Trivia;