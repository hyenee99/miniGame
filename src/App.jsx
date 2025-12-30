import { BrowserRouter,Routes,Route}  from "react-router-dom";
import Mainpage from "./pages/MainPage";
import Layout from "./Layout";

function App() {

  return (
    <BrowserRouter>
       <Layout>
        <Routes>
          <Route path="/" element={<Mainpage />} />
        </Routes>
        </Layout>
    </BrowserRouter>
  )
}

export default App
