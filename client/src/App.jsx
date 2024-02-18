import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="body-container bg-gray-950">
      <Header />
      <main className="bg-gray-950">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
