import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainpage from "./pages/MainPage";
import Layout from "./Layout";
import Selectpage from "./pages/SelectPage";
import GuessNumber from "./pages/GuessNumber";
import ResultPage from "./pages/ResultPage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-center" />
      <Routes>
        {/* 가운데 정렬 레이아웃 적용 */}
        <Route element={<Layout />}>
          <Route path="/" element={<Mainpage />} />
          <Route path="/select" element={<Selectpage />} />
          <Route path="/guessnumber/result" element={<ResultPage />} />
        </Route>

        {/* 레이아웃 적용하지 않는 페이지 */}
        <Route path="/guessnumber" element={<GuessNumber />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
