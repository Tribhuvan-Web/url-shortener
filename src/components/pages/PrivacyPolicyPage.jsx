import React from 'react'

function PrivacyPolicyPage() {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-900 text-slate-200 p-8">
      <div className="max-w-5xl mx-auto sm:text-center my-6">
        <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
        <p className="mb-8 text-xl">
          Welcome to our URL shortener website. We are committed to protecting your privacy. Please read our privacy policy carefully.
        </p>
      </div>
      <div className="max-w-6xl mx-auto my-5">
        <h2 className="text-2xl font-semibold mb-2">Information We Collect</h2>
        <p className="mb-8">
          We collect information that you provide to us directly, such as when you create an account, use our service, or communicate with us. This information may include your name, email address, and any other information you choose to provide.
        </p>
        <h2 className="text-2xl font-semibold mb-2">How We Use Information</h2>
        <p className="mb-8">
          We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to protect our users. We may also use the information for research and analytics purposes.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Sharing of Information</h2>
        <p className="mb-8">
          We do not share your personal information with third parties except as necessary to provide our services, comply with the law, or protect our rights. We may share aggregated or anonymized information that does not directly identify you.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Security</h2>
        <p className="mb-8">
          We take reasonable measures to protect your information from unauthorized access, use, or disclosure. However, no internet or email transmission is ever fully secure or error-free.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Changes to This Policy</h2>
        <p className="mb-8">
          We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on our website. You are advised to review this policy periodically for any changes.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
        <p className="mb-8">
          If you have any questions about this privacy policy, please contact us at <a href="mailto:amitraj730182@gmail.com" className="text-blue-500 transition">
                support@shortly.com
              </a>
        </p>
      </div>
    </div>
  )
}

export default PrivacyPolicyPage
