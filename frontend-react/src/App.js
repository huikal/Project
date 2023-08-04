import "./App.css";
// 테마 css import
// css 는 부모 컴포넌트에 1번만 import 하면
// 자식 컴포넌트도 같은 디자인이 적용됨
import "./assets/css/style.css";
// 리뷰/로그인 css import
import "./assets/css/review.css";
import "./assets/css/login.css";

// 메뉴 라이브러리 import
import { Routes, Route } from "react-router-dom";

// 페이지 컴포넌트 import
// 공통 컴포넌트(고정)
import NavCom from "./components/common/NavCom";
import FooterCom from "./components/common/FooterCom";

// 일반 페이지 컴포넌트
import ReservationDetail from "./pages/contact/reservation/ReservationDetail";
import Magazine from "./pages/Magazine";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Elements from "./pages/Elements";
import Services from "./pages/Services";
import Reservation from "./pages/contact/reservation/Reservation";
import ReservationList from "./pages/contact/reservation/ReservationList";
import AddReservation from "./pages/contact/reservation/AddReservation";
import MyAccount from "./pages/mypage/MyAccount";
import Home from "./pages/Home";
import MyAccountEdit from "./pages/mypage/MyAccountEdit";
import MyReservation from "./pages/mypage/MyReservation";
import ReservationEdit from "./pages/mypage/ReservationEdit";
import ReservationCancle from "./pages/mypage/ReservationCancle";

import DeptDetail from "./pages/DeptDetail";
import EmpDetail from "./pages/EmpDetail";
import FaqDetail from "./pages/FaqDetail";

// 상품 페이지 import
// import PayComplete from "./pages/product/PayComplete";
import Accomodation from "./pages/product/Accomodation";
import Activity from "./pages/product/Activity";
import Transportation from "./pages/product/Transportation";
import Cart from "./pages/Cart";
// TODO: 변경
import ProductDetail from "./pages/product/ProductDetail";
import TourDetail from './pages/TourDetail';

// 로그인/회원기입 import
import Membership from "./pages/registration/Membership";
import LoginId from "./pages/registration/LoginId";
import LoginPassword from "./pages/registration/LoginPassword";

// 리뷰 import
import Create from "./pages/review/Creat";
import MyReview from "./pages/review/MyReview";
import EditReview from "./pages/review/EditReview";

// 정책 페이지 import
import ServicePolicy from "./pages/policy/ServicePolicy";
import DataPolicy from "./pages/policy/DataPolicy";

function App() {
  return (
    <div className="App">
      {/* NavCom : 메뉴 시작 */}
      <NavCom />
      {/* NavCom : 메뉴 끝 */}

      {/* 변경되는 부분 : Routes 시작 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/elements" element={<Elements />} />
        <Route path="/services" element={<Services />} />
        <Route path="/magazine/:cid" element={<Magazine />} />
        <Route path="/reservation" element={<ReservationList />} />
        <Route path="/add-reservation" element={<AddReservation />} />
        <Route path="/reservation/:email" element={<Reservation />} />
        <Route
          path="/reservation/:tagOne/:tagSecond"
          element={<ReservationDetail />}
        />
        <Route path="/myAccount" element={<MyAccount />} />
        <Route path="/myAccount/:cid" element={<MyAccountEdit />} />
        <Route path="/myReservation" element={<MyReservation />} />
        <Route path="/reservationEdit" element={<ReservationEdit />} />
        <Route path="/reservationCancle" element={<ReservationCancle />} />
        {/* TODO: 변경 */}
        <Route path="/tours/:tname" element={<TourDetail />} />
        <Route path="/dept/:dname" element={<DeptDetail />} />
        <Route path="/emp/:ename" element={<EmpDetail />} />
        <Route path="/faq/:title" element={<FaqDetail />} />

        <Route path="/accommodation" element={<Accomodation />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/transport" element={<Transportation />} />
        {/* TODO: 변경 */}
        <Route path="/tour/:tid" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="/payComplete" element={<PayComplete />} /> */}
        {/* 로그인/회원가입 추가 */}
        <Route path="/login-password" element={<LoginPassword />} />
        <Route path="/login-id" element={<LoginId />} />
        <Route path="/membership" element={<Membership />} />
        {/* 리뷰 추가 */}
        <Route path="/creat" element={<Create />} />
        <Route path="/my-review" element={<MyReview />} />
        <Route path="/my-reivew/:bid/:boardParent" element={<EditReview />} />
        {/* 정책 추가 */}
        <Route path="/servicePolicy" element={<ServicePolicy />} />
        <Route path="/dataPolicy" element={<DataPolicy />} />
      </Routes>
      {/* 변경되는 부분 : Routes 끝 */}

      {/* FooterCom : 꼬리말 시작 */}
      <FooterCom />
      {/* 꼬리말 끝 */}
    </div>
  );
}

export default App;
