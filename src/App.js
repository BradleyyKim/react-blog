import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/home";
import PostView from "./pages/postView";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post-view/:id" element={<PostView />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
