import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import CardExpense from "./pages/CardExpense/CardExpense"
import "./styles/Global.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/expense" element={<CardExpense />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
