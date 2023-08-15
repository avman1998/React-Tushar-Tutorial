import { useState } from "react";
function Toggle() {
  const [isSignedIn, setIsSignedIn] = useState(true);

  const toggle = () => {
    setIsSignedIn((prev) => !prev);
  };
  console.log("isSignedIn Value", isSignedIn);
  return (
    <>
      <button onClick={toggle}>{isSignedIn ? "Sign Out" : "Sign In"}</button>
    </>
  );
}
export default Toggle;

// Create a button and btn text-> Click Me!!
// when button is clicked it should calculate the total count and display on screen.
