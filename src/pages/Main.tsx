import Header from "../components/Header";
import BestBook from "../components/Main/BestBook";
import Bookmark from "../components/Main/Bookmark";
import Footer from "../components/Main/Footer";
import Nav from "../components/Main/Nav";
import NewBook from "../components/Main/NewBook";
import Notice from "../components/Main/Notice";
import Review from "../components/Main/Review";
import Visual from "../components/Main/Visual";
import slides from "../components/Main/mock.json";

const Main = () => {
  return (
    <div className="w-[375px] px-6 mx-auto">
      {/* 헤더 */}
      <Header />
      {/* 네비게이션 바 */}
      <Nav />
      {/* 메인 비주얼 */}
      <Visual slides={slides} />
      {/* 베스트 북 */}
      <BestBook />
      {/* 신간도서 */}
      <NewBook />
      {/* 인기리뷰 */}
      <Review />
      {/* 북마크리스트 */}
      <Bookmark slides={slides} />
      {/* 안내 */}
      <Notice />
      {/* 푸터 */}
      <Footer />
    </div>
  );
};

export default Main;
