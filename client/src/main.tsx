/**
 * main.tsx - Application Entry Point
 *
 * Bootstraps the React application by mounting the root App component
 * into the #root DOM element. Also imports the global CSS stylesheet.
 */

import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

/* Mount the React app to the DOM */
createRoot(document.getElementById("root")!).render(<App />);
