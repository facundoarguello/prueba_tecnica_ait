import Header from "./components/Header"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListArticles from "./components/ListArticles";
import Home from "./components/Home";
import AddArticles  from "./components/AddArticles";

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
