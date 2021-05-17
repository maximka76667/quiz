import React from 'react'

function App() {

  const [question, setQuestion] = React.useState('');
  const [answer, setAnswer] = React.useState('');
  const [isCorrect, setIsCorrect] = React.useState(false);
  const [correctCount, setCorrectCount] = React.useState(0);
  const [incorrectCount, setIncorrectCount] = React.useState(0);
  const [response, setResponse] = React.useState('');

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
    }
  ]

  function handleChange(e) {
    handleSubmit(e);
  }

  function setTask(tasks, i) {
    setQuestion(tasks[i].question);
    setAnswer(tasks[i].answer);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if(e.target.value === answer) {
      setTimeout(() => {
        setIsCorrect(true);
        setCorrectCount(correctCount + 1);
        e.target.value = '';
        setResponse('Правильно');
        setTimeout(() => {
          setIsCorrect(false);
          setResponse('');
        }, 1000)
      }, 500)
    } else {
      setIsCorrect(false);
    }
  }

  function handleKeyDown(e) {
    if(e.keyCode === 13) {
      if(e.target.value !== answer) { 
        setIncorrectCount(incorrectCount + 1);
        setResponse(answer);
        changeTask();
        setTimeout(() => {
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

  return (
    <div className="page">
      <main className="content">
        <h1 className="heading">Quiz</h1>
        <div className="task">
          <h2 className={`task__question ${isCorrect ? 'task__question_correct' : ''}`}>{question}</h2>
          <p className="task__response">{response}</p>
          <form className="task__form" onSubmit={handleSubmit}>
            <input className={`task__input ${isCorrect ? 'task__input_correct' : ''}`} type="text" placeholder="Ответ" onChange={handleChange} onKeyDown={handleKeyDown} />
          </form>
          <p className="task__correct-count">Правильных ответов: <span>{correctCount}</span></p>
          <p className="task__incorrect-count">Неправильных ответов: <span>{incorrectCount}</span></p>
          <button className="task__skip" onClick={handleSkipTask}>Пропустить</button>
        </div>
      </main>
    </div>
  );
}

export default App;
