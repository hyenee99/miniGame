import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainpage from "./pages/MainPage";
import Layout from "./Layout";
import Selectpage from "./pages/SelectPage";
import GuessNumber from "./pages/GuessNumber";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/select" element={<Selectpage />} />
          <Route path="/guessnumber" element={<GuessNumber />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
