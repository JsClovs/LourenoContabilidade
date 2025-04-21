import Home from "./pages/home";
import Blog from "./pages/blog";

import NavBar from "./components/navbar";
import Footer from "./components/footer";

import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function Router() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
