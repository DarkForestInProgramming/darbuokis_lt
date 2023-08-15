import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../../../Pages/Home/HomePage";
import RegisterPage from "../../../Pages/Auth/Register/RegisterPage";
import LoginPage from "../../../Pages/Auth/Login/LoginPage";
import AddAdPage from "../../../Pages/Ad/AddAd/AddAdPage";
import SingleAdPage from "../../../Pages/Ad/SingleAd/SingleAdPage";
import MyAdsPage from "../../../Pages/Ad/MyAds/MyAdsPage";
import Protected from "./Protected";
import AppNavbar from "../Navbar/AppNavbar";
import TopNav from "../TopNav/TopNav";
import AppFooter from "../Footer/AppFooter";
import { Container } from "@mui/material";

const AppRouter = () => {
  return (
    <Router>
      <Container maxWidth="lg">
        <TopNav />
        <AppNavbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<Protected Comp={AddAdPage} />} />
          <Route path="/ad/:id" element={<SingleAdPage />} />
          <Route path="/myads" element={<Protected Comp={MyAdsPage} />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<h1>Deja, toks puslapis nerastas.</h1>} />
        </Routes>
        <AppFooter />
      </Container>
    </Router>
  );
};

export default AppRouter;
