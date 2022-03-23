import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Form, Question, Blog, BlogEntry } from "./pages";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <BrowserRouter>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/faq" element={<Question />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogEntry />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
