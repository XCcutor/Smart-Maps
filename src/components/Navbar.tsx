import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";

function Navbar() {
  const handleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();

      const result = await signInWithPopup(auth, provider);

      console.log("Logged in user:", result.user);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">SmartMaps</div>

      <div className="nav-links">
        <button>Explore</button>
        <button>Saved</button>
        <button onClick={handleLogin}>Login with Google</button>
      </div>
    </nav>
  );
}

export default Navbar;