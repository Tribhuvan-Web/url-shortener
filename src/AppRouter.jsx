import { Route, Routes, useLocation } from "react-router-dom";
import LandingPage from "./components/pages/LandingPage";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RegisterPage from "./components/pages/RegisterPage";
import { Toaster } from "react-hot-toast";
import Login from "./components/pages/LoginPage";
import DashboardLayout from "./Dashboard/DashboardLayout";
import ShortenUrlPage from "./components/ShortenUrlPage";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "./components/pages/ErrorPage";
import ChatAgent from "./components/ChatAgent";
import { Home } from "@mui/icons-material";

const AppRouter = () => {
  const location = useLocation();
  const hideHeaderFooter = location.pathname.startsWith("/s");

  return (
    <>
      {!hideHeaderFooter && <Navbar />}
     
      <Toaster position="bottom-center" />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute publicPage={true}>
              <LandingPage />
            </PrivateRoute>
          }
        />

        <Route
          path="/home"
          element={
            <PrivateRoute publicPage={false}>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/about"
          element={
            <PrivateRoute publicPage={false}>
              <AboutPage />
            </PrivateRoute>
          }
        />
        <Route
          path="*"
          element={
            <PrivateRoute>
              <ErrorPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/error"
          element={
            <PrivateRoute publicPage={false}>
              <ErrorPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PrivateRoute publicPage={true}>
              <RegisterPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PrivateRoute publicPage={true}>
              <Login />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute publicPage={false}>
              <DashboardLayout />
            </PrivateRoute>
          }
        />
        <Route path="/s/:url" element={<ShortenUrlPage />} />
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </>
  );
};

export default AppRouter;

export const SubDomainRouter = () => {
  return (
    <Routes>
      <Route path="/s/:url" element={<ShortenUrlPage />} />
    </Routes>
  );
};
