import React, {Component} from "react";
import ReactDOM from "react-dom";
import "./style.css";
import QuestionAPI from "./question/QuestionAPI";
import QuestionBox from './components/QuestionBox';
import LevelSelection from "./components/levelSelectionBox";
import Result from './components/ResultBox';

class Quiz extends Component {
    constructor(){
        super();
        this.state = {
            questionBank: [],
            score: 0,
            responses: 0,
            level: "",
        };
    }

    // function to get question from ./question
    getQuestions = (level) => {
            let question = QuestionAPI(level)
            return question;
    };

    selectedLevel = (level) => {
        this.setState({
            level: level,
            questionBank: this.getQuestions(level),
        });
    };

    // set state back to default and call function
    playAgain = () => {
        // function for playing  again
        this.setState({
          score: 0,
          level: "",
          responses: 0,
        });
      };

    //Function to compute scores
    computeAnswer = (answer, correctAns) => {
        if (answer === correctAns) {
            this.setState({
                score: this.state.score + 1,
            });
        }
        this.setState({
            responses: this.state.responses < 5 ? this.state.responses +1 : 5,
        });
    };

    // Function to get the question
    componentDidMount() {
        this.getQuestions();
    }

    render(){
        return (
        <div className="container">
            <div className="title">
                React Quiz App
            </div>

            {this.state.level !== "" 
                ? (
                <div className="levelLable">
                    <b>Level :</b>
                    {this.state.level}
                    <div className="timer">{this.state.count}</div>
                    <hr />
                </div>
                ) 
                : null}

            {this.state.level === "" ? (
            <LevelSelection selectedLevel={this.selectedLevel} />
            ) : null}

            {this.state.level !== "" &&
            this.state.questionBank.length > 0 &&
            this.state.responses < 5 &&
            this.state.questionBank.map(
                ({question, answers, correct, questionId}) => (
                    <QuestionBox 
                        question={question} 
                        options={answers} 
                        key={questionId} 
                        selected={answer => this.computeAnswer(answer, correct)}
                    />
                    )
                    )}

            {
                this.state.responses === 5
                    ? (<Result score={this.state.score}
                    playAgain={this.playAgain}/>)
                    :null
            }

        </div>);
    }

}

ReactDOM.render(<Quiz/>, document.getElementById("root"));