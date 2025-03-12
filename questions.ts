export default [
  {
    id: "q1",
    text: "What is React?",
    answers: [
      {
        answer: "A JavaScript library for building user interfaces",
        explanation:
          "React is a JavaScript library used for building user interfaces, especially for single-page applications.",
      },
      {
        answer: "A framework for server-side rendering",
        explanation:
          "This is incorrect. React is a library, not a full framework.",
      },
      {
        answer: "A programming language",
        explanation:
          "This is incorrect. React is not a programming language; it is a JavaScript library.",
      },
      {
        answer: "A database",
        explanation:
          "This is incorrect. React is not a database, it's a library for building UI.",
      },
    ],
  },
  {
    id: "q2",
    text: "What is JSX?",
    answers: [
      {
        answer: "A syntax extension for JavaScript that looks like XML",
        explanation:
          "Correct! JSX allows us to write HTML-like syntax directly in JavaScript code.",
      },
      {
        answer: "A separate programming language",
        explanation:
          "This is incorrect. JSX is not a separate language; it is a syntax extension for JavaScript.",
      },
      {
        answer: "A built-in function in React",
        explanation:
          "This is incorrect. JSX is not a function; it is a syntax used in React.",
      },
      {
        answer: "A tool for managing state",
        explanation:
          "This is incorrect. JSX is used for UI components, not for managing state.",
      },
    ],
  },
  {
    id: "q3",
    text: "Which hook is used to manage state in a functional component?",
    answers: [
      {
        answer: "useState",
        explanation:
          "Correct! useState is the hook used to manage state in functional components.",
      },
      {
        answer: "useEffect",
        explanation:
          "This is incorrect. useEffect is used for performing side effects in functional components.",
      },
      {
        answer: "useReducer",
        explanation:
          "This is incorrect. useReducer is used for more complex state management, typically when state depends on previous state.",
      },
      {
        answer: "useContext",
        explanation:
          "This is incorrect. useContext is used to consume context in a component, not for managing state.",
      },
    ],
  },
  {
    id: "q4",
    text: "What is the purpose of useEffect in React?",
    answers: [
      {
        answer: "To perform side effects in a functional component",
        explanation:
          "Correct! useEffect is used to perform side effects like data fetching or DOM manipulation in functional components.",
      },
      {
        answer: "To manage component state",
        explanation:
          "This is incorrect. useState is used to manage state, while useEffect is for side effects.",
      },
      {
        answer: "To create a new component",
        explanation:
          "This is incorrect. useEffect doesn't create components, it manages side effects in existing components.",
      },
      {
        answer: "To update the UI directly",
        explanation:
          "This is incorrect. useEffect does not directly update the UI; it runs after render and can trigger changes.",
      },
    ],
  },
  {
    id: "q5",
    text: "What is the virtual DOM in React?",
    answers: [
      {
        answer:
          "A lightweight copy of the actual DOM that React uses to optimize rendering",
        explanation:
          "Correct! The virtual DOM helps React optimize performance by reducing direct manipulation of the actual DOM.",
      },
      {
        answer: "A completely different version of the real DOM",
        explanation:
          "This is incorrect. The virtual DOM is a lightweight copy of the real DOM, not a completely different version.",
      },
      {
        answer: "A database where components are stored",
        explanation:
          "This is incorrect. The virtual DOM is not a database; it is a representation of the UI that React uses to efficiently update the actual DOM.",
      },
      {
        answer: "A library for managing routes",
        explanation:
          "This is incorrect. The virtual DOM is not related to routing; it's a performance optimization mechanism.",
      },
    ],
  },
  {
    id: "q6",
    text: "Which method is used to pass data from a parent component to a child component?",
    answers: [
      {
        answer: "Props",
        explanation:
          "Correct! Props are used to pass data from a parent component to a child component in React.",
      },
      {
        answer: "State",
        explanation:
          "This is incorrect. State is local to a component and cannot be directly passed between components like props.",
      },
      {
        answer: "Context API",
        explanation:
          "This is incorrect. The Context API is used for passing data through the component tree, but props are still the primary way to pass data between parent and child.",
      },
      {
        answer: "Redux",
        explanation:
          "This is incorrect. Redux is a state management library for managing global state, not for passing data between parent and child.",
      },
    ],
  },
  {
    id: "q7",
    text: "What is React Router used for?",
    answers: [
      {
        answer: "Handling navigation and routing in a React application",
        explanation:
          "Correct! React Router is used for handling navigation and routing between different pages or views in a React application.",
      },
      {
        answer: "Managing global state",
        explanation:
          "This is incorrect. React Router is not for state management. Redux or Context API is used for managing global state.",
      },
      {
        answer: "Fetching data from an API",
        explanation:
          "This is incorrect. React Router is for routing, not for data fetching. Data fetching is typically done with fetch or axios.",
      },
      {
        answer: "Optimizing component rendering",
        explanation:
          "This is incorrect. React Router doesn't optimize rendering. It handles navigation between views.",
      },
    ],
  },
  {
    id: "q8",
    text: "Which of the following is true about React components?",
    answers: [
      {
        answer: "Components can be functional or class-based",
        explanation:
          "Correct! React components can either be functional or class-based, though functional components are now more commonly used.",
      },
      {
        answer: "Components cannot have state",
        explanation:
          "This is incorrect. Both functional and class components can have state in React.",
      },
      {
        answer: "Components must always be class-based",
        explanation:
          "This is incorrect. Functional components are now preferred in React.",
      },
      {
        answer: "Components can only be used once in an application",
        explanation:
          "This is incorrect. Components can be reused multiple times within an application.",
      },
    ],
  },
  {
    id: "q9",
    text: "What is the Context API used for?",
    answers: [
      {
        answer: "To manage global state and avoid prop drilling",
        explanation:
          "Correct! The Context API allows you to share values like global state across all levels of your component tree.",
      },
      {
        answer: "To create new components",
        explanation:
          "This is incorrect. The Context API doesn't create components; it helps manage and share data across components.",
      },
      {
        answer: "To fetch data from an API",
        explanation:
          "This is incorrect. The Context API is for managing state, not for fetching data.",
      },
      {
        answer: "To optimize rendering performance",
        explanation:
          "This is incorrect. The Context API helps share state but doesn't directly optimize rendering performance.",
      },
    ],
  },
  {
    id: "q10",
    text: "What does the key prop do in a list of elements?",
    answers: [
      {
        answer:
          "Helps React identify which items have changed, are added, or removed",
        explanation:
          "Correct! The key prop helps React efficiently update and re-render items in a list.",
      },
      {
        answer: "Defines a unique ID for styling elements",
        explanation:
          "This is incorrect. The key prop is not used for styling. It's used for identifying elements in a list during rendering.",
      },
      {
        answer: "Adds event listeners to each list item",
        explanation:
          "This is incorrect. The key prop doesn't add event listeners, it's used for tracking list items in React's reconciliation process.",
      },
      {
        answer: "Determines the order of rendering for elements",
        explanation:
          "This is incorrect. The key prop is used for identifying items, but it doesn't directly affect the order of rendering.",
      },
    ],
  },
];
