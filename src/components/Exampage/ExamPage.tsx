// import React, { useState, useEffect } from 'react';

// // Define the type for the question array
// type QuestionType = {
//     question: string;
//     options: string[];
//   }[];

// const questions: QuestionType = [
//   {
//     question: 'Question 1: What is the capital of France?',
//     options: ["Paris", "London", "Berlin", "Madrid"]
//   },
//   {
//     question: 'Question 2: What is 2 + 2?',
//     options: ["4", "3", "2", "1"]
//   },
//   {
//     question: 'Question 3: Who wrote "Hamlet"?',
//     options: ["Shakespeare", "Dickens", "Austen", "Hemingway"]
//   },
//   {
//     question: 'Question 4: What is the largest planet in our Solar System?',
//     options: ["Earth", "Mars", "Jupiter", "Saturn"]
//   }
// ];

// const ExamPage: React.FC = () => {
//   const [timeLeft, setTimeLeft] = useState<number>(3600); // 60 minutes in seconds
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
//   const [answers, setAnswers] = useState<string[][]>(new Array(questions.length).fill([]));

//   useEffect(() => {
//     // Timer countdown effect
//     const timer = setInterval(() => {
//       setTimeLeft(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   // Function to handle question navigation
//   const handleQuestionChange = (index: number) => {
//     if (index >= 0 && index < questions.length) {
//       setCurrentQuestionIndex(index);
//     }
//   };
//   const handleCheckboxChange = (option: string) => {
//     const newAnswers = [...answers];
//     const index = newAnswers[currentQuestionIndex].indexOf(option);
//     if (index === -1) {
//       newAnswers[currentQuestionIndex].push(option);
//     } else {
//       newAnswers[currentQuestionIndex].splice(index, 1);
//     }
//     setAnswers(newAnswers);
//   };

//   // Function to handle button clicks
//   const handleNextSaveClick = () => {
//     // Save answer logic
//     alert('Answer saved!');
//     // Move to next question if available
//     if (currentQuestionIndex < questions.length - 1) {
//       handleQuestionChange(currentQuestionIndex + 1);
//     }
//   };

//   // Format time left into mm:ss
//   const formatTime = (time: number) => {
//     const minutes = Math.floor(time / 60);
//     const seconds = time % 60;
//     return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
//   };

//   return (
//     <div>
//       <div className='text-white'>
//         <span>Time Left: {formatTime(timeLeft)}</span>
//       </div>
//       <div className='text-white'>
//         <p>{questions[currentQuestionIndex].question}</p>
//       </div>
//       {/* <div className='text-white'>
//         {questions[currentQuestionIndex].options.map((option, index) => (
//           <button key={index} onClick={() => setAnswers(prevAnswers => {
//             const newAnswers = [...prevAnswers];
//             newAnswers[currentQuestionIndex] = option;
//             return newAnswers;
//           })}>{option}</button>
//         ))}
//       </div> */}
//       <div className='text-white'>
//         {questions[currentQuestionIndex].options.map((option, index) => (
//           <label key={index}>
//             <input
//               type="checkbox"
//               checked={answers[currentQuestionIndex].includes(option)}
//               onChange={() => handleCheckboxChange(option)}
//             />
//             {option}
//           </label>
//         ))}
//       </div>
//       <div className='text-white'>
//       <button onClick={() => handleQuestionChange(1)}>1</button>
//         <button onClick={() => handleQuestionChange(2)}>2</button>
//         <button onClick={() => handleQuestionChange(3)}>3</button>
//         <button onClick={() => handleQuestionChange(4)}>4</button>
//         <button onClick={() => handleQuestionChange(5)}>5</button>
//         <button onClick={() => handleQuestionChange(6)}>6</button>
//         <button onClick={() => handleQuestionChange(7)}>7</button>
//         <button onClick={() => handleQuestionChange(2)}>8</button>
//         <button onClick={() => handleQuestionChange(9)}>9</button>
//         <button onClick={() => handleQuestionChange(10)}>10</button>
//         <button onClick={() => handleQuestionChange(currentQuestionIndex - 1)}>Prev</button>
//         <button onClick={handleNextSaveClick}>Next & Save</button>
//       </div>
//     </div>
//   );
// };

// export default ExamPage;

//second code

// import React, { useState, useEffect } from 'react';

// type QuestionType = {
//   question: string;
//   options: string[];
// }[];

