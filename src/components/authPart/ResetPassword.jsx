import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../../api/api";

const ResetPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    if (newPassword.length < 6) {
      setError("Password must be at least 6 characters long");
      setIsLoading(false);
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }

    try {
      const params = new URLSearchParams();
      params.append("token", token);
      params.append("newPassword", newPassword);

      const response = await api.post("/api/auth/reset-password", params, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      setSuccess(true);
      setTimeout(() => navigate("/login"), 3000);
    } catch (err) {
      if (err.response) {
        setError(err.response.data || "Password reset failed");
      } else if (err.request) {
        setError("Network error. Please try again later.");
      } else {
        setError("An unexpected error occurred.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (!token) {
    return (
      <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md text-center">
        <h2 className="text-2xl font-bold text-[#1B263B] mb-4">
          Invalid Token
        </h2>
        <p className="text-[#415A77] mb-6">
          The password reset link is invalid or has expired. Please request a
          new reset link.
        </p>
        <button
          onClick={() => navigate("/forgot-password")}
          className="mt-4 bg-[#76ABAE] hover:bg-[#1B263B] text-white font-bold py-3 px-6 rounded-lg w-full transition-all duration-300"
        >
          Request New Link
        </button>
      </div>
    );
  }

  if (success) {
    return (
      <div className="max-w-md mx-auto p-6 bg-black rounded-xl shadow-md text-center">
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
          Password Reset Successful!
        </h2>
        <p className="text-[#415A77] mb-6">
          Your password has been updated successfully. Redirecting to login
          page...
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto m-10 p-6 bg-white rounded-xl shadow-md sm:w-[80%] lg:w-[50%]">
      <h2 className="text-2xl font-bold text-[#1B263B] mb-4 text-center">
        Reset Your Password
      </h2>
      <p className="text-[#415A77] mb-6 text-center">
        Enter your new password below
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <div className="p-3 bg-red-100 text-red-700 rounded-lg text-sm">
            {error}
          </div>
        )}

        <div className="relative">
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
            minLength={6}
            className="w-full pl-10 pr-4 py-3 rounded-lg border-2 border-[#76ABAE] bg-white placeholder-[#415A77] focus:ring-2 focus:ring-[#76ABAE] focus:border-transparent"
          />
        </div>

        <div className="relative">
          <input
            type="password"
            placeholder="Confirm New Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            minLength={6}
            className="w-full pl-10 pr-4 py-3 rounded-lg border-2 border-[#76ABAE] bg-white placeholder-[#415A77] focus:ring-2 focus:ring-[#76ABAE] focus:border-transparent"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className={`flex justify-center items-center gap-2 bg-[#76ABAE] hover:bg-[#1B263B] text-white font-bold py-3 px-6 rounded-lg w-full transition-all duration-300 active:scale-95 ${
            isLoading ? "opacity-75 cursor-not-allowed" : ""
          }`}
        >
          {isLoading ? (
            <span className="animate-spin h-5 w-5 border-white">🔄</span>
          ) : (
            "Reset Password"
          )}
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
