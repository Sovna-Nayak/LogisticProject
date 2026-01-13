import React from "react";

const TermsOfUse = () => {
  return (
    <div className="bg-white">
      <div className="pt-24 px-6 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-center">
          Terms of Use
        </h1>

        <p className="text-gray-600 mb-6">
          Welcome to <strong>Shopy Courier</strong>. By accessing or using our
          website, mobile application, or services, you agree to comply with and
          be bound by these Terms of Use. Please read them carefully before using
          our platform.
        </p>

        <section className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-600">
              By using Shopy Courier services, you confirm that you have read,
              understood, and agreed to these Terms of Use. If you do not agree
              with any part of these terms, you must discontinue use of our
              services immediately.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              2. Services Provided
            </h2>
            <p className="text-gray-600">
              Shopy Courier provides logistics and courier services, including
              order pickup, shipment delivery, shipment tracking, and related
              support services. These terms apply to all users of our platform.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              3. User Responsibilities
            </h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-1">
              <li>Provide accurate, complete, and up-to-date information</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Use the platform only for lawful purposes</li>
              <li>Protect your account credentials and activity</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              4. Prohibited Activities
            </h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-1">
              <li>Illegal, fraudulent, or unauthorized use</li>
              <li>Shipping prohibited or hazardous goods</li>
              <li>Unauthorized access to systems or data</li>
              <li>Impersonation or misuse of identity</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              5. Limitation of Liability
            </h2>
            <p className="text-gray-600">
              Shopy Courier shall not be liable for any indirect, incidental, or
              consequential damages. Delays or losses caused by third-party
              partners, natural events, or circumstances beyond our control are
              not our responsibility.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              6. Intellectual Property
            </h2>
            <p className="text-gray-600">
              All content on the Shopy Courier platform, including text,
              graphics, logos, icons, and images, is the intellectual property of
              Shopy Courier. Unauthorized use is strictly prohibited.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              7. Termination of Use
            </h2>
            <p className="text-gray-600">
              Shopy Courier reserves the right to suspend or terminate access to
              its services at any time if these Terms of Use are violated.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              8. Changes to Terms
            </h2>
            <p className="text-gray-600">
              These Terms of Use may be updated periodically. Continued use of
              our services constitutes acceptance of the revised terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              9. Governing Law
            </h2>
            <p className="text-gray-600">
              These Terms of Use shall be governed by and interpreted in
              accordance with the laws applicable in the jurisdiction where
              Shopy Courier operates.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              10. Contact Information
            </h2>
            <p className="text-gray-600">
              If you have any questions regarding these Terms of Use, please
              contact us at{" "}
              <a
                href="mailto:support@shopycourier.com"
                className="text-blue-600 underline"
              >
                support@shopycourier.com
              </a>
            </p>
          </div>
        </section>

        <p className="text-sm text-gray-500 mt-10">
          Last updated: 12/01/2026
        </p>
      </div>
    </div>
  );
};

export default TermsOfUse;
