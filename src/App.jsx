import React from "react";
import { Route, Routes } from "react-router";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import SeoManager from "./components/SeoManager";
import Blog from "./routes/Blog";
import BlogDetail from "./routes/BlogDetail";
import BookSession from "./routes/BookSession";

function App() {
  return (
    <main>
      <SeoManager />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blogs/:slug" element={<BlogDetail />} />
        <Route path="/booking" element={<BookSession />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
