export default [
  {
    id: "q1",
    text: "What is React?",
    answers: [
      "A JavaScript library for building user interfaces",
      "A framework for server-side rendering",
      "A programming language",
      "A database",
    ],
    explanations: {
      correct:
        "React is a JavaScript library used for building user interfaces, especially for single-page applications.",
      incorrect: [
        "A framework for server-side rendering: This is not correct. React is primarily for building user interfaces, not for server-side rendering (though it can be used in SSR with additional tools).",
        "A programming language: React is not a programming language. It's a JavaScript library.",
        "A database: React is not a database; it's a UI library.",
      ],
    },
  },
  {
    id: "q2",
    text: "What is JSX?",
    answers: [
      "A syntax extension for JavaScript that looks like XML",
      "A separate programming language",
      "A built-in function in React",
      "A tool for managing state",
    ],
    explanations: {
      correct:
        "JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files.",
      incorrect: [
        "A separate programming language: JSX is not a separate language. It's an extension of JavaScript.",
        "A built-in function in React: JSX is not a function, it's a syntax extension.",
        "A tool for managing state: JSX has nothing to do with managing state; it's for writing UI components.",
      ],
    },
  },
  {
    id: "q3",
    text: "Which hook is used to manage state in a functional component?",
    answers: ["useState", "useEffect", "useReducer", "useContext"],
    explanations: {
      correct:
        "useState is the hook used to manage state in a functional component in React.",
      incorrect: [
        "useEffect: useEffect is used for side effects, not for managing state.",
        "useReducer: useReducer is an alternative to useState but for more complex state management.",
        "useContext: useContext is used for accessing context, not for managing local state.",
      ],
    },
  },
  {
    id: "q4",
    text: "What is the purpose of useEffect in React?",
    answers: [
      "To perform side effects in a functional component",
      "To manage component state",
      "To create a new component",
      "To update the UI directly",
    ],
    explanations: {
      correct:
        "useEffect is used to perform side effects in functional components, such as fetching data or updating the DOM.",
      incorrect: [
        "To manage component state: useEffect is not for managing state; useState or useReducer handle state management.",
        "To create a new component: useEffect does not create components, it handles side effects in already existing ones.",
        "To update the UI directly: useEffect doesn't directly manipulate the UI; it manages side effects after the render.",
      ],
    },
  },
  {
    id: "q5",
    text: "What is the virtual DOM in React?",
    answers: [
      "A lightweight copy of the actual DOM that React uses to optimize rendering",
      "A completely different version of the real DOM",
      "A database where components are stored",
      "A library for managing routes",
    ],
    explanations: {
      correct:
        "The virtual DOM is a lightweight copy of the actual DOM. React uses it to optimize rendering performance by comparing the virtual DOM with the real DOM.",
      incorrect: [
        "A completely different version of the real DOM: The virtual DOM is not a separate DOM, but a lightweight copy.",
        "A database where components are stored: The virtual DOM is not a database; it's part of React's rendering system.",
        "A library for managing routes: This is not true. React Router is used for routing, not the virtual DOM.",
      ],
    },
  },
  {
    id: "q6",
    text: "Which method is used to pass data from a parent component to a child component?",
    answers: ["Props", "State", "Context API", "Redux"],
    explanations: {
      correct:
        "Props are used to pass data from a parent component to a child component in React.",
      incorrect: [
        "State: State is used for managing data within a component, not for passing data between components.",
        "Context API: The Context API is used for global state management, not for passing data from parent to child.",
        "Redux: Redux is a state management library, and although it can be used to share data, it is not specifically for passing data from parent to child.",
      ],
    },
  },
  {
    id: "q7",
    text: "What is React Router used for?",
    answers: [
      "Handling navigation and routing in a React application",
      "Managing global state",
      "Fetching data from an API",
      "Optimizing component rendering",
    ],
    explanations: {
      correct:
        "React Router is used for handling navigation and routing in a React application.",
      incorrect: [
        "Managing global state: React Router doesn't handle global state management, for that, you can use tools like Redux or the Context API.",
        "Fetching data from an API: React Router is for navigation, not for fetching data.",
        "Optimizing component rendering: React Router does not optimize rendering. It's specifically for routing.",
      ],
    },
  },
  {
    id: "q8",
    text: "Which of the following is true about React components?",
    answers: [
      "Components can be functional or class-based",
      "Components cannot have state",
      "Components must always be class-based",
      "Components can only be used once in an application",
    ],
    explanations: {
      correct:
        "Components in React can be either functional or class-based, and both can have state.",
      incorrect: [
        "Components cannot have state: Both functional and class-based components can have state.",
        "Components must always be class-based: React supports both functional and class-based components.",
        "Components can only be used once in an application: Components can be reused multiple times in an application.",
      ],
    },
  },
  {
    id: "q9",
    text: "What is the Context API used for?",
    answers: [
      "To manage global state and avoid prop drilling",
      "To create new components",
      "To fetch data from an API",
      "To optimize rendering performance",
    ],
    explanations: {
      correct:
        "The Context API is used for managing global state and avoiding prop drilling by allowing data to be passed directly to components in the component tree.",
      incorrect: [
        "To create new components: The Context API is not for creating components; it manages global state.",
        "To fetch data from an API: The Context API does not fetch data. It is used to manage and share state.",
        "To optimize rendering performance: While Context can improve code structure, it is not specifically designed to optimize rendering.",
      ],
    },
  },
  {
    id: "q10",
    text: "What does the key prop do in a list of elements?",
    answers: [
      "Helps React identify which items have changed, are added, or removed",
      "Defines a unique ID for styling elements",
      "Adds event listeners to each list item",
      "Determines the order of rendering for elements",
    ],
    explanations: {
      correct:
        "The key prop helps React identify which items in a list have changed, been added, or removed, which helps with efficient re-rendering.",
      incorrect: [
        "Defines a unique ID for styling elements: The key is not for styling but for identifying elements in a list.",
        "Adds event listeners to each list item: The key does not handle events; it only helps React identify items in a list.",
        "Determines the order of rendering for elements: The key does not affect the rendering order, it helps React identify changes in the list.",
      ],
    },
  },
];
