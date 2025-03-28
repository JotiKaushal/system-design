import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./Components/Body";
import About from "./Components/About";
import Team from "./Components/Team";
import Login from "./Components/Login";
import ProtectedRoute from "./Components/ProtectedRoute";
import { useState } from "react";
import Accordion from "./Components/Accordion";
import Comments from "./Components/comments/Comments";
import ImageSlider from "./Components/imageSlider/ImageSlider";
import Pagination from "./Components/Pagination/Pagination";
import LiveChat from "./Components/liveChat/LiveChat";

function App() {
  const [lang, setLang] = useState("en");
  return (
    <div>
      <header className="bg-gray-400 py-5 text-xl font-bold text-center flex justify-items-end gap-96">
      <a href="/">My Application</a>
        <nav className="m-2 px-10 w-[800px] flex justify-between text-lg">
          <a href="/about">About</a>
          <a href="/team">Team</a>
          <a href="/accordion">Accordion</a>
          <a href="/comments">Comments</a>
          <a href="/imageSlider">Image Slider</a>
          <a href="/pagination">Pagination</a>
          <a href="/liveChat">Live Chat</a>
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
          <Route path="/comments" element={<Comments />}></Route>
          <Route path="/imageSlider" element={<ImageSlider />}></Route>
          <Route path="/pagination" element={<Pagination />}></Route>
          <Route path="/liveChat" element={<LiveChat />}></Route>
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
