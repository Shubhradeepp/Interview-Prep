//*THE PROBLEM STATEMENT
//Web Development Challenges
• Manipulating DOM
• Updating State and UI

//Lack of Reusability
• Unclear Way for building components
• No consistency
• Harder to maintain clear code

//Complex Data Bindings
• Unclear Way for building components

//*WHY REACT? => it's react on changes

//Declarative UI
• Manipulating DOM
• Updating State and Ul without refreshing the page 

//Components Based Architecture
• Reusable Components
• Easier to manage code
 
//Virtual DOM
• Updates Actual Elements of DOM

//Unidirectional Data Flow
• One direction flow with Props


//*THE RULES OF JSX

// Single Root Element (Wrapper)
// Each element must be closed with closing tags
// Attribute className instead of class and using camelCase attributes
// Using inline CSS styles
// Expressions for dynamic rendering
// Use conditional operators instead of conditional statements.
// Self closing tags must be closed


//*THE PROPS
//Props are used for one-way communication to different components

• parent(container) component sends data in the form of props.
• The child component can use that data via props

//THE PROPS AND CHILDREN
Passing components as props to components
• A Component can send JSX as Props and a Children can use it
• You can have a layout structure with it.


THE EVENTS

Events are used for user interaction
• Events are subscribed and gets fired when specified user's interaction.
• Can update anything

STATE:Current data for a component is state.

increment
const increment = ()=>{
      setCount((count)=> count+1)
      setCount((prev)=> prev+2)
    }

//*THE HOOKS => Hooks are special functions that help manage state and components efficiently

• A Hook is a special function that lets you “hook into” React features.


//*THE VIRTUAL DOM

// The lightweight Copy of Real DOM, Managed By React To Identify Updates

// • Updates the Component to optimize state updates and performance.
// • It updates only those components where the state has changed.
 
//* RECONCILLATION
// Algorithm for changing DOM

// • Compares the new Virtual DOM Tree with previous one and updates the state.



//*useState Hook

//*why we need useState Hook instead of Var or let ??

let count = 0;

const increment = () => {
  count += 1; // React does not detect this change
};

//var or let: Changes to var or let variables do not inform React to re-render the component. Even if you update the variable, the UI remains the same because React is unaware of the change.

//Local variables don't persist between renders. When React renders this component a second time, it renders it from scratch—it doesn't consider any changes to the local variables.


const [var, setVar] = useState(initialValue);

var: name of the state variable
setVar: function to manage and modify the state variable
initialValue: the first value to initialize the variable


// A state of a component is a variable that holds some information that may change over the lifetime of the  component

// Whenever the value of the state changes, the component re-renders itself with updated

// Every state store their value locally


// HOOKS
//** */ useEffect
// Enables performing side-effects [operations that are not directly related to rendering components but imp for functionalities, could be data fetching, subscriptions for any event, or manually changing the DOM]in components


Syntax: useEffect(() => { /* side-effects */ }, [dependencies])

// useEffect only run after the component is being rendered

//*Render Sequence =>
// Render Component
// UseEffect Ran {if dependency provided}
// Render component
// Cleanup [Unmounting] // by using return we can have cleanup funx
// UseEffect Ran



// LIFECYCLE METHODS 
// • Mount — After the component is rendered to DOM.
// • Update — After component updates.
// • Unmount — Just before component is removed from DOM.

Screen => Components=> Props
props (Object Destructure)
conditional Rendering
Mapping




//Render Sequence =>
my Component useEffect
App useEffect
My Component unmount
App unmount
my Component useEffect
App useEffect

My Component unmount 0
My Component useEffect 1
My Component unmount 1
My Component useEffect 2
My Component unmount 2
My Component useEffect 3
useEffect 3


*** Loading bar


HOOKS:
useRef
Allows to access DOM without triggering re-render
• Used for communication with DOM properties.
• An Uncontrolled Element By React
• Have a current property which accesses DOM methods and properties.

  