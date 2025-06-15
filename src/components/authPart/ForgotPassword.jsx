import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../api/api";
import toast from "react-hot-toast";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    if (!email || !email.trim()) {
      setIsLoading(false);
      setErrorMessage("Email is required");
      return;
    }

    try {
      const params = new URLSearchParams();
      params.append("email", email);

      await api.post("/api/auth/forgot-password", params, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      // Always show success UI regardless of actual result (security measure)
      toast.success("Email sent");
      setIsSubmitted(true);
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data || "Request failed. Please try again.");
      } else if (error.request) {
        toast.error("Network error. Please try again later.");
      } else {
        toast.error("An unexpected error occurred.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#1B263B] via-[#2c3e50] to-[#0f172a] p-4 sm:p-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <p className="text-[#E0E1DD] mt-2">
            Reset your password in just a few steps
          </p>
        </div>

        <div className="bg-[#E0E1DD]  rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
          <div className="p-6 sm:p-8">
            {isSubmitted ? (
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-[#1B263B] mb-2">
                  Check Your Email
                </h2>
                <p className="text-[#415A77] mb-6">
                  we've sent a password reset link. Please check your inbox.{" "}
                  <br />
                </p>
                <span className="text-red-600 font-light">
                  If mail is not found please check the spam folder.
                </span>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setEmail("");
                  }}
                  className="mt-4 bg-[#76ABAE] hover:bg-[#1B263B] text-white font-bold py-3 px-6 rounded-lg w-full transition-all duration-300 active:scale-95"
                >
                  Resend Email
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-[#1B263B] mb-2 text-center">
                  Forgot Password?
                </h2>
                <p className="text-[#415A77] mb-6 text-center">
                  Enter your email and we'll send you a reset link
                </p>

                <form onSubmit={handleSubmit}>
                  {errorMessage && (
                    <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm">
                      {errorMessage}
                    </div>
                  )}

                  <div className="relative mb-4">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-[#76ABAE]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-lg border-2 border-[#76ABAE] text-[#1B263B] bg-white placeholder-[#415A77] focus:ring-2 focus:ring-[#76ABAE] focus:border-transparent"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`mt-2 flex justify-center items-center gap-2 bg-[#76ABAE] hover:bg-[#1B263B] text-white font-bold py-3 px-6 rounded-lg w-full transition-all duration-300 active:scale-95 ${
                      isLoading ? "opacity-75 cursor-not-allowed" : ""
                    }`}
                  >
                    {isLoading ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      "Reset Password"
                    )}
                  </button>
                </form>
              </>
            )}
          </div>

          <div className="bg-white/80 py-4 px-6 text-center">
            <p className="text-[#415A77]">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-bold text-[#76ABAE] hover:text-[#1B263B] transition-all duration-300"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/login"
            className="text-[#E0E1DD] hover:text-white transition-all duration-300 flex items-center justify-center gap-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
