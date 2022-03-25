// Desde aqui importamos lo que usaremos del react router
import { HashRouter, Routes, Route } from "react-router-dom";
// Aqui importamos la paginas que tendran nuestro sitio web
import { Home, Question, Blog, BlogEntry } from "./pages";

//En este caso estoy usando el Hash router para no tener problemas con el Deploy
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<Question />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogEntry />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
