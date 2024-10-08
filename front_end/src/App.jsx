import Header from "./components/common/Header"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListArticles from "./components/articles/ListArticles"
import Home from "./pages/Home";
import AddArticles  from "./components/articles/AddArticles";

function App() {

  return (
    <Router>
      <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/list" element={<ListArticles />} />
          <Route exact path="/Add" element={<AddArticles />} />
        </Routes>
    </Router>
  )
}

export default App
