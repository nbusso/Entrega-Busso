import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBtiHWrVxucXk30pX6A3ONRPZad2r9yT4M",
  authDomain: "busso-ecommerce.firebaseapp.com",
  projectId: "busso-ecommerce",
  storageBucket: "busso-ecommerce.appspot.com",
  messagingSenderId: "1063351134743",
  appId: "1:1063351134743:web:b772895c20d58d3c5c4a52",
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
