import { Route, Routes } from "react-router-dom";
import StartPage from "./pages/start/StartPage";
import ReviewPage from "./pages/review/ReviewPage";
import GuidePage from "./pages/guide/GuidePage";
import AboutPage from "./pages/about/AboutPage";
function App() {
 
  return (
    <Routes>

      <Route path="/"
      element={<StartPage />} />
      <Route path="/review"
      element={<ReviewPage />} />
      <Route path="/guide"
      element={<GuidePage />} />
      <Route path="/about"
      element={<AboutPage />} />
    </Routes>
  );
}

export default App;
