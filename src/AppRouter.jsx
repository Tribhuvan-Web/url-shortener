import { Route, Routes, useLocation } from "react-router-dom";
import LandingPage from "./components/pages/LandingPage";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import Navbar from "./components/otherComponent/Navbar";
import Footer from "./components/otherComponent/Footer";
import RegisterPage from "./components/pages/RegisterPage";
import { Toaster } from "react-hot-toast";
import Login from "./components/pages/LoginPage";
import DashboardLayout from "./Dashboard/DashboardLayout";
import ShortenUrlPage from "./components/otherComponent/ShortenUrlPage";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "./components/pages/ErrorPage";
import TermsAndConditionsPage from "./components/pages/TermsAndConditionsPage";
import PrivacyPolicyPage from "./components/pages/PrivacyPolicyPage";
import ContactUsPage from "./components/pages/ContactUsPage";
import ForgotPassword from "./components/authPart/ForgotPassword";
import ResetPassword from "./components/authPart/ResetPassword";

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
          path="/reset-password"
          element={
            <PrivateRoute publicPage={true}>
              <ResetPassword />
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
        <Route
          path="/terms-and-conditions"
          element={
            <PrivateRoute publicPage={false}>
              <TermsAndConditionsPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <PrivateRoute publicPage={false}>
              <PrivacyPolicyPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/contact-us"
          element={
            <PrivateRoute publicPage={false}>
              <ContactUsPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/reset"
          element={
            <PrivateRoute publicPage={true}>
              <ForgotPassword />
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
