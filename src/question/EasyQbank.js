// this file contains all the questions that will be displayed.
// in future, could we use a database for this?

const qBank = [
    {
        question: "Who founded Apple Computers?",
        answers: ["Steve Jobs", "Bill Gates", "Elon Musk", "Jeff Bezos"],
        correct: "Steve Jobs",
        questionId: "0001"
    },
    {
        question: "Who founded Microsoft?",
        answers: ["Steve Jobs", "Bill Gates", "Elon Musk", "Jeff Bezos"],
        correct: "Bill Gates",
        questionId: "0002"
    },
];

// n = 2 to export 2 random questions
export default (n = 2) => Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));