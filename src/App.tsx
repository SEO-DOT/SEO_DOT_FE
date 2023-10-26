import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyPage from "./pages/MyPage";
import Main from "./pages/Main";

const App = () => {
  return (
    <div className="sm:relative pt-[54px] pb-0 px-0 text-center min-h-screen bg-[#fff] lex items-center">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
