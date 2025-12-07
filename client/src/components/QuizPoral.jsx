import React, { useState } from "react";

const questions = [
  {
    id: "q1",
    text: "Which HTML tag is used to define the largest heading?",
    choices: ["<heading>", "<h6>", "<h1>", "<head>"],
    answer: 2,
  },
  {
    id: "q2",
    text: "Which CSS property is used to change text color?",
    choices: ["font-color", "color", "text-color", "background-color"],
    answer: 1,
  },
  {
    id: "q3",
    text: "Inside which HTML element do we put JavaScript?",
    choices: ["<script>", "<js>", "<javascript>", "<code>"],
    answer: 0,
  },
  {
    id: "q4",
    text: "Which keyword is used to declare a constant in JavaScript?",
    choices: ["var", "let", "const", "constant"],
    answer: 2,
  },
  {
    id: "q5",
    text: "In React, what hook is used for state management?",
    choices: ["useData", "useState", "useEffect", "useReducer"],
    answer: 1,
  },
  {
    id: "q6",
    text: "Which HTTP status code means “Not Found”?",
    choices: ["200", "301", "404", "500"],
    answer: 2,
  },
  {
    id: "q7",
    text: "Which database is a NoSQL database?",
    choices: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"],
    answer: 2,
  },
  {
    id: "q8",
    text: "Which tag is used to create a hyperlink in HTML?",
    choices: ["<a>", "<link>", "<href>", "<p>"],
    answer: 0,
  },
  {
    id: "q9",
    text: "What does CSS stand for?",
    choices: [
      "Computer Style Sheets",
      "Creative Style System",
      "Cascading Style Sheets",
      "Colorful Style Syntax",
    ],
    answer: 2,
  },
  {
    id: "q10",
    text: "Which command is used to initialize a new Git repository?",
    choices: ["git start", "git init", "git create", "git new"],
    answer: 1,
  },
];

const QuizPoral = ({ onClose, onComplete }) => {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  function pick(choiceIdx) {
    const qid = questions[current].id;
    setAnswers((prev) => ({ ...prev, [qid]: choiceIdx }));
  }

  function nextQuestion() {
    if (current < questions.length - 1) setCurrent((prev) => prev + 1);
  }

  function submit() {
    let score = 0;
    questions.forEach((q) => {
      if (answers[q.id] === q.answer) {
        score++
      }
    });
    setResult({ score, total: questions.length });
    onComplete(score);
    
    
  }

  

  return (
    <div className="fixed inset-0 bg-gray-700/60 flex items-center justify-center z-50">
      <div className="bg-white border border-blue-300 rounded-lg shadow-lg max-w-2xl w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          ✖
        </button>

        {!result ? (
          <>
            <h1 className="text-xl font-bold mb-4">Web Development Quiz</h1>
            <p className="font-medium mb-2">
              Question {current + 1} of {questions.length}
            </p>
            <h2 className="text-lg font-semibold mb-4">
              {questions[current].text}
            </h2>
            <div className="space-y-2">
              {questions[current].choices.map((choice, idx) => (
                <label key={idx} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name={questions[current].id}
                    checked={answers[questions[current].id] === idx}
                    onChange={() => pick(idx)}
                  />
                  <span>{choice}</span>
                </label>
              ))}
            </div>
            <div className="mt-6 flex justify-between">
              {current < questions.length - 1 ? (
                <button
                  onClick={nextQuestion}
                  disabled={answers[questions[current].id] === undefined}
                  className="px-4 py-2 bg-indigo-600 text-white rounded disabled:bg-gray-400"
                >
                  Next
                </button>
              ) : (
                <button
                  onClick={submit}
                  disabled={answers[questions[current].id] === undefined}
                  className="px-4 py-2 bg-green-600 text-white rounded disabled:bg-gray-400"
                >
                  Submit
                </button>
              )}
            </div>
          </>
        ) : (
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Quiz Completed 🎉</h1>
            <p className="text-lg mb-4">
              Your Score: <span className="font-semibold">{result.score}</span>{" "}
              / {result.total}
            </p>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizPoral;
