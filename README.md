# Dev Stack - Tech Stack Builder

A responsive web application where developers can explore technologies and build their ideal development stack.

## Technologies Used
- React.js, TypeScript, Tailwind CSS, DaisyUI, Vite, React `use()` Hook & Suspense.

## Features
1. Interactive Stack Builder (Add/Remove technologies).
2. Dynamic JSON data fetching with Loading State.
3. Fully responsive design for mobile, tablet, and desktop.

---

## React Questions & Answers

**i. What is JSX, and why is it used in React?**
JSX is a syntax extension that allows writing HTML-like code inside JavaScript. It makes UI code easier to read and visually structure components.

**ii. What is the difference between props and state?**
Props are read-only data passed from a parent to a child. State is data managed inside a component that can change over time.

**iii. What does the `useState` hook do, and where did you use it?**
It lets components have local state. I used it in `AvailableTechnologies.tsx` to store the `stack` array of selected technologies.

**iv. What does the `useEffect` hook do, and why did you not need it to load the JSON data?**
`useEffect` handles side effects like fetching data. I didn't need it because I used the `use()` hook with `<Suspense>` to handle the data fetching promise automatically.

**v. Why does every item in a `.map()` list need a unique `key` prop?**
The `key` gives React a stable identity for each item, allowing it to efficiently update the DOM and prevent rendering bugs. I used `tech.name` as the key.

**vi. What is conditional rendering? Show one place you used it.**
It means rendering UI based on a condition. I used it in the sidebar: if the `stack.length === 0`, it shows an "empty stack" message. Otherwise, it shows the list.

**vii. How do you pass data from a parent to a child component, and how does a child send something back to the parent?**
Parents pass data down via **props**. Children send data up by calling **callback functions** that were passed to them as props (e.g., calling `addToStack` when a button is clicked).