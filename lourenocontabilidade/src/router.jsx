import Home from "./pages/home";
import Blog from "./pages/blog";
import BlogPostPage from "./pages/BlogPostPage";
import About from "./pages/About";

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

        <Route path="/About" element={<About />} />

        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/posts/:slug" element={<BlogPostPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
