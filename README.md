# 📘 ReactJS Framework – Complete Beginner Guide

This README covers essential ReactJS concepts to help you understand how to build dynamic and reusable user interfaces efficiently.

---

## 🔹 What is ReactJS?

ReactJS is an open-source JavaScript library developed by Facebook for building fast, interactive user interfaces, especially single-page applications. It uses a component-based architecture and a virtual DOM for efficient updates.

---

## 🔹 Why Use ReactJS?

- **Component-Based Architecture**: Build encapsulated components that manage their own state.
- **Performance**: Efficient updates via Virtual DOM.
- **Reusable Code**: Write once and reuse across the app.
- **Unidirectional Data Flow**: Makes debugging easier.
- **Rich Ecosystem**: Tools like React Router, Redux, and Hooks enhance functionality.

---

### 🔹 Components in ReactJS

Components are the building blocks of any React application.

### Example:
```jsx
function Welcome() {
  return <h1>Welcome to React!</h1>;
}
```
---

##  🔹 Handle Checkboxes in ReactJS
Use useState to control checkbox state.

Example:
```jsx

const [isChecked, setIsChecked] = useState(false);

<input 
  type="checkbox" 
  checked={isChecked} 
  onChange={(e) => setIsChecked(e.target.checked)} 
/>
```
---

##  🔹 Handle Radio Buttons in ReactJS
Track selected radio button using state.

Example:
```jsx

const [selectedOption, setSelectedOption] = useState('');

<input 
  type="radio" 
  value="option1" 
  checked={selectedOption === 'option1'} 
  onChange={(e) => setSelectedOption(e.target.value)} 
/>
```
---


##  🔹 Loop in JSX
Use .map() to iterate and render lists.

Example:
```jsx

const fruits = ['Apple', 'Banana', 'Mango'];

<ul>
  {fruits.map((fruit, index) => <li key={index}>{fruit}</li>)}
</ul>
```
---


## 🔹 Props in ReactJS
Props are used to pass data from parent to child components.

Example:
```jsx

function Greet({ name }) {
  return <h2>Hello, {name}!</h2>;
}

// Usage
<Greet name="Atharv" />
```
---

## 🔹 Reuse Components in ReactJS
Components can be reused multiple times with different data.

Example:
```jsx

<Greet name="Alice" />
<Greet name="Bob" />
```
---

## 🔹 Array in ReactJS
Arrays are often used to store and render lists of items.

Example:
```jsx

const cities = ['Pune', 'Mumbai', 'Delhi'];

{cities.map((city, i) => <p key={i}>{city}</p>)}
```
---

## 🔹 Array Nested Looping in ReactJS
Use nested .map() to render sub-arrays.

Example:
```jsx

const data = [
  { category: 'Fruits', items: ['Apple', 'Banana'] },
  { category: 'Vegetables', items: ['Carrot', 'Potato'] }
];

{data.map((group, i) => (
  <div key={i}>
    <h3>{group.category}</h3>
    <ul>
      {group.items.map((item, j) => <li key={j}>{item}</li>)}
    </ul>
  </div>
))}
```
---

##  🔹 useState Hook in ReactJS
useState is a Hook that lets you add state to functional components.

Example:
```jsx

const [count, setCount] = useState(0);

<button onClick={() => setCount(count + 1)}>Click {count}</button>
```
---

## 🔹 Handle Props with Side Effect
React to prop changes using useEffect.

Example:
```jsx

function Message({ text }) {
  useEffect(() => {
    console.log("Text changed:", text);
  }, [text]);

  return <p>{text}</p>;
}
```
---

## 🔹 useEffect Hook for Lifecycle in ReactJS
useEffect mimics lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount.

Example:
```jsx

useEffect(() => {
  console.log("Component mounted");

  return () => {
    console.log("Component unmounted");
  };
}, []);
```
---

##  🔹 Uncontrolled Component in ReactJS
An uncontrolled component uses refs instead of state to access form values.

Example:
```jsx

const inputRef = useRef();

function handleSubmit() {
  alert(inputRef.current.value);
}

<input type="text" ref={inputRef} />
<button onClick={handleSubmit}>Submit</button>
```
---

## 🔹 Forward Ref in ReactJS
Forward refs allow parent components to directly reference a child component's DOM node.

Example:
```jsx

const InputField = forwardRef((props, ref) => (
  <input type="text" ref={ref} />
));

// Usage
const inputRef = useRef();
<InputField ref={inputRef} />
```
---

## 🔹 Pass Function in Component
Functions can be passed as props to handle actions in child components.

Example:
```jsx

function Button({ onClick }) {
  return <button onClick={onClick}>Click Me</button>;
}

<Button onClick={() => alert("Button clicked!")} />
```
---


## What is ReactJS? :- JavaScript library for building UIs
## Why ReactJS? :- Reusable, efficient, scalable
## Components:- Reusable building blocks
## useState:- 	Manage component state
## useEffect:-	Handle side effects and lifecycle
## Props:-	Pass data to child components
## Forward Ref:- 	Expose child’s DOM node to parent
## Uncontrolled Component:- 	Access DOM directly using refs
## Reuse Components:- 	Use same logic with different props
## Handle Checkboxes:-	Controlled input example
## Handle Radio Buttons:-	Single-select input with state
## Loops in JSX:-	Render lists using map()
## Nested Loops	Map:- inside map for complex lists
## Pass Function:-	Trigger parent logic from child
## Handle Props with Effect:-	React to prop changes using useEffect 
