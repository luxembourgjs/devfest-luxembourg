import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./App"
import ComingSoon from "./ComingSoon"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/draft" element={<App />} />
        <Route path="/draft/*" element={<App />} />
        <Route path="/" element={<ComingSoon />} />
        <Route path="*" element={<ComingSoon />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
