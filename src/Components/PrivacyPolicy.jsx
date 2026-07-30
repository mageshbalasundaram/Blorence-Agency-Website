import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-3xl mx-auto p-8 mt-10">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-6">Last updated: 24.06.2024</p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
        <p>
          Welcome to Blorence Design. We are committed to protecting your
          privacy. This Privacy Policy explains our policies and procedures
          regarding any information we collect from our users.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          2. Information We Do Not Collect
        </h2>
        <p>
          We do not collect any personal information from users of our website.
          You can browse our site without providing any personal data.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. Cookies and Tracking</h2>
        <p>
          We do not use cookies or any other tracking technologies on our
          website.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          4. Changes to This Privacy Policy
        </h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify
          you of any changes by posting the new Privacy Policy on this page.
        </p>
        <p>This policy is effective as of 24.06.2024.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">5. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us
          at{" "}
          <a className="text-blue-500" href="mailto:blorencedesign@gmail.com">
            Blorencedesign@gmail.com
          </a>
          .
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
