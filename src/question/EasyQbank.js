// this file contains all the questions that will be displayed.
// in future, could we use a database for this?

const EasyQbank = [
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
// eslint-disable-next-line import/no-anonymous-default-export
export default (n = 5) => EasyQbank.sort(() => 0.5 - Math.random()).slice(0, n);
