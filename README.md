# Tech Quiz - Cypress Test Suite

## Overview
This project enhances the existing Tech Quiz application by implementing **Cypress** for both **component testing** and **end-to-end (E2E) testing**. The goal is to ensure the application's reliability and robustness through comprehensive testing.

The **Tech Quiz** app is built using the **MERN stack** (MongoDB, Express.js, React, and Node.js) and allows users to take a quiz with ten random questions and view their final score.

## Features Tested
- Component tests for the **Quiz component**
- End-to-end tests for the **Quiz workflow**

---

## User Story
> **AS** an aspiring developer  
> **I WANT** to take a tech quiz  
> **SO THAT** I can test my knowledge and improve my skills  

---

## Acceptance Criteria
- **GIVEN** I am taking a tech quiz
  - **WHEN** I click the start button
  - **THEN** the quiz starts and I am presented with a question
- **WHEN** I answer a question
  - **THEN** I am presented with another question
- **WHEN** all questions are answered
  - **THEN** the quiz is over
- **WHEN** the quiz is over
  - **THEN** I can view my score
  - **THEN** I can start a new quiz

---

## Installation & Setup

### **1. Install Cypress as a Dev Dependency**
Run the following command in the project root:
```sh
npm install cypress @types/cypress --save-dev
```

### **2. Open Cypress**
```sh
npx cypress open
```
This will create a `cypress/` folder and a `cypress.config.ts` file.

### **3. Configure Cypress**
Modify `cypress.config.ts` to support both **component** and **E2E** testing:
```ts
import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000", // Change to match your local server
    supportFile: "cypress/support/e2e.ts",
  },
  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
});
```

---

## Writing Tests

### **Component Test for Quiz Component**
Create a file: `cypress/component/Quiz.cy.ts`

```ts
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
```

### **End-to-End Test for the Quiz**
Create a file: `cypress/e2e/quiz.cy.ts`

```ts
describe("Quiz App E2E Test", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("starts a quiz and submits answers", () => {
    cy.contains("Start Quiz").click();

    cy.get('[data-testid="question"]').should("exist");

    cy.get('[data-testid="option"]').first().click();

    cy.contains("Submit").click();

    cy.contains("Your Score:").should("exist");
  });
});
```

---

## Running the Tests

### **Run Component Tests**
```sh
npx cypress run --component
```

### **Run End-to-End Tests**
```sh
npx cypress run --e2e
```

Or open Cypress UI for testing:
```sh
npx cypress open
```

---

## Conclusion
By adding Cypress tests, this project ensures that the Tech Quiz app runs reliably under various conditions. The test suite includes both **unit tests** for the Quiz component and **end-to-end tests** for the full quiz flow.

