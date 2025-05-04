import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/1Home.jsx";
import Add from "./components/3Add.jsx";
import Edit from "./components/5Edit.jsx";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/add" element={<Add />}></Route>
        <Route path="/edit/:id" element={<Edit />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
