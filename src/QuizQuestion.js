import React, { Component } from "react";
import QuizQuestionButton from "./QuizQuestionButton.js";

class QuizQuestion extends Component {
  render() {
    return (
      <main>
        <section>
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
            {this.props.quiz_question.answer_options.map(
              (answer_option, index) => {
                return (
                  <QuizQuestionButton clickHandler={this.handleClick.bind(this)} button_text={answer_option} key={index} />
                );
              }
            )}
          </ul>
        </section>
      </main>
    );
  }

  handleClick (buttonText) {
      if (buttonText === this.props.answer_option)
      {
        this.props.showNextQuestionHandler()
      }
  }
}

export default QuizQuestion;
