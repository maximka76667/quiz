import React from 'react'
import './App.css';

function App() {

  const [question, setQuestion] = React.useState('');
  const [answer, setAnswer] = React.useState('');
  const [isCorrect, setIsCorrect] = React.useState(false);
  const [correctCount, setCorrectCount] = React.useState(0);
  const [incorrectCount, setIncorrectCount] = React.useState(0);

  const questions = [
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
    }
  ]

  function handleChange(e) {
    handleSubmit(e);
  }

  function setTask(questions, i) {
    setQuestion(questions[i].question);
    setAnswer(questions[i].answer);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if(e.target.value === answer) {
      setTimeout(() => {
        setIsCorrect(true);
        setCorrectCount(correctCount + 1);
        e.target.value = '';
        setTimeout(() => {
          setIsCorrect(false);
        }, 1000)
      }, 500)
    } else {
      setIsCorrect(false);
      if(e.keyCode) {
        console.log(e.keyCode);
      }
    }
  }

  function handleKeyDown(e) {
    if(e.keyCode === 13) {
      if(e.target.value !== answer) { 
        setIncorrectCount(incorrectCount + 1);
      }
    }
  }

  function handleMissTask() {
    changeTask();
    setIncorrectCount(incorrectCount + 1);
  }

  const changeTask = () => {
    setTask(questions, generateNumber(questions));
  };

  function generateNumber(questions) {
    return Math.floor(questions.length * Math.random())
  }

  React.useEffect(() => {
    changeTask();
    console.log('Сгенерирован')
  }, [])

  React.useEffect(() => {
    if(isCorrect) {
      changeTask();
      console.log('Вопрос изменен');
    }
  }, [isCorrect])

  return (
    <div className="App">
      <header><h1>Quiz</h1></header>
      <main>
        <div className="task">
          <h2 className="task__question">{question}</h2>
          <form className="task__form" onSubmit={handleSubmit}>
            <input className="task__input" type="text" onChange={handleChange} onKeyDown={handleKeyDown} />
          </form>
          <p className="task__response task_correct">{ isCorrect && 'Правильно!'}</p>
          <button className="task__miss" onClick={handleMissTask}>Пропустить</button>
          <p className="task__correct-count">Правильных ответов: {correctCount}</p>
          <p className="task__incorrect-count">Неправильных ответов: {incorrectCount}</p>
        </div>
      </main>
    </div>
  );
}

export default App;
