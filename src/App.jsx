import { HashRouter, Routes, Route } from "react-router-dom";
import { Home, Form, Question, Blog, BlogEntry } from "./pages";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/faq" element={<Question />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogEntry />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
