import DefaultPage from "components/DefaultPage";
import Footer from "components/Footer";
import Post from "components/Post";
import ScrollToTop from "components/ScrollToTop";
import NotFound from "pages/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route index element={<Home />} />
          <Route path="sobre-mim" element={<AboutMe />} />
        </Route>

        <Route path="posts/:id" element={<Post />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
