import "./styles.css";
import { NavBar } from "./NavBar";

export default function App() {
  return (
    <div className="App">
      <h1>Hello Belle</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h3>Hello h3</h3>
      <div>This is div</div>
      {/* element */}
      <NumberButton></NumberButton>
      <NumberButton></NumberButton>
      <NumberButton></NumberButton>
      <NumberButton></NumberButton>
      <NumberButton></NumberButton>
      {/* import element from NavBer.tsx : 2 ways */}
      <NavBar></NavBar>
      <NavBar />
    </div>
    // <div></div> - error : no more than 1 parent element
    // <h1></h1> - error
  );
}

// element
function NumberButton() {
  return <button>1</button>;
}
