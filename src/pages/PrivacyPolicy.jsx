import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-white">
      <div className="pt-24 px-6 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-center">
          Privacy Policy
        </h1>

        <p className="text-gray-600 mb-8 text-center">
          At <strong>Shopy Courier</strong>, we value your trust and are committed
          to protecting your privacy. This Privacy Policy explains how we collect,
          use, and safeguard your personal information when you use our website,
          application, or services.
        </p>

        {/* 1 */}
        <h2 className="text-xl font-semibold mt-8 mb-2">
          1. Information We Collect
        </h2>
        <p className="text-gray-600">
          We may collect personal information such as your name, email address,
          phone number, pickup and delivery address, and shipment details when you
          register, place an order, track a shipment, or contact our support team.
        </p>

        {/* 2 */}
        <h2 className="text-xl font-semibold mt-8 mb-2">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>To process and deliver your shipments</li>
          <li>To provide real-time tracking and shipment updates</li>
          <li>To communicate service-related information</li>
          <li>To improve our platform and user experience</li>
          <li>To comply with legal and regulatory requirements</li>
        </ul>

        {/* 3 */}
        <h2 className="text-xl font-semibold mt-8 mb-2">
          3. Data Security
        </h2>
        <p className="text-gray-600">
          Shopy Courier uses secure systems and industry-standard measures to
          protect your personal information from unauthorized access, misuse, or
          disclosure.
        </p>

        {/* 4 */}
        <h2 className="text-xl font-semibold mt-8 mb-2">
          4. Sharing of Information
        </h2>
        <p className="text-gray-600">
          We do not sell or rent your personal information. Your data may be
          shared only with trusted logistics partners or service providers when
          necessary to complete deliveries or comply with legal obligations.
        </p>

        {/* 5 */}
        <h2 className="text-xl font-semibold mt-8 mb-2">
          5. Cookies
        </h2>
        <p className="text-gray-600">
          Our website may use cookies to enhance user experience, analyze usage,
          and improve functionality. You can manage cookie preferences through
          your browser settings.
        </p>

        {/* 6 */}
        <h2 className="text-xl font-semibold mt-8 mb-2">
          6. Your Rights
        </h2>
        <p className="text-gray-600">
          You have the right to access, update, or delete your personal
          information at any time. To exercise these rights, please contact us at{" "}
          <a
            href="mailto:support@shopycourier.com"
            className="text-blue-600 underline"
          >
            support@shopycourier.com
          </a>
        </p>

        {/* 7 */}
        <h2 className="text-xl font-semibold mt-8 mb-2">
          7. Changes to This Policy
        </h2>
        <p className="text-gray-600">
          Shopy Courier may update this Privacy Policy periodically. Any changes
          will be posted on this page, and continued use of our services indicates
          acceptance of the updated policy.
        </p>

        {/* 8 */}
        <h2 className="text-xl font-semibold mt-8 mb-2">
          8. Contact Us
        </h2>
        <p className="text-gray-600">
          If you have any questions or concerns about this Privacy Policy, please
          contact us at{" "}
          <a
            href="mailto:support@shopycourier.com"
            className="text-blue-600 underline"
          >
            support@shopycourier.com
          </a>
        </p>

        {/* <p className="text-sm text-gray-500 mt-10">
          Last updated: 12/01/2026
        </p> */}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