// const questions: QuestionType = [
//   {
//     question: 'Question 1: What is the capital of France?',
//     options: ["Paris", "London", "Berlin", "Madrid"]
//   },
//   {
//     question: 'Question 2: What is 2 + 2?',
//     options: ["4", "3", "2", "1"]
//   },
//   {
//     question: 'Question 3: Who wrote "Hamlet"?',
//     options: ["Shakespeare", "Dickens", "Austen", "Hemingway"]
//   },
//   {
//     question: 'Question 4: What is the largest planet in our Solar System?',
//     options: ["Earth", "Mars", "Jupiter", "Saturn"]
//   },
// ];

// enum QuestionStatus {
//   NotVisited = 'NotVisited',
//   Answered = 'Answered',
//   NotAnsweredAndReview = 'NotAnsweredAndReview',
//   AttemptedAndReview = 'AttemptedAndReview'
// }

// const ExamPage: React.FC = () => {
//   const [timeLeft, setTimeLeft] = useState<number>(3600); // 60 minutes in seconds
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
//   const [answers, setAnswers] = useState<string[][]>(new Array(questions.length).fill([]));
//   const [status, setStatus] = useState<QuestionStatus[]>(
//     new Array(questions.length).fill(QuestionStatus.NotVisited)
//   );

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const handleQuestionChange = (index: number) => {
//     if (index >= 0 && index < questions.length) {
//       setCurrentQuestionIndex(index);
//       if (status[index] === QuestionStatus.NotVisited) {
//         updateStatus(index, QuestionStatus.NotAnsweredAndReview);
//       }
//     }
//   };

//   const handleCheckboxChange = (option: string) => {
//     const newAnswers = [...answers];
//     const index = newAnswers[currentQuestionIndex].indexOf(option);
//     if (index === -1) {
//       newAnswers[currentQuestionIndex].push(option);
//     } else {
//       newAnswers[currentQuestionIndex].splice(index, 1);
//     }
//     setAnswers(newAnswers);
//   };

//   const handleSaveClick = () => {
//     const currentAnswers = answers[currentQuestionIndex];
//     if (currentAnswers.length > 0) {
//       updateStatus(currentQuestionIndex, QuestionStatus.Answered);
//     } else {
//       updateStatus(currentQuestionIndex, QuestionStatus.NotAnsweredAndReview);
//     }
//     alert('Answer saved!');
//   };

//   const handleNextClick = () => {
//     if (answers[currentQuestionIndex].length === 0) {
//       updateStatus(currentQuestionIndex, QuestionStatus.AttemptedAndReview);
//     }
//     if (currentQuestionIndex < questions.length - 1) {
//       handleQuestionChange(currentQuestionIndex + 1);
//     }
//   };

//   const handlePrevClick = () => {
//     const prevIndex = currentQuestionIndex - 1;
//     if (prevIndex >= 0) {
//       setCurrentQuestionIndex(prevIndex);
//       updateStatus(prevIndex, QuestionStatus.NotAnsweredAndReview);
//     }handleQuestionChange(currentQuestionIndex - 1);

//   };

//   const updateStatus = (index: number, newStatus: QuestionStatus) => {
//     const newStatusArray = [...status];
//     newStatusArray[index] = newStatus;
//     setStatus(newStatusArray);
//   };

//   const formatTime = (time: number) => {
//     const minutes = Math.floor(time / 60);
//     const seconds = time % 60;
//     return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
//   };

//   const getStatusClass = (index: number) => {
//     switch (status[index]) {
//       case QuestionStatus.Answered:
//         return 'bg-green-500';
//       case QuestionStatus.NotAnsweredAndReview:
//         return 'bg-blue-500';
//       case QuestionStatus.AttemptedAndReview:
//         return 'bg-orange-500';
//       case QuestionStatus.NotVisited:
//       default:
//         return 'bg-white';
//     }
//   };

//   return (
//     <div>
//       <div className='text-white'>
//         <span>Time Left: {formatTime(timeLeft)}</span>
//       </div>
//       <div className='text-white'>
//         <p>{questions[currentQuestionIndex].question}</p>
//       </div>
//       <div className='text-white'>
//         {questions[currentQuestionIndex].options.map((option, index) => (
//           <label key={index}>
//             <input
//               type="checkbox"
//               checked={answers[currentQuestionIndex].includes(option)}
//               onChange={() => handleCheckboxChange(option)}
//             />
//             {option}
//           </label>
//         ))}
//       </div>
//       <div className='text-black'>
//         {questions.map((_, index) => (
//           <button
//             key={index}
//             className={`${getStatusClass(index)} m-1 p-2`}
//             onClick={() => handleQuestionChange(index)}
//           >
//             {index + 1}
//           </button>
//         ))}
//       </div>
//       <div className='text-white'>
//         <button onClick={handlePrevClick}>Prev</button>
//         <button onClick={handleSaveClick}>Save</button>
//         <button onClick={handleNextClick}>Next</button>
//       </div>
//     </div>
//   );
// };

// export default ExamPage;

//third code 
// import React, { useState, useEffect } from 'react';


// type QuestionType = {
//   question: string;
//   options: string[];
// }[];

// const questions: QuestionType = [
//   {
//     question: 'Question 1: What is the capital of France?',
//     options: ["Paris", "London", "Berlin", "Madrid"]
//   },
//   {
//     question: 'Question 2: What is 2 + 2?',
//     options: ["4", "3", "2", "1"]
//   },
//   {
//     question: 'Question 3: Who wrote "Hamlet"?',
//     options: ["Shakespeare", "Dickens", "Austen", "Hemingway"]
//   },
//   {
//     question: 'Question 4: What is the largest planet in our Solar System?',
//     options: ["Earth", "Mars", "Jupiter", "Saturn"]
//   }

// ];

// enum QuestionStatus {
//   NotVisited = 'NotVisited',
//   Answered = 'Answered',
//   NotAnsweredAndReview = 'NotAnsweredAndReview',
//   AttemptedAndReview = 'AttemptedAndReview'
// }

// const ExamPage: React.FC = () => {
//   const [timeLeft, setTimeLeft] = useState<number>(3600); // 60 minutes in seconds
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
//   const [answers, setAnswers] = useState<string[][]>(new Array(questions.length).fill([]));
//   const [status, setStatus] = useState<QuestionStatus[]>(
//     new Array(questions.length).fill(QuestionStatus.NotVisited)
//   );

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const handleQuestionChange = (index: number) => {
//     if (index >= 0 && index < questions.length) {
//       setCurrentQuestionIndex(index);
//       if (status[index] === QuestionStatus.NotVisited) {
//         updateStatus(index, QuestionStatus.NotAnsweredAndReview);
//       }
//     }
//   };

//   const handleCheckboxChange = (option: string) => {
//     const newAnswers = [...answers];
//     const index = newAnswers[currentQuestionIndex].indexOf(option);
//     if (index === -1) {
//       newAnswers[currentQuestionIndex].push(option);
//     } else {
//       newAnswers[currentQuestionIndex].splice(index, 1);
//     }
//     setAnswers(newAnswers);
//   };

//   const handleSaveClick = () => {
//     const currentAnswers = answers[currentQuestionIndex];
//     if (currentAnswers.length > 0) {
//       updateStatus(currentQuestionIndex, QuestionStatus.Answered);
//     } else {
//       updateStatus(currentQuestionIndex, QuestionStatus.NotAnsweredAndReview);
//     }
//     alert('Answer saved!');
//   };

//   const handleNextClick = () => {
//     // Mark question as attempted and review if no options are selected
//     if (answers[currentQuestionIndex].length === 0) {
//       updateStatus(currentQuestionIndex, QuestionStatus.AttemptedAndReview);
//     }
//     if (currentQuestionIndex < questions.length - 1) {
//       handleQuestionChange(currentQuestionIndex + 1);
//     }
//   };

//   const handlePrevClick = () => {
//     if (currentQuestionIndex > 0) {
//       handleQuestionChange(currentQuestionIndex - 1);
//     }
//   };

//   const updateStatus = (index: number, newStatus: QuestionStatus) => {
//     const newStatusArray = [...status];
//     newStatusArray[index] = newStatus;
//     setStatus(newStatusArray);
//   };

//   const formatTime = (time: number) => {
//     const minutes = Math.floor(time / 60);
//     const seconds = time % 60;
//     return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
//   };

//   const getStatusClass = (index: number) => {
//     switch (status[index]) {
//       case QuestionStatus.Answered:
//         return 'bg-green-500';
//       case QuestionStatus.NotAnsweredAndReview:
//         return 'bg-blue-500';
//       case QuestionStatus.AttemptedAndReview:
//         return 'bg-black';
//       case QuestionStatus.NotVisited:
//       default:
//         return 'bg-white';
//     }
//   };

//   return (
//     <div>
//       <div className='text-black'>
//         <span>Time Left: {formatTime(timeLeft)}</span>
//       </div>
//       <div className='text-black'>
//         <p>{questions[currentQuestionIndex].question}</p>
//       </div>
//       <div className='text-black'>
//         {questions[currentQuestionIndex].options.map((option, index) => (
//           <label key={index} className="block">
//             <input
//               type="checkbox"
//               checked={answers[currentQuestionIndex].includes(option)}
//               onChange={() => handleCheckboxChange(option)}
//               className="mr-2"
//             />
//             {option}
//           </label>
//         ))}
//       </div>
//       <div className='text-black my-4'>
//         {questions.map((_, index) => (
//           <button
//             key={index}
//             className={`${getStatusClass(index)} m-1 p-2 border rounded`}
//             onClick={() => handleQuestionChange(index)}
//           >
//             {index + 1}
//           </button>
//         ))}
//       </div>
//       <div className='text-black'>
//         <button onClick={handlePrevClick} className="mr-2 p-2 border rounded">Prev</button>
//         <button onClick={handleSaveClick} className="mr-2 p-2 border rounded">Save</button>
//         <button onClick={handleNextClick} className="p-2 border rounded">Next</button>
//       </div>
//     </div>
//   );
// };

// export default ExamPage;

//bbbbbbbbbbbb
// import React, { useState, useEffect } from 'react';

// type QuestionType = {
//   question: string;
//   options: string[];
// }[];

// const questions: QuestionType = [
//   {
//     question: 'Question 1: What is the capital of France?',
//     options: ["Paris", "London", "Berlin", "Madrid"]
//   },
//   {
//     question: 'Question 2: What is 2 + 2?',
//     options: ["4", "3", "2", "1"]
//   },
//   {
//     question: 'Question 3: Who wrote "Hamlet"?',
//     options: ["Shakespeare", "Dickens", "Austen", "Hemingway"]
//   },
//   {
//     question: 'Question 4: What is the largest planet in our Solar System?',
//     options: ["Earth", "Mars", "Jupiter", "Saturn"]
//   },
//   {
//     question: 'Question 5: What is the capital of Japan?',
//     options: ["Tokyo", "Beijing", "Seoul", "Bangkok"]
//   },
//   {
//     question: 'Question 6: Who painted the Mona Lisa?',
//     options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"]
//   },
//   {
//     question: 'Question 7: Who is known as the father of modern physics?',
//     options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Stephen Hawking"]
//   },
//   {
//     question: 'Question 8: Who wrote "To Kill a Mockingbird"?',
//     options: ["Harper Lee", "J.K. Rowling", "F. Scott Fitzgerald", "George Orwell"]
//   },
//   {
//     question: 'Question 9: What is the largest ocean on Earth?',
//     options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"]
//   },
//   {
//     question: 'Question 10: What is the largest ocean on Earth?',
//     options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"]
//   }
// ];

// enum QuestionStatus {
//   NotVisited = 'NotVisited',
//   Answered = 'Answered',
//   NotAnsweredAndReview = 'NotAnsweredAndReview',
//   AttemptedAndReview = 'AttemptedAndReview'
// }

// const ExamPage: React.FC = () => {
//   const [timeLeft, setTimeLeft] = useState<number>(3600); // 60 minutes in seconds
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
//   const [answers, setAnswers] = useState<string[][]>(new Array(questions.length).fill([]));
//   const [status, setStatus] = useState<QuestionStatus[]>(
//     new Array(questions.length).fill(QuestionStatus.NotVisited)
//   );

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const handleQuestionChange = (index: number) => {
//     if (index >= 0 && index < questions.length) {
//       setCurrentQuestionIndex(index);
//       if (status[index] === QuestionStatus.NotVisited) {
//         updateStatus(index, QuestionStatus.NotAnsweredAndReview);
//       }
//     }
//   };

//   const handleCheckboxChange = (option: string) => {
//     const newAnswers = [...answers];
//     const index = newAnswers[currentQuestionIndex].indexOf(option);
//     if (index === -1) {
//       newAnswers[currentQuestionIndex].push(option);
//     } else {
//       newAnswers[currentQuestionIndex].splice(index, 1);
//     }
//     setAnswers(newAnswers);
//   };

//   const handleSaveClick = () => {
//     const currentAnswers = answers[currentQuestionIndex];
//     if (currentAnswers.length > 0) {
//       updateStatus(currentQuestionIndex, QuestionStatus.Answered);
//     } else {
//       updateStatus(currentQuestionIndex, QuestionStatus.NotAnsweredAndReview);
//     }
//     alert('Answer saved!');
//   };

//   const handleNextClick = () => {
//     if (answers[currentQuestionIndex].length === 0) {
//       updateStatus(currentQuestionIndex, QuestionStatus.AttemptedAndReview);
//     }
//     if (currentQuestionIndex < questions.length - 1) {
//       handleQuestionChange(currentQuestionIndex + 1);
//     }
//   };

//   const handlePrevClick = () => {
//     const prevIndex = currentQuestionIndex - 1;
//     if (answers[currentQuestionIndex].length === 0) {
//       updateStatus(currentQuestionIndex, QuestionStatus.AttemptedAndReview);
//     }
//     if (prevIndex >= 0) {
//       setCurrentQuestionIndex(prevIndex);
//       updateStatus(prevIndex, QuestionStatus.NotAnsweredAndReview);
//     }
//   };

//   const updateStatus = (index: number, newStatus: QuestionStatus) => {
//     const newStatusArray = [...status];
//     newStatusArray[index] = newStatus;
//     setStatus(newStatusArray);
//   };

//   const formatTime = (time: number) => {
//     const minutes = Math.floor(time / 60);
//     const seconds = time % 60;
//     return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
//   };

//   const getStatusClass = (index: number) => {
//     switch (status[index]) {
//       case QuestionStatus.Answered:
//         return 'bg-green-500';
//       case QuestionStatus.NotAnsweredAndReview:
//         return 'bg-blue-500';
//       case QuestionStatus.AttemptedAndReview:
//         return 'bg-orange-500';
//       case QuestionStatus.NotVisited:
//       default:
//         return 'bg-white';
//     }
//   };

//   return (
//     <div>
//       <div className='text-white'>
//         <span>Time Left: {formatTime(timeLeft)}</span>
//       </div>
//       <div className='text-white'>
//         <p>{questions[currentQuestionIndex].question}</p>
//       </div>
//       <div className='text-white'>
//         {questions[currentQuestionIndex].options.map((option, index) => (
//           <label key={index} className="block">
//             <input
//               type="checkbox"
//               checked={answers[currentQuestionIndex].includes(option)}
//               onChange={() => handleCheckboxChange(option)}
//             />
//             {option}
//           </label>
//         ))}
//       </div>
//       <div className='text-black'>
//         {questions.map((_, index) => (
//           <button
//             key={index}
//             className={`${getStatusClass(index)} m-1 p-2`}
//             onClick={() => handleQuestionChange(index)}
//           >
//             {index + 1}
//           </button>
//         ))}
//       </div>
//       <div className='text-white'>
//         <button onClick={handlePrevClick}>Prev</button>
//         <button onClick={handleSaveClick}>Save</button>
//         <button onClick={handleNextClick}>Next</button>
//       </div>
//     </div>
//   );
// };

// export default ExamPage;

// hitun

// import React, { useState, useEffect, ChangeEvent } from 'react';

// type QuestionType = {
//   question: string;
//   options: string[];
// }[];

// const questions: QuestionType = [
//   {
//     question: 'Question 1: What is the capital of France?',
//     options: ["Paris", "London", "Berlin", "Madrid"]
//   },
//   {
//     question: 'Question 2: What is 2 + 2?',
//     options: ["4", "3", "2", "1"]
//   },
//   {
//     question: 'Question 3: Who wrote "Hamlet"?',
//     options: ["Shakespeare", "Dickens", "Austen", "Hemingway"]
//   },
//   {
//     question: 'Question 4: What is the largest planet in our Solar System?',
//     options: ["Earth", "Mars", "Jupiter", "Saturn"]
//   },
//   {
//     question: 'Question 5: What is the capital of Japan?',
//     options: ["Tokyo", "Beijing", "Seoul", "Bangkok"]
//   },
//   {
//     question: 'Question 6: Who painted the Mona Lisa?',
//     options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"]
//   },
//   {
//     question: 'Question 7: Who is known as the father of modern physics?',
//     options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Stephen Hawking"]
//   },
//   {
//     question: 'Question 8: Who wrote "To Kill a Mockingbird"?',
//     options: ["Harper Lee", "J.K. Rowling", "F. Scott Fitzgerald", "George Orwell"]
//   },
//   {
//     question: 'Question 9: What is the largest ocean on Earth?',
//     options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"]
//   },
//   {
//     question: 'Question 10: What is the largest ocean on Earth?',
//     options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"]
//   }
// ];

// enum QuestionStatus {
//   NotVisited = 'NotVisited',
//   Answered = 'Answered',
//   NotAnsweredAndReview = 'NotAnsweredAndReview',
//   AttemptedAndReview = 'AttemptedAndReview'
// }

// const ExamPage: React.FC = () => {
//   const [timeLeft, setTimeLeft] = useState<number>(3600); // 60 minutes in seconds
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
//   const [answers, setAnswers] = useState<string[][]>(new Array(questions.length).fill([]));
//   const [optionInfo,setOptionInfo]=useState<string>()
//   const [status, setStatus] = useState<QuestionStatus[]>(
//     new Array(questions.length).fill(QuestionStatus.NotVisited)
//   );

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const formatTime = (time: number) => {
//     const minutes = Math.floor(time / 60);
//     const seconds = time % 60;
//     return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
//   };

//   const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
//     const selectedOption = e.target.value;
//     const newAnswers = [...answers];
//     if (e.target.checked) {
//       newAnswers[currentQuestionIndex] = [selectedOption];
//     } else {
//       newAnswers[currentQuestionIndex] = [];
//     }
//     setAnswers(newAnswers);
//   }

//   const questionNumber=(index: number)=>{
//     setCurrentQuestionIndex(index)
//     setStatus(prevStatus => {
//       const newStatus = [...prevStatus];
//       if (answers[index].length > 1) {
//         newStatus[index] = QuestionStatus.Answered;
//       } else {
//         newStatus[index] = QuestionStatus.NotAnsweredAndReview;
//         if (answers[currentQuestionIndex].length != 0) {
//           setStatus(prevStatus => {
//             const newStatus = [...prevStatus];
//             newStatus[currentQuestionIndex] = QuestionStatus.AttemptedAndReview;
//             return newStatus;
//           });
//         }
//       }

//       return newStatus;
//     });
//   }

//   const handleSaveClick = () => {
//     setStatus(prevStatus => {
//       const newStatus = [...prevStatus];
//       if (answers[currentQuestionIndex].length > 0) {
//         newStatus[currentQuestionIndex] = QuestionStatus.Answered;
//       } else {
//         newStatus[currentQuestionIndex] = QuestionStatus.NotAnsweredAndReview;
//       }

//       return newStatus;
//     });

//     alert('Answer saved!');
//   };

//   const handleNextClick = () => {
//     if (answers[currentQuestionIndex].length === 0) {
//       setStatus(prevStatus => {
//         const newStatus = [...prevStatus];
//         newStatus[currentQuestionIndex] = QuestionStatus.NotAnsweredAndReview;
//         return newStatus;
//       });
//     }
//     if (answers[currentQuestionIndex].length != 0) {
//       setStatus(prevStatus => {
//         const newStatus = [...prevStatus];
//         newStatus[currentQuestionIndex] = QuestionStatus.AttemptedAndReview;
//         return newStatus;
//       });
//     }
//     if (currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex(prevIndex => prevIndex + 1);
//     }
//   };

//   const handlePrevClick = () => {
//     if (answers[currentQuestionIndex].length != 0) {
//       setStatus(prevStatus => {
//         const newStatus = [...prevStatus];
//         newStatus[currentQuestionIndex] = QuestionStatus.NotAnsweredAndReview;
//         return newStatus;
//       });
//     }
//     if (answers[currentQuestionIndex].length === 0) {
//       setStatus(prevStatus => {
//         const newStatus = [...prevStatus];
//         newStatus[currentQuestionIndex] = QuestionStatus.NotAnsweredAndReview;
//         return newStatus;
//       });
//     }
//     if (currentQuestionIndex > 0) {
//       setCurrentQuestionIndex(prevIndex => prevIndex - 1);
//     }
//   };

//   return (
//     <div>
//       <div className='text-white'>
//         <span>Time Left: {formatTime(timeLeft)}</span>
//       </div>
//       <div className='text-white'>
//         <p>{questions[currentQuestionIndex].question}</p>
//       </div>
//       <div className='text-white'>
//         {questions[currentQuestionIndex].options.map((option, index) => (
//           <label key={index} className="block">
//             <input
//               type="checkbox"
//               value={option}
//               checked={answers[currentQuestionIndex].includes(option)}
//               onChange={handleChange}
//             />
//             {option}
//           </label>
//         ))}
//       </div>
//       <div className='text-white'>
//         {questions.map((_, index) => (
//           <button
//             key={index}
//             className={`border-[1px] m-1 p-2 ${
//               status[index] === QuestionStatus.NotVisited? 'bg-white': status[index] === QuestionStatus.Answered? 'bg-green-400': status[index] === QuestionStatus.NotAnsweredAndReview? 'bg-blue-400': status[index] === QuestionStatus.AttemptedAndReview? 'bg-orange-400':"bg-orange-400" }`}
//             onClick={() => questionNumber(index)}
//           >
//             {index + 1}
//           </button>
//         ))}
//       </div>
//       <div className='text-white'>
//         <button onClick={handlePrevClick}>Prev</button>
//         <button onClick={handleSaveClick}>Save</button>
//         <button onClick={handleNextClick}>Next</button>
//       </div>
//     </div>
//   );
// };

// export default ExamPage;

import React, { useState, useEffect, ChangeEvent } from 'react';
import './exampage.css'
type QuestionType = {
  question: string;
  options: string[];
}[];

const questions: QuestionType = [
  {
    question: 'What is the capital of France?',
    options: ["Paris", "London", "Berlin", "Madrid"]
  },
  {
    question: 'What is 2 + 2?',
    options: ["4", "3", "2", "1"]
  },
  {
    question: 'Who wrote "Hamlet"?',
    options: ["Shakespeare", "Dickens", "Austen", "Hemingway"]
  },
  {
    question: 'What is the largest planet in our Solar System?',
    options: ["Earth", "Mars", "Jupiter", "Saturn"]
  },
  {
    question: 'What is the capital of Japan?',
    options: ["Tokyo", "Beijing", "Seoul", "Bangkok"]
  },
  {
    question: 'Who painted the Mona Lisa?',
    options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"]
  },
  {
    question: 'Who is known as the father of modern physics?',
    options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Stephen Hawking"]
  },
  {
    question: 'Who wrote "To Kill a Mockingbird"?',
    options: ["Harper Lee", "J.K. Rowling", "F. Scott Fitzgerald", "George Orwell"]
  },
  {
    question: 'What is the largest ocean on Earth?',
    options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"]
  },
  {
    question: 'What is the largest ocean on Earth?',
    options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"]
  }
];

enum QuestionStatus {
  NotVisited = 'NotVisited',
  Answered = 'Answered',
  NotAnsweredAndReview = 'NotAnsweredAndReview',
  AttemptedAndReview = 'AttemptedAndReview'
}

const ExamPage: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<number>(3600); // 60 minutes in seconds
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<string[][]>(new Array(questions.length).fill([]));
  const [optionInfo, setOptionInfo] = useState<boolean>(false)
  const [status, setStatus] = useState<QuestionStatus[]>(
    new Array(questions.length).fill(QuestionStatus.NotVisited)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedOption = e.target.value;
    const newAnswers = [...answers];
    if (e.target.checked) {
      setOptionInfo(true)
      newAnswers[currentQuestionIndex] = [selectedOption];
    } else {
      setOptionInfo(false)
      newAnswers[currentQuestionIndex] = [];
    }
    setAnswers(newAnswers);
  }

  const questionNumber = (index: number) => {
    setCurrentQuestionIndex(index)
    setStatus(prevStatus => {
      const newStatus = [...prevStatus];
      if (answers[index].length > 1) {
        newStatus[index] = QuestionStatus.Answered;
      } else {
        newStatus[index] = QuestionStatus.NotAnsweredAndReview;
        if (answers[currentQuestionIndex].length != 0) {
          setStatus(prevStatus => {
            const newStatus = [...prevStatus];
            newStatus[currentQuestionIndex] = QuestionStatus.AttemptedAndReview;
            return newStatus;
          });
        }
      }

      return newStatus;
    });
  }

  const handleSaveClick = () => {
    setStatus(prevStatus => {
      const newStatus = [...prevStatus];
      if (answers[currentQuestionIndex].length > 0) {
        newStatus[currentQuestionIndex] = QuestionStatus.Answered;
      } else {
        newStatus[currentQuestionIndex] = QuestionStatus.NotAnsweredAndReview;
      }

      return newStatus;
    });

    alert('Answer saved!');
  };

  const handleNextClick = () => {
    setStatus(prevStatus => {
      const newStatus = [...prevStatus];
      if (answers[currentQuestionIndex].length === 0) {

        newStatus[currentQuestionIndex] = QuestionStatus.NotAnsweredAndReview;
      }
      return newStatus;
    });

    console.log("check", optionInfo)
    if (optionInfo === true) {
      setStatus(prevStatus => {
        const newStatus = [...prevStatus];
        newStatus[currentQuestionIndex] = QuestionStatus.AttemptedAndReview;
        return newStatus;
      });
    }
    if (optionInfo === true) {
      setOptionInfo(false)
    }
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    }
  };

  const handlePrevClick = () => {
    if (answers[currentQuestionIndex].length < 0) {
      setStatus(prevStatus => {
        const newStatus = [...prevStatus];
        newStatus[currentQuestionIndex] = QuestionStatus.NotAnsweredAndReview;
        return newStatus;
      });
    }

    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prevIndex => prevIndex - 1);
    }
  };

  return (
    <div>
      <div className='bg-black w-[80%] m-auto'>
        <div className='flex justify-center text-center w-full h-20'>
          <h1 className='text-3xl font-bold text-gray-300 mt-3'>General Knowledge Demo Exam</h1>
          <div className='text-right relative w-[30%] mt-3'><button className='absolute py-1 bg_color px-2 rounded right-0'>Submit</button></div>
        </div>
        <div className='flex w-full'>
          <div className='w-[70%] bg-white h-[600px]'>
            <div className='text-black mx-4'>
              <p className='text-2xl mt-5 mb-5'>Question:{currentQuestionIndex + 1} :</p>
              <p className='text-2xl'>{questions[currentQuestionIndex].question}</p>
            </div>
            <div className='text-black text-xl mt-5 mx-4'>
              {questions[currentQuestionIndex].options.map((option, index) => (
                <label key={index} className="block">
                  <input
                    type="checkbox"
                    value={option}
                    checked={answers[currentQuestionIndex].includes(option)}
                    onChange={handleChange}
                    className="mt-7 mx-2"
                  />
                  {option}
                </label>
              ))}
            </div>
            <div className='bg-black h-20 w-full pt-auto text-black font-bold w-full flex justify-center justify-evenly mt-56 pt-5'>
              
                <button onClick={handlePrevClick} className="bg_color h-10 rounded px-2 w-24">Previous</button>
                <button onClick={handleSaveClick} className="bg_color h-10 rounded px-2 w-24">Save</button>
                <button onClick={handleNextClick} className="bg_color h-10 rounded px-2 w-24">Next</button>
            
            </div>
          </div>
          <div className='w-[30%] bg-gray-400 pb-10'>
            <div className='text-black mt-5 text-2xl mb-5'>
              <span>Time Left: {formatTime(timeLeft)}</span>
            </div>
            <div className='text-black felx flex-wrap'>
              {questions.map((_, index) => (
                <button
                  key={index}
                  className={`border-[1px] w-11 h-11 mx-3 mt-5 rounded ${status[index] === QuestionStatus.NotVisited ? 'bg-white' : status[index] === QuestionStatus.Answered ? 'bg-green-400' : status[index] === QuestionStatus.NotAnsweredAndReview ? 'bg-blue-400' : status[index] === QuestionStatus.AttemptedAndReview ? 'bg-orange-400' : "bg-orange-400"}`}
                  onClick={() => questionNumber(index)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            <p className='w-[70%] m-auto text-black text-xl bg_color rounded text-center font-bold mt-24 mb-5 p-3'>Overoll Summary</p>
            <div>
              <div className='flex mt-5'><p className='w-11 h-11 bg-green-400 text-center pt-2 border font-bold border-black mx-2 rounded'>0</p><span className='text-xl font-bold'>Answred</span></div>
              <div className='flex mt-5'><p className='w-11 h-11 bg-blue-400 text-center pt-2 border font-bold border-black mx-2 rounded'>0</p><span className='text-xl font-bold'>Not Answred And Review</span></div>
              <div className='flex mt-5'><p className='w-11 h-11 bg-orange-400 text-center pt-2 border font-bold border-black mx-2 rounded'>0</p><span className='text-xl font-bold'>Attempted And Review</span></div>
              <div className='flex mt-5'><p className='w-11 h-11 bg-white text-center pt-2 border font-bold border-black mx-2 rounded'>0</p><span className='text-xl font-bold'>Not Visited</span></div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default ExamPage;

