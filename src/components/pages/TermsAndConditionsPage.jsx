import React from "react";

function TermsAndConditionsPage() {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-900 text-slate-200 p-8">
      <div className="max-w-5xl mx-auto sm:text-center my-6">
        <h1 className="text-3xl font-bold mb-2">Terms and Conditions</h1>
        <p className="mb-8 text-xl ">
          Welcome to our URL shortener website. By using our service, you agree
          to the following terms and conditions. Please read them carefully.
        </p>
      </div>
      <div className="max-w-6xl mx-auto my-5">
        <h2 className="text-2xl font-semibold mb-2"> Acceptance of Terms</h2>
        <p className="mb-8">
          By accessing and using our URL shortener service, you accept and agree
          to be bound by the terms and provision of this agreement. In addition,
          when using this service, you shall be subject to any posted guidelines
          or rules applicable to such services.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Description of Service</h2>
        <p className="mb-8">
          Our URL shortener service allows users to shorten long URLs for easier
          sharing. The service is provided "as is" and we do not guarantee the
          availability, accuracy, or reliability of the service.
        </p>
        <h2 className="text-2xl font-semibold mb-2">User Conduct</h2>
        <p className="mb-8">
          Users agree to use the service only for lawful purposes and in a way
          that does not infringe the rights of, restrict, or inhibit anyone
          else's use and enjoyment of the service. Prohibited behavior includes
          harassing or causing distress or inconvenience to any other user,
          transmitting obscene or offensive content, or disrupting the normal
          flow of dialogue within the service.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Privacy Policy</h2>
        <p className="mb-8">
          We are committed to protecting your privacy. Please review our Privacy
          Policy, which explains how we use and protect your personal
          information.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Limitation of Liability</h2>
        <p className="mb-8">
          In no event shall our URL shortener service be liable for any
          indirect, incidental, special, consequential, or punitive damages, or
          any loss of profits or revenues, whether incurred directly or
          indirectly, or any loss of data, use, goodwill, or other intangible
          losses, resulting from your access to or use of or inability to access
          or use the service.
        </p>
        <h2 className="text-2xl font-semibold mb-2"> Changes to the Terms</h2>
        <p className="mb-8">
          We reserve the right to modify these terms at any time. We will do our
          best to notify you of any changes, but it is your responsibility to
          review the terms regularly. Your continued use of the service after
          any changes have been made constitutes your acceptance of the new
          terms.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
        <p className="mb-8">
          If you have any questions about these Terms and Conditions, please
          contact us at support@yoururlshortener.com.
        </p>
      </div>
    </div>
  );
}

export default TermsAndConditionsPage;
