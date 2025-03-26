import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./Components/Body";
import About from "./Components/About";
import Team from "./Components/Team";
import Login from "./Components/Login";
import ProtectedRoute from "./Components/ProtectedRoute";
import { useState } from "react";
import Accordion from "./Components/Accordion";

function App() {
  const [lang, setLang] = useState("en");
  return (
    <div>
      <header className="bg-gray-400 py-5 text-xl font-bold text-center flex justify-items-end gap-96">
        HELLO WORD
        <nav className="m-2 px-20 w-[600px] flex justify-between text-lg">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/team">Team</a>
          <a href="/accordion">Accordion</a>
          <a href="/login">Login</a>
        </nav>
        <select value={lang} onChange={(e)=> setLang(e.target.value)}>
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="sp">Spanish</option>
          <option value="ru">Russian</option>
        </select>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}></Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/about" element={<About lang={lang} />}></Route>
          </Route>

          <Route path="/team" element={<Team />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/accordion" element={<Accordion />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
