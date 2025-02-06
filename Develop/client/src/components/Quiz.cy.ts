import React from "react";
import Quiz from "../../src/components/Quiz";
import { mount } from "cypress/react";

describe("Quiz Component", () => {
  it("renders quiz questions", () => {
    const questions = [
      { question: "What is 2 + 2?", options: ["3", "4", "5"], correctAnswer: "4" },
    ];
    
    mount(<Quiz questions={questions} />);

    cy.contains("What is 2 + 2?").should("exist");
  });
});
