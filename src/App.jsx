import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useAuth } from "@clerk/clerk-react";

function App() {
  const { isLoaded, isSignedIn } = useAuth();

  return (
    <>
      <div className="card">
        <p>{`Is Clerk loaded? ${isLoaded ? "Yes" : "No"}`}</p>
        <p>{`Are you signed in? ${isSignedIn ? "Yes" : "No"}`}</p>
      </div>
    </>
  );
}

export default App;
