import React from 'react'
import { Route, Switch, Link } from 'react-router-dom';
import Result from './Result'

function App() {

  const [question, setQuestion] = React.useState('');
  const [userAnswer, setUserAnswer] = React.useState('');
  const [answer, setAnswer] = React.useState('');
  const [isCorrect, setIsCorrect] = React.useState(false);
  const [correctCount, setCorrectCount] = React.useState(0);
  const [incorrectCount, setIncorrectCount] = React.useState(0);
  const [response, setResponse] = React.useState('');
  const [result, setResult] = React.useState(null);

  const tasks = [
    {
      question: 'Как вас зовут?',
      answer: 'Максим'
    },
    {
      question: 'Сколько вам лет?',
      answer: '17'
    },
    {
      question: 'Ваш город?',
      answer: 'Астана'
    },
    {
      question: 'Ваш дом?',
      answer: 'Большой'
    },
    {
      question: 'Рост?',
      answer: '180'
    },
    {
      question: 'Столица Казахстана?',
      answer: 'Нур-Султан'
    }
  ]

  function handleChange(e) {
    setUserAnswer(e.target.value);
    handleSubmit(e);
  }

  function setTask(tasks, i) {
    setQuestion(tasks[i].question);
    setAnswer(tasks[i].answer);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if(e.target.value === answer) {
      setIsCorrect(true);
      setCorrectCount(correctCount + 1);
      setResponse('Правильно');
      setTimeout(() => {
        setIsCorrect(false);
        setUserAnswer('');
        setResponse('');
      }, 1000)
    } else {
      setIsCorrect(false);
    }
  }

  function handleKeyDown(e) {
    if(e.keyCode === 13) {
      if(e.target.value !== answer) { 
        setIncorrectCount(incorrectCount + 1);
        setResponse(answer);
        setTimeout(() => {
          changeTask();
          setResponse('');
        }, 1000)
      }
    }
  }

  function handleSkipTask() {
    changeTask();
    setIncorrectCount(incorrectCount + 1);
    setResponse(answer);
    changeTask();
    setTimeout(() => {
      setResponse('');
    }, 1000)
  }

  const changeTask = () => {
    console.log('Вопрос изменен');
    setTimeout(() => {
      setTask(tasks, generateNumber(tasks));
    }, 1000)
  };

  function generateNumber(tasks) {
    return Math.floor(tasks.length * Math.random())
  }

  React.useEffect(() => {
    changeTask();
    console.log('Сгенерирован...')
  }, [])

  React.useEffect(() => {
    if(isCorrect) {
      changeTask();
    }
  }, [isCorrect])

  React.useEffect(() => {
    setTimeout(() => {
      if(incorrectCount >= 3 && correctCount < 3) {
      window.location.href = "/quiz/#/game/result";
      setCorrectCount(0);
      setIncorrectCount(0);
      setResult(false);
      } else if(correctCount >= 3 && incorrectCount < 3) {
      window.location.href = "/quiz/#/game/result";
      setCorrectCount(0);
      setIncorrectCount(0);
      setResult(true);
      }
    }, 1000)
  }, [incorrectCount, correctCount])

  return (
    <div className="page">
      <header>
        <Link to="/">
          <h1 className="heading">Quiz</h1>
        </Link>
      </header>
      <main className="content">
        <Switch>
          <Route exact path="/">
            <div className="game-menu">
              <Link to="/game">Начать игру</Link>
            </div>
          </Route>
          <Route exact path="/game">
            <div className="task">
              <h2 className={`task__question ${isCorrect ? 'task__question_correct' : ''}`}>{question}</h2>
              <p className="task__response">{response}</p>
              <form className="task__form" onSubmit={handleSubmit}>
                <input className={`task__input ${isCorrect ? 'task__input_correct' : ''}`} type="text" placeholder="Ответ" onChange={handleChange} onKeyDown={handleKeyDown} value={userAnswer} />
              </form>
              <p className="task__correct-count">Правильных ответов: <span>{correctCount}</span></p>
              <p className="task__incorrect-count">Неправильных ответов: <span>{incorrectCount}</span></p>
              <button className="task__skip" onClick={handleSkipTask}>Пропустить</button>
            </div>
          </Route>
          <Route exact path="/game/result">
            <Result result={result} />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
