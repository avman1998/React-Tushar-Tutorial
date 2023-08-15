import "./App.css";
import { useState } from "react";

function Profile() {
  //user defined component or custom component
  //JS CODE HERE
  const [count, setCount] = useState(0);

  console.log("Aman");
  console.log(1 + 1);

  return (
    <>
      <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>

        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <br />
        <h1>{count}</h1>
        <br />
        <p>Status: {count === 0 ? "Rest" : "Active"}</p>
      </div>
    </>
  );
  //JSX=> Javascript XML=> HTML like syntax
}

export default Profile;
