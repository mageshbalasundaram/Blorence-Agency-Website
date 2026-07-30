const TermsAndConditions = () => {
  return (
    <div className="max-w-3xl mx-auto p-8 mt-10">
      <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
      <p className="mb-6">Last updated: 24.06.2024</p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
        <p>
          Welcome to Blorence Design. By accessing our website at{" "}
          <a className="text-blue-500" href="blorencedesign.com">
            www.Blorencedesign.com
          </a>
          , you agree to these terms. If you disagree, please do not use our
          site.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          2. Intellectual Property
        </h2>
        <p>
          All content on this site is owned by Blorence Design and protected by
          law. Unauthorized use is prohibited.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. User Conduct</h2>
        <p>
          Users must not misuse our site. Prohibited activities include, but are
          not limited to, harassment, hacking, and fraudulent behavior.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          4. Limitation of Liability
        </h2>
        <p>
          Blorence Design is not liable for any damages resulting from the use
          of our site. We reserve the right to modify these terms at any time.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">5. Governing Law</h2>
        <p>These terms are governed by the laws of india.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">6. Contact Us</h2>
        <p>
          If you have any questions, please contact us at{" "}
          <a className="text-blue-500" href="mailto:blorencedesign@gmail.com">
            blorencedesign@gmail.com
          </a>
          .
        </p>
      </section>
    </div>
  );
};

export default TermsAndConditions;
